import DashboardStatCard from "@/components/Dashboard/ui/DashboardStatCard";
import RecentBookingsTable from "@/components/Dashboard/Customers/RecentBookingsTable/RecentBookingsTable";
import AddUsersIcon from "@/components/icons/AddUsersIcon";
import UsersIcon from "@/components/icons/UsersIcon";

const cardData = [
  {
    icon: <UsersIcon />,
    subTitle: "Total Customers",
    title: "4,500",
  },
  {
    icon: <AddUsersIcon />,
    subTitle: "Booking Customers",
    title: "120",
  },
  {
    icon: <UsersIcon />,
    subTitle: "Customer Satisfaction",
    title: "4.8 out of 5",
  },
];

export default function CustomersPage() {
  return (
    <div className="p-6">
      <div className="grid md:grid-cols-3 gap-3 ">
        {cardData.map((item) => (
          <DashboardStatCard key={item.subTitle} {...item} />
        ))}
      </div>

      <div className="mt-6">
        <RecentBookingsTable heading="Recent Bookings" />
      </div>
    </div>
  );
}
