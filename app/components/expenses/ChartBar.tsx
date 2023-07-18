interface DataPoint {
  maxValue: number;
  value: number;
  label: string;
}
const ChartBar = ({ maxValue, value, label }: DataPoint) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div>
      <div className="h-40 flex flex-col justify-end">
        <div
          className="rounded-sm bg-blue-200"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="mt-2 text-white">{label}</div>
    </div>
  );
};

export default ChartBar;
