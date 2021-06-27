import { sotion } from "sotion";
import type { Category } from "src/models/category";

export class CategoryAPI {
  private static categoryID = "2c8448aec60e47c790f43027bf0bf066";
  private static categories: Category[];

  static async getCategories() {
    if (!this.categories) {
      this.categories = await sotion.fetchTable(this.categoryID);
    }

    return this.categories;
  }
}
