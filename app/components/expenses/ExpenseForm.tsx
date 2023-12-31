import { Form, NavLink } from "@remix-run/react";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
}

interface Props {
  expense?: Expense;
}

function ExpenseForm({ expense }: Props) {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  const defaultValue = expense
    ? {
        title: expense.title,
        amount: expense.amount,
        date: expense.date.slice(0, 10),
      }
    : {
        title: "",
        amount: 0,
        date: today,
      };

  return (
    <Form method="post" className="p-2">
      <p className="p-4">
        <label className="block mb-2 text-white" htmlFor="title">
          Expense Title
        </label>
        <input
          className="block mb-2 p-2 w-full rounded-md border-none"
          type="text"
          id="title"
          name="title"
          required
          maxLength={30}
          defaultValue={defaultValue.title}
        />
      </p>

      <div className="flex gap-8 text-left w-full">
        <p className="p-4 w-full ">
          <label className="block mb-2  text-white" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            className="block mb-2 p-2 w-full rounded-md border-none"
            required
            defaultValue={defaultValue.amount}
          />
        </p>
        <p className="p-4 w-full">
          <label className="block mb-2  text-white" htmlFor="date">
            Date
          </label>
          <input
            className="block mb-2 p-2 w-full rounded-md border-none"
            type="date"
            id="date"
            name="date"
            max={today}
            required
            defaultValue={defaultValue.date}
          />
        </p>
      </div>
      <div className="mt-8 mb-4 mx-4 items-center gap-4 flex justify-end">
        <NavLink
          className="text-sm text-blue-200 hover:text-blue-800"
          to="/expenses"
        >
          Cancel
        </NavLink>
        <button className="bg-blue-200 border-none rounded-full px-8 py-2 text-sm text-white hover:bg-blue-800">
          Save Expense
        </button>
      </div>
    </Form>
  );
}

export default ExpenseForm;
