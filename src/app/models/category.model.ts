export interface Category {
  name: string;
  type: CategoryType;
  budget?: Budget;
  subCategories?: SubCatagory[];
}

interface SubCatagory {
  name: string;
  budget?: Budget;
  subCategories?: SubCatagory[];
}

interface Budget {
  amount: number; // Budget amount
  alertPercantages: AlertPercantage[] // Alerts at mentioned percentages of budget like (50%, 80% and 100%)
  overBudgetPercantageInterval: number; // Alerts after over-budget at mentioned  paercentage (Like 25%, alert after budget excceed by 25%, 50%, 75% and so on)
}

enum AlertPercantage {
  'fifty' = 50,
  'eighty' = 80,
  'hundred' = 100
}

export enum CategoryType {
  'INCOME' = 'income',
  'EXPENSE' = 'expense'
}
