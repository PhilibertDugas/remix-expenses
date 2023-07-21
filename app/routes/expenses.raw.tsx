import { json } from "@remix-run/node";
import { getExpenses } from "~/models/expenses.server";

export const loader = async () => {
  const expenses = await getExpenses();
  return json({ expenses });
};
