import { Category } from "./category.model";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  categories: Category[];
  // Add other user-specific fields as needed
}
