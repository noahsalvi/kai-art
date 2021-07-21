import fs from "fs";
import fetch from "node-fetch";
let image;
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js
  const imageUrl =
    "https://www.notion.so/image/https:%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04c57f53-2ebe-44c1-9c88-0811331e476e%2Fgian_doraemon.png?table=block&id=61286a21-4270-4a80-a769-691b993d80bc&cache=v2";

  // if (!image || true) {

  if (!image) {
    fetch(imageUrl).then(async (response) => {
      image = await response.buffer();
      const headers = response.headers;
    });
    // Redirect to original path
    return {
      status: "302",
      headers: {
        location: imageUrl,
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
  // console.log(response);
  // fs.writeFile(`./image.jpg`, Buffer.from(buffer), () =>
  //   console.log("finished")
  // );

  // }
}
