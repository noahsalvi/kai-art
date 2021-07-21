import fs from "fs";
import fetch, { Response } from "node-fetch";
import type { Request } from "@sveltejs/kit";
import hash from "string-hash";

const PATH = "./cache/images/";

fs.mkdir(PATH, { recursive: true }, (_) => {});

export async function get({ query }: Request) {
  const url = recoverNotionURL(query);
  const imageName = getNameFromUrl(url);
  const image = await getImage(imageName);

  if (!image) {
    fetch(url).then((response) => {
      createImageFromResponse(imageName, response);
    });

    // Redirect to original path
    return {
      status: "302",
      headers: {
        location: url,
      },
    };
  }

  return {
    status: "200",
    headers: {
      // "cache-control": headers.get("cache-control"),
      "content-type": "image/png",
    },
    body: image,
  };
}

async function createImageFromResponse(name: string, response: Response) {
  const buffer = await response.buffer();

  fs.writeFile(PATH + name, buffer, () => {
    console.log("Caching new image: " + name);
  });
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