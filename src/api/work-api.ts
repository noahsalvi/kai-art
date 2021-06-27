import { sotion } from "sotion";
import type { Work } from "$models/work";

export class WorkAPI {
  private static workID = "c68f87557d2d4e49b93c8d9d422b66ef";
  private static works: Work[];

  static async getWorks() {
    if (!this.works) {
      this.works = await sotion.fetchTable(this.workID);
      console.log(this.works);
    }

    return this.works;
  }
}
