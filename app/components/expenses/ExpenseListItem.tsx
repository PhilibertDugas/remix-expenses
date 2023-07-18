import { Link } from "@remix-run/react";

interface Props {
  id: string;
  title: string;
  amount: number;
}

function ExpenseListItem({ id, title, amount }: Props) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="m-6 p-4 bg-blue-200 rounded-lg flex justify-between items-baseline text-slate-50">
      <div>
        <h2 className="m-0 font-bold text-2xl">{title}</h2>
        <p className="m-0">${amount.toFixed(2)}</p>
      </div>
      <menu className="flex gap-4 items-center m-0 p-0">
        <button
          className="bg-transparent border-none p-0 text-slate-50 hover:text-blue-500"
          onClick={deleteExpenseItemHandler}
        >
          Delete
        </button>
        <Link
          className="bg-transparent border-none p-0 text-slate-50 hover:text-blue-500"
          to={id}
        >
          Edit
        </Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
