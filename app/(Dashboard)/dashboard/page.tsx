import BestPerformanceStaffList from "@/components/Dashboard/Dashboard/BestPerformanceStaffList/BestPerformanceStaffList";
import BookingsListTable from "@/components/Dashboard/Dashboard/BookingsListTable/BookingsListTable";
import PopularServiceList from "@/components/Dashboard/Dashboard/PopularServiceList/PopularServiceList";
import RevenueAnalyticsChart from "@/components/Dashboard/Dashboard/RevenueAnalyticsChart/RevenueAnalyticsChart";
import DashboardStatCard from "@/components/Dashboard/ui/DashboardStatCard";
import CalendarIcon from "@/components/icons/CalendarIcon";
import CircleDollarSignIcon from "@/components/icons/CircleDollarSignIcon";
import UsersIcon from "@/components/icons/UsersIcon";

const cardData = [
  {
    icon: <CircleDollarSignIcon />,
    subTitle: "Total Earnings",
    title: "$75,450",
  },
  {
    icon: <CalendarIcon />,
    subTitle: "Total Bookings",
    title: "1500",
  },
  {
    icon: <UsersIcon />,
    subTitle: "Total Customers",
    title: "4500",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6">
      <section className="grid gap-6 xl:grid-cols-[1fr_350px]">
        <div className="flex flex-col gap-6">
          <div className="grid md:grid-cols-3 gap-3">
            {cardData.map((item) => (
              <DashboardStatCard key={item.subTitle} {...item} />
            ))}
          </div>

          <RevenueAnalyticsChart />
        </div>

        <div className="grid gap-6 auto-rows-[280px] lg:grid-cols-2 xl:grid-cols-1 xl:grid-rows-[200px_380px]">
          <PopularServiceList />
          <BestPerformanceStaffList />
        </div>
      </section>

      <div className="mt-6">
        <BookingsListTable />
      </div>
    </div>
  );
}
