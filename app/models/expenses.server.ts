import { prisma } from "../data/database.server";
import type { Expense } from "@prisma/client";

export const addExpense = async (
  expenseData: Pick<Expense, "title" | "amount" | "date">
) => {
  try {
    return await prisma.expense.create({ data: expenseData });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export async function getExpenses() {
  return prisma.expense.findMany();
}
