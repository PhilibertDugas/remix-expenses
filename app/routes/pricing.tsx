import { FaTrophy, FaHandshake } from "react-icons/fa";

import PricingPlan from "~/components/marketing/PricingPlan";

const PRICING_PLANS = [
  {
    id: "p1",
    title: "Basic",
    price: "Free forever",
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: FaHandshake,
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: FaTrophy,
  },
];

export default function PricingPage() {
  return (
    <main id="pricing" className="text-center">
      <h2 className="text-white font-bold text-xl p-4">
        Great Product, Simple Pricing
      </h2>
      <ol
        id="pricing-plans"
        className="w-10/12 mx-12 my-auto flex justify-center gap-8"
      >
        {PRICING_PLANS.map((plan) => (
          <li
            key={plan.id}
            className="bg-blue-500 rounded-md overflow-hidden shadow-md text-slate-100 w-1/2"
          >
            <PricingPlan
              title={plan.title}
              price={plan.price}
              perks={plan.perks}
              icon={plan.icon}
            />
          </li>
        ))}
      </ol>
    </main>
  );
}

export function meta() {}
