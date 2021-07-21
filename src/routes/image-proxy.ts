import fs from "fs";
import fetch from "node-fetch";
import type { Request } from "@sveltejs/kit";
import hash from "string-hash";

const PATH = "./cache/images/";

fs.mkdir(PATH, { recursive: true }, (err) => {});

export async function get({ query }: Request) {
  const url = parseNotionURL(query);

  // if (!image || true) {
  const image = await getImage(url);
  console.log("here");
  console.log(image ?? "No image");
  if (!image) {
    const response = await fetch(url);

    const imageBuffer = await response.buffer();
    console.log("test");
    const fileName = `${hash(url)}.${
      response.headers.get("content-type").split("/")?.[1]
    }`;
    fs.writeFile(PATH + fileName, imageBuffer, () => {
      console.log("Created new image: " + url);
    });
  }

  //   if (!image) {
  //     fetch(url).then(async (response) => {
  //       image = await response.buffer();
  //       const headers = response.headers;
  //     });
  //     // Redirect to original path
  //     return {
  //       status: "302",
  //       headers: {
  //         location: url,
  //       },
  //     };
  //   }

  return {
    status: "200",
    headers: {
      // "cache-control": headers.get("cache-control"),
      "content-type": "image/png",
    },
    body: image,
  };
  // console.log(response);
  // fs.writeFile(`./image.jpg`, Buffer.from(buffer), () =>
  //   console.log("finished")
  // );

  // }
}

function parseNotionURL(query: URLSearchParams) {
  console.log(
    "https://www.notion.so/image/https:%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04c57f53-2ebe-44c1-9c88-0811331e476e%2Fgian_doraemon.png?table=block&id=61286a21-4270-4a80-a769-691b993d80bc&cache=v2\n"
  );
  const url = query.get("url");

  const secondHttpPosition = getPosition(url, "https:", 2);
  if (secondHttpPosition === -1) return url;

  query.delete("url");
  query.set("table", "block");

  const rootDomain = url.substring(0, secondHttpPosition + 6);
  const secondDomain = url.substring(secondHttpPosition + 6, url.length);

  return rootDomain + encodeURIComponent(secondDomain) + "?" + query.toString();
}

function getPosition(text: string, subText: string, index: number) {
  const position = text.split(subText, index).join(subText).length;
  return position >= text.length ? -1 : position;
}

async function getImage(name: string) {
  return await new Promise<Buffer>((res, rej) => {
    fs.readFile(`./cache/images/${hash(name)}.*`, (_, data) => {
      return res(data);
    });
  });
}
