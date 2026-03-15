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
import { DataTable, useDataTable } from "../../../Reusable/DataTable";
import {
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
    cell: ({ row }) => row.original.customerName,
  },
  {
    accessorKey: "services",
    id: "Services",
    header: "Services",
    cell: ({ row }) => row.original?.services,
  },
  {
    header: "Date",
    cell: ({ row }) => row.original?.joinDate,
  },
  {
    header: "Time",
    cell: ({ row }) => row.original?.time,
  },
  {
    header: "Staff Name",
    cell: ({ row }) => row.original.customerName,
  },
  {
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    id: "action",
    cell: ({ row }) => <RowActions rowData={row.original} />,
  },
];

export default function BookingsListTable() {
  const tableData = useDataTable(customerTableData, columns);

  return (
    <div>
      <DataTable
        header="Booking List"
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

function RowActions(_: { rowData: Customer }) {
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
