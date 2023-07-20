import { ActionArgs, redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import invariant from "tiny-invariant";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { addExpense } from "~/models/expenses.server";

export const action = async ({ request }: ActionArgs) => {
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

  await addExpense(expenseData);
  return redirect("/expenses");
};

export default function ExpensesAddPage() {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("/expenses");
  };
  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}
