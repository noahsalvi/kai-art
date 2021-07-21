import { sotion } from "sotion";
import type { Category } from "../models/category";
import cacheImage from "../utils/cacheImage";

export class CategoryAPI {
  private static categoryID = "2c8448aec60e47c790f43027bf0bf066";
  private static categories: Category[];

  static async getCategories() {
    if (!this.categories) {
      const newCategories: Category[] = await sotion.fetchTable(
        this.categoryID
      );
      newCategories.forEach((category) =>
        category.thumbnail.map((img) => (img.url = cacheImage(img.url)))
      );
      this.categories = newCategories;
    }

    return this.categories;
  }
}
