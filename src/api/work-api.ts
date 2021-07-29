import { sotion } from "sotion";
import type { Work } from "../models/work";
import cacheImage from "../utils/cacheImage";

export class WorkAPI {
  private static workID = "c68f87557d2d4e49b93c8d9d422b66ef";
  private static works: Work[];

  static async getWorks() {
    if (!this.works) {
      const newWorks: Work[] = await sotion.fetchTable(this.workID);
      // newWorks.forEach((work) =>
      //   work.thumbnail?.map((img) => (img.url = cacheImage(img.url)))
      // );
      this.works = newWorks;
    }

    return this.works;
  }
}
