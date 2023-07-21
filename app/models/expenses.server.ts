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

export const getSingleExpense = (id: string) => {
  return prisma.expense.findFirst({ where: { id } });
};

export const updateExpense = (
  id: string,
  expenseData: Pick<Expense, "title" | "amount" | "date">
) => {
  return prisma.expense.update({ where: { id }, data: expenseData });
};

export const deleteExpense = (id: string) => {
  return prisma.expense.delete({ where: { id } });
};
