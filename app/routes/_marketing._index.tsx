import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FaDollarSign, FaArrowRight, FaChartBar } from "react-icons/fa";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <section className="marketing-section m-24">
        <header className="flex gap-8 items-center">
          <FaDollarSign className="text-lg text-white" />
          <h2 className="m-0 text-white font-bold text-lg">A Central Space</h2>
        </header>
        <div className="marketing-content flex gap-8 mx-8 my-0">
          <div className="marketing-image w-1/2 rounded-lg shadow-md p-2 bg-blue-500 flex justify-center items-center -rotate-6">
            <img
              className="w-full rounded-md"
              src="images/expenses-management.jpg"
              alt="A list of expenses."
            />
          </div>
          <div className="marketing-explanation w-1/2">
            <p className="text-white">
              Manage your expenses in one central place.
            </p>
            <p>
              <Link
                className="cta px-8 py-2 bg-blue-500 text-white rounded-full border-none inline-flex gap-2 items-center shadow-md"
                to="/expenses"
              >
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="marketing-section text-right">
        <header className="flex justify-end items-center gap-8">
          <FaChartBar className="text-white text-lg" />
          <h2 className="m-0 text-white font-bold text-lg">
            Detailed Analytics
          </h2>
        </header>
        <div className="marketing-content flex gap-8 mx-12">
          <p className="marketing-explanation text-white">
            Benefit from best-in-class analytics to understand your spending
            patterns.
          </p>
          <div className="marketing-image  w-1/2 rounded-lg shadow-md p-2 bg-blue-500 flex justify-center items-center rotate-6">
            <img
              className="w-full rounded-md"
              src="images/expenses-chart.jpg"
              alt="A demo bar chart."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
