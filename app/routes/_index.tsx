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
        <header className="flex gap-8 items-center bg-blue-200">
          <FaDollarSign />
          <h2 className="m-0">A Central Space</h2>
        </header>
        <div className="marketing-content">
          <div className="marketing-image">
            <img
              src="images/expenses-management.jpg"
              alt="A list of expenses."
            />
          </div>
          <div className="marketing-explanation">
            <p>Manage your expenses in one central place.</p>
            <p>
              <Link className="cta" to="/expenses">
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="marketing-section">
        <header>
          <FaChartBar />
          <h2>Detailed Analytics</h2>
        </header>
        <div className="marketing-content">
          <p className="marketing-explanation">
            Benefit from best-in-class analytics to understand your spending
            patterns.
          </p>
          <div className="marketing-image">
            <img src="images/expenses-chart.jpg" alt="A demo bar chart." />
          </div>
        </div>
      </section>
    </main>
  );
}
