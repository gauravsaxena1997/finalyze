import { Category, CategoryType } from "../models/category.model";

export const globalCategories: Category[] = [
  {
    name: "Living Expenses",
    type: CategoryType.EXPENSE,
    subCategories: [
      { name: "Rent/Mortgage" },
      { name: "Utilities" },
      { name: "Home Maintenance" }
    ]
  },
  {
    name: "Transportation",
    type: CategoryType.EXPENSE,
    subCategories: [
      { name: "Public Transportation" },
      { name: "Gas/Fuel" },
      { name: "Car Maintenance" }
    ]
  },
  {
    name: "Health and Wellness",
    type: CategoryType.EXPENSE,
    subCategories: [
      { name: "Healthcare/Medical" },
      { name: "Fitness" },
      { name: "Personal Care" }
    ]
  },
  {
    name: "Entertainment",
    type: CategoryType.EXPENSE,
    subCategories: [
      { name: "Dining Out" },
      { name: "Movies/Shows" },
      { name: "Hobbies" }
    ]
  },
  {
    name: "Finance",
    type: CategoryType.EXPENSE,
    subCategories: [
      { name: "Insurance" },
      { name: "Taxes" }
    ]
  },
  {
    name: "Travel",
    type: CategoryType.EXPENSE,
    subCategories: [
      { name: "Flights" },
      { name: "Accommodation" },
      { name: "Transportation" }
    ]
  },
  {
    name: "Education",
    type: CategoryType.EXPENSE,
    subCategories: [
      { name: "Tuition" },
      { name: "Books/Supplies" }
    ]
  },
  {
    name: "Food",
    type: CategoryType.EXPENSE,
    subCategories: [
      { name: "Groceries" },
      { name: "Dining Out" },
      { name: "Takeout/Delivery" },
      { name: "Coffee/Tea" },
      { name: "Snacks" }
    ]
  },
  {
    name: "Household",
    type: CategoryType.EXPENSE,
    subCategories: [
      { name: "Furniture" },
      { name: "Appliances" },
      { name: "Home Decor" },
      { name: "Cleaning Supplies" },
      { name: "Utilities" }
    ]
  },
  {
    name: "Miscellaneous",
    type: CategoryType.EXPENSE,
    subCategories: [
      { name: "Gifts/Donations" },
      { name: "Technology/Internet" },
      { name: "Miscellaneous" }
    ]
  },
  {
    name: "Salary",
    type: CategoryType.INCOME,
    subCategories: []
  },
  {
    name: "Freelance/Contract Work",
    type: CategoryType.INCOME,
    subCategories: []
  },
  {
    name: "Side Hustle",
    type: CategoryType.INCOME,
    subCategories: []
  },
  {
    name: "Business Income",
    type: CategoryType.INCOME,
    subCategories: []
  },
  {
    name: "Investments",
    type: CategoryType.INCOME,
    subCategories: [
      { name: "Dividends" },
      { name: "Capital Gains" },
      { name: "Interest" }
    ]
  },
  {
    name: "Rental Income",
    type: CategoryType.INCOME,
    subCategories: []
  },
  {
    name: "Cashback",
    type: CategoryType.INCOME,
    subCategories: []
  },
  {
    name: "Interest",
    type: CategoryType.INCOME,
    subCategories: []
  },
  {
    name: "Other",
    type: CategoryType.INCOME,
    subCategories: []
  }
];
