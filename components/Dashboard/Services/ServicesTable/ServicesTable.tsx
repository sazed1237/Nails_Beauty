"use client";

import TabButtons from "@/components/Dashboard/ui/TabButtons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatCurrency } from "@/lib/formatters";
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
import { servicesTableData } from "./mockData";

export interface Service {
  name: string;
  descriptin: string;
  price: number;
  duratin: string;
  status: string;
  image: string;
}

const columns: ColumnDef<Service>[] = [
  tableSelectBox(),
  {
    accessorKey: "name",
    header: "Services Name",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Image
          className="size-10 aspect-square rounded-md overflow-hidden border border-[#E5E5E7]"
          src={row.original.image}
          width={40}
          height={40}
          alt="user profile image"
        />
        <InfoRow title={row.original.name} />
      </div>
    ),
  },
  {
    header: "Description",
    cell: ({ row }) => (
      <div className="max-w-sm whitespace-normal break-words text-[10px] leading-4">
        {row.original?.descriptin}
      </div>
    ),
  },
  {
    header: "Price",
    cell: ({ row }) => `${formatCurrency(row.original?.price)} USD`,
  },
  {
    header: "Duration",
    cell: ({ row }) => row.original?.duratin,
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

export default function ServicesTable() {
  const tableData = useDataTable(servicesTableData, columns);

  return (
    <div>
      <DataTable
        header={
          <TabButtons
            tabs={[
              "Manicures",
              "Pedicures",
              "Gel Nails",
              "Nail Extensions",
              "Nail Art & Design",
            ]}
          />
        }
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
