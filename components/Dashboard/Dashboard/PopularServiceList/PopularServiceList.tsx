import { CardWrapper } from "../../ui/DashboardStatCard";
import { ScrollContainer } from "../BestPerformanceStaffList/BestPerformanceStaffList";

const popularServiceData = [
  {
    title: "Gel Manicure",
    subTitle: "45% bookings",
    value: "14,172",
    progress: 45,
    color: "#228573",
  },
  {
    title: "Pedicure Deluxe",
    subTitle: "38% bookings",
    value: "12,476",
    progress: 38,
    color: "#E376B9",
  },
  {
    title: "Nail Art Design",
    subTitle: "32% bookings",
    value: "9,80",
    progress: 32,
    color: "#DDDEED",
  },
  {
    title: "Nail Art Design",
    subTitle: "32% bookings",
    value: "9,80",
    progress: 32,
    color: "#DDDEED",
  },
  {
    title: "Nail Art Design",
    subTitle: "32% bookings",
    value: "9,80",
    progress: 32,
    color: "#DDDEED",
  },
  {
    title: "Nail Art Design",
    subTitle: "32% bookings",
    value: "9,80",
    progress: 32,
    color: "#DDDEED",
  },
];

export default function PopularServiceList() {
  return (
    <ScrollContainer title="Popular Services">
      {popularServiceData.map((item) => (
        <Proggressbar key={item.title} {...item} />
      ))}
    </ScrollContainer>
  );
}

interface ProggressbarProps {
  progress: number;
  title: string;
  subTitle: string;
  value: string;
  color?: string;
}

function Proggressbar({
  progress = 40,
  color = "#228573",
  title,
  subTitle,
  value,
}: ProggressbarProps) {
  return (
    <div>
      <div className="flex gap-1">
        <p className="text-xs font-semibold text-heading">{title}</p>
        <p className="text-[11px] text-[#777779]">{subTitle}</p>
      </div>

      <div className="flex gap-2.5 text-[#434345]">
        <div className="mt-1 bg-[#F6F6F6] h-[9px] w-full overflow-hidden rounded-2xl">
          <div
            style={{ width: `${progress}%`, backgroundColor: color }}
            className="h-full rounded-2xl"
          ></div>
        </div>

        <p className="text-xs font-semibold text-heading">{value}</p>
      </div>
    </div>
  );
}
