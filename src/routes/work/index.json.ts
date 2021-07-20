import { WorkAPI } from "../../api/work-api";

let counter = 0;
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
  // the `slug` parameter is available because this file
  // is called [slug].json.js

  const works = await WorkAPI.getWorks();
  console.log(counter++);

  if (works) {
    return {
      body: {
        message: "This worked, counter: " + counter,
      },
    };
  }
}
