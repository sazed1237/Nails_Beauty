"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatWithLeadingZero } from "@/lib/formatters";
import { Row, Table } from "@tanstack/react-table";
import { Search, Filter } from "lucide-react";

export function InfoRow(props: { title: string; subTitle?: string }) {
  return (
    <div className="flex flex-col justify-center gap-1">
      <p className="text-sm text-[#1D1F2C] font-medium tracking-[-0.14px]">
        {props.title}
      </p>
      {props.subTitle && (
        <p className="text-[10px] text-[#4A4C56] font-medium tracking-[-0.1px]">
          {props.subTitle}
        </p>
      )}
    </div>
  );
}

export function tableSelectBox<T>() {
  return {
    id: "select",
    header: ({ table }: { table: Table<T> }) => (
      <div className="flex items-center pl-4 w-18 gap-2">
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()} // || (table.getIsSomePageRowsSelected() && "indeterminate")
          onChange={(e) =>
            table.toggleAllPageRowsSelected(!!e.currentTarget.checked)
          }
          aria-label="Select all"
        />
        <span className="">No</span>
      </div>
    ),
    cell: ({ row }: { row: Row<T> }) => (
      <div className="flex items-center pl-4 w-18 gap-2">
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(!!e.currentTarget.checked)}
          aria-label="Select row"
        />
        <span>{formatWithLeadingZero(row.index + 1)}</span>
      </div>
    ),
  };
}

export function TableSerchControlls(props: React.ComponentProps<"input">) {
  return (
    <div className="flex gap-3">
      <div className="flex gap-2 max-w-xs w-full items-center border border-[#E5E5E5] text-sm rounded-lg h-10 px-3 py-1.5 bg-white focus-within:ring-2 focus-within:ring-[#228573] transition-all">
        <Search size={16} className="text-[#4A4C56]" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent text-current placeholder-[#4A4C56] w-full"
          {...props}
        />
      </div>

      <Button variant="outline">
        <Filter size={16} />
        Filter
      </Button>
    </div>
  );
}

type BadgeVariant = "default" | "destructive" | "warn";
type BadgeStatus = Record<string, BadgeVariant>;

const defaultBadgeVarients: BadgeStatus = {
  active: "default",
  inactive: "destructive",
  pending: "warn",
  confirmed: "default",
  cancelled: "destructive",
};

interface StatusBadgeProps {
  status: string;
  varients?: BadgeStatus;
}

export function StatusBadge({
  status,
  varients = defaultBadgeVarients,
}: StatusBadgeProps) {
  const varient = varients[status] || "default";

  return (
    <Badge variant={varient}>
      <span className="size-1.5 bg-current rounded-full" />
      <span className="text-xs capitalize">{status}</span>
    </Badge>
  );
}
