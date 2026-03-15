"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { DataTable, useDataTable } from "../../../Reusable/DataTable";
import {
  InfoRow,
  StatusBadge,
  tableSelectBox,
  TableSerchControlls,
} from "../../ui/table-ui";
import { customerTableData } from "./mockData";

export interface Customer {
  customerName: string;
  customerId: string;
  image: string;
  city: string;
  services: string;
  joinDate: string;
  time: string;
  contact: {
    email: string;
    phone: string;
  };
  status: string;
}

const columns: ColumnDef<Customer>[] = [
  tableSelectBox(),
  {
    id: "name",
    accessorKey: "customerName",
    header: "Customer Name",
    cell: ({ row }) => <CustomerNameWithAvater {...row.original} />,
  },
  {
    header: "Customer ID",
    cell: ({ row }) => row.original?.customerId,
  },
  {
    accessorKey: "services",
    id: "Services",
    header: "Services",
    cell: ({ row }) => row.original?.services,
  },
  {
    header: "Join Date",
    cell: ({ row }) => row.original?.joinDate,
  },
  {
    header: "Time",
    cell: ({ row }) => row.original?.time,
  },
  {
    header: "Contact",
    cell: ({ row }) => (
      <InfoRow
        title={row.original?.contact.phone}
        subTitle={row.original?.contact.email}
      />
    ),
  },
  {
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    id: "action",
    cell: () => <RowActions />,
  },
];

export default function RecentBookingsTable({
  heading,
}: {
  heading: React.ReactNode;
}) {
  const tableData = useDataTable(customerTableData, columns);

  return (
    <div>
      <DataTable
        header={heading}
        headerControls={
          <TableSerchControlls
            value={
              (tableData.table.getColumn("name")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              tableData.table
                .getColumn("name")
                ?.setFilterValue(event.target.value)
            }
          />
        }
        table={tableData.table}
      />
    </div>
  );
}

function CustomerNameWithAvater({ customerName, image, city }: Customer) {
  return (
    <div className="flex gap-2">
      <div className="size-10 aspect-square rounded-md overflow-hidden border border-[#E5E5E7]">
        <Image
          className="h-full w-full object-cover object-center"
          src={image}
          width={40}
          height={40}
          alt="user profile image"
        />
      </div>
      <InfoRow title={customerName} subTitle={city} />
    </div>
  );
}

function RowActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log("View clicked")}>
          View
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Edit clicked")}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-destructive focus:text-destructive"
          onClick={() => console.log("Delete clicked")}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
