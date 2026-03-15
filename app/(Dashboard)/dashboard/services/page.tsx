import AddNewServiceModal from "@/components/Dashboard/Services/AddNewServiceModal/AddNewServiceModal";
import ServicesTable from "@/components/Dashboard/Services/ServicesTable/ServicesTable";

export default function ServicesPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl text-heading font-semibold">Services</h1>
        <AddNewServiceModal />
      </div>

      <ServicesTable />
    </div>
  );
}
