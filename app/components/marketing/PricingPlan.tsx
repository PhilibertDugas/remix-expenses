import { IconType } from "react-icons";

interface Props {
  title: string;
  price: string;
  perks: string[];
  icon: IconType;
}
function PricingPlan({ title, price, perks, icon }: Props) {
  const Icon = icon;
  return (
    <article>
      <header className="flex flex-col items-center p-4">
        <div className="my-4 w-16 h-16 text-2xl flex justify-center items-center text-white border-solid border-white border-2 rounded-full">
          <Icon />
        </div>
        <h2 className="m-0 text-slate-100">{title}</h2>
        <p className="mt-2 text-sm">{price}</p>
      </header>
      <div className="p-4 bg-white text-black">
        <ol>
          {perks.map((perk) => (
            <li className="mx-0 my-4" key={perk}>
              {perk}
            </li>
          ))}
        </ol>
        <div className="mt-12 mb-6">
          <a
            className="text-slate-50 bg-blue-500 px-4 py-2 hover:bg-blue-200 rounded-full"
            href="/not-implemented"
          >
            Learn More
          </a>
        </div>
      </div>
    </article>
  );
}

export default PricingPlan;
