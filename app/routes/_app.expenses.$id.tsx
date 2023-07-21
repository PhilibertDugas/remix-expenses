import { ActionArgs, redirect } from "@remix-run/node";
import { useMatches, useNavigate, useParams } from "@remix-run/react";
import invariant from "tiny-invariant";
import ExpenseForm, { Expense } from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { deleteExpense, updateExpense } from "~/models/expenses.server";

/*export const loader = async ({ params }: LoaderArgs) => {
  const expenseId = params.id;
  invariant(typeof expenseId === "string", "expense ID must be present");

  const expense = await getSingleExpense(expenseId);
  invariant(expense !== null, "expense must be present");
  return expense;
};*/

export const action = async ({ params, request }: ActionArgs) => {
  const expenseId = params.id;
  invariant(typeof expenseId === "string", "id must be present");

  const method = request.method;
  if (method === "DELETE") {
    await deleteExpense(expenseId);
    return redirect("/expenses");
  }

  const formData = await request.formData();
  const title = formData.get("title");
  const date = formData.get("date");
  const amount = formData.get("amount");

  invariant(typeof title === "string", "title must be present");
  invariant(typeof date === "string", "date must be present");
  invariant(typeof amount === "string", "amount must be present");

  const expenseData = {
    title: title,
    date: new Date(date),
    amount: +amount,
  };
  await updateExpense(expenseId, expenseData);
  return redirect("/expenses");
};

export default function ExpensesIdPage() {
  const navigate = useNavigate();
  const matches = useMatches();
  const { expenses } = matches.find(
    (match) => match.id === "routes/_app.expenses"
  )?.data as { expenses: Expense[] };
  const params = useParams();
  const expenseData = expenses.find((expense) => expense.id === params.id);

  const closeHandler = () => {
    navigate("/expenses");
  };
  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm expense={expenseData} />
    </Modal>
  );
}
