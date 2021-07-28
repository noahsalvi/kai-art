import fs from "fs";
import fetch, { Response } from "node-fetch";
import type { EndpointOutput, Request } from "@sveltejs/kit";
import hash from "string-hash";

const PATH = "./cache/images/";

fs.mkdir(PATH, { recursive: true }, (_) => {});

export async function get({ query }: Request): Promise<EndpointOutput> {
  const url = recoverNotionURL(query);
  const imageName = getNameFromUrl(url);
  let image = await getImage(imageName);

  if (!image) {
    const response = await fetch(url);
    image = await createImageFromResponse(imageName, response);
  }

  const contentType = "image/" + (imageName.split(".")?.[1] ?? "png");
  const contentLength = image.length;

  console.log({ image });

  return {
    status: 200,
    headers: {
      // "cache-control": headers.get("cache-control"),
      // "content-length": contentLength,
      "content-type": contentType,
    },
    body: image,
  };
}

async function createImageFromResponse(name: string, response: Response) {
  const buffer = await response.buffer();

  await new Promise<void>((res) => {
    fs.writeFile(PATH + name, buffer, () => {
      console.log("Caching new image: " + name);
      res();
    });
  });

  return buffer;
}

async function getImage(name: string) {
  return await new Promise<Buffer>((res, rej) => {
    fs.readFile(`./cache/images/${name}`, (_, data) => {
      return res(data);
    });
  });
}

function recoverNotionURL(query: URLSearchParams) {
  const url = query.get("url");

  const secondHttpPosition = getPosition(url, "https:", 2);
  if (secondHttpPosition === -1) return url;

  query.delete("url");
  query.set("table", "block");

  const rootDomain = url.substring(0, secondHttpPosition + 6);
  const secondDomain = url.substring(secondHttpPosition + 6, url.length);

  return rootDomain + encodeURIComponent(secondDomain) + "?" + query.toString();
}

function getNameFromUrl(url: string) {
  return hash(url) + "-" + url.match(/(?<=%2F)(?:(?!%2F).)*?(?=%3F)/) ?? "";
}

function getPosition(text: string, subText: string, index: number) {
  const position = text.split(subText, index).join(subText).length;
  return position >= text.length ? -1 : position;
}
