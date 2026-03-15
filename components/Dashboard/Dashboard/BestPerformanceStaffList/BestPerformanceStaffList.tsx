import { Star } from "lucide-react";
import Avater from "../../../Reusable/Avater";
import { CardWrapper } from "../../ui/DashboardStatCard";

const bestPerformanceStaffData = [
  {
    name: "Sophia Martinez",
    designation: "Senior Barber",
    rating: "4.7",
    image: "/Images/dashboard/staff-1.png",
  },
  {
    name: "jenny Wilcon",
    designation: "Junior Barber",
    rating: "4.9",
    image: "/Images/dashboard/staff-2.png",
  },
  {
    name: "Wade Warren",
    designation: "Swnior Barber",
    rating: "5.0",
    image: "/Images/dashboard/staff-3.png",
  },
  {
    name: "Wade Warren",
    designation: "Swnior Barber",
    rating: "5.0",
    image: "/Images/dashboard/staff-3.png",
  },
  {
    name: "Wade Warren",
    designation: "Swnior Barber",
    rating: "5.0",
    image: "/Images/dashboard/staff-3.png",
  },
  {
    name: "Wade Warren",
    designation: "Swnior Barber",
    rating: "5.0",
    image: "/Images/dashboard/staff-3.png",
  },
  {
    name: "Wade Warren",
    designation: "Swnior Barber",
    rating: "5.0",
    image: "/Images/dashboard/staff-3.png",
  },
];

export default function BestPerformanceStaffList() {
  return (
    <ScrollContainer title="Best Performance Staff">
      {bestPerformanceStaffData.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-2 border border-[#F6F8FA] p-2 rounded-xl"
        >
          <Avater
            isActive={true}
            src={item.image}
            name={item.name}
            alt={item.name}
          />
          <div className="flex-1">
            <p className="text-[#0D0D12] text-sm font-medium">{item.name}</p>
            <p className="text-[#666D80] text-sm font-medium">
              {item.designation}
            </p>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm font-semibold">
            <Star className="size-4" fill="#FFB900" color="#FFB900" />
            {item.rating}
          </div>
        </div>
      ))}
    </ScrollContainer>
  );
}

export function ScrollContainer({
  children,
  title,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <CardWrapper className="flex flex-col h-full pr-2">
      <p className="text-heading text-base font-semibold leading-5">{title}</p>
      <div className="mt-3 gap-2.5 flex flex-col flex-1 overflow-y-scroll custom-scroll pr-3">
        {children}
      </div>
    </CardWrapper>
  );
}
