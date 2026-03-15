import { cn } from "@/lib/utils";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva(
  "size-12 flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        default: "bg-accent text-[#1C453F] ",
        destructive: "bg-[#FEE2E2] text-[#B91C1C]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function CardWrapper(props: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "bg-white w-full px-5 py-4 rounded-2xl shadow-ard",
        props.className,
      )}
    />
  );
}

interface CardProps extends VariantProps<typeof iconVariants> {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
}

export default function DashboardStatCard({
  subTitle,
  title,
  icon,
  variant,
}: CardProps) {
  return (
    <CardWrapper>
      <div className={cn(iconVariants({ variant }))}>
        <div className="">{icon}</div>
      </div>
      <p className="text-[#4A4C56] mt-4 font-medium text-xs leading-4">
        {subTitle}
      </p>
      <p className="text-[#1C453F] mt-3 font-bold text-base lg:text-xl leading-6">
        {title}
      </p>
    </CardWrapper>
  );
}
