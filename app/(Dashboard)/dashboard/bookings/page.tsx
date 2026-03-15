import RecentBookingsTable from "@/components/Dashboard/Customers/RecentBookingsTable/RecentBookingsTable";
import DashboardStatCard from "@/components/Dashboard/ui/DashboardStatCard";
import TabButtons from "@/components/Dashboard/ui/TabButtons";
import CalendarIcon from "@/components/icons/CalendarIcon";

const cardData = [
  {
    icon: <CalendarIcon />,
    subTitle: "Completed Bookings",
    title: "298",
  },
  {
    icon: <CalendarIcon />,
    subTitle: "Booking Confirmed",
    title: "120",
  },
  {
    icon: <CalendarIcon />,
    subTitle: "Booking Pending",
    title: "40",
  },
  {
    icon: <CalendarIcon />,
    subTitle: "Booking Cancelled",
    title: "16",
    variant: "destructive",
  },
] as const;

export default function BookingPage() {
  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {cardData.map((item) => (
          <DashboardStatCard key={item.subTitle} {...item} />
        ))}
      </div>

      <div className="mt-6">
        <RecentBookingsTable
          heading={
            <TabButtons tabs={["All", "Confirmed", "Pending", "Cancelled"]} />
          }
        />
      </div>
    </div>
  );
}
