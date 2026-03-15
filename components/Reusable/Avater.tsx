import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface AvaterProps extends Omit<React.ComponentProps<typeof Image>, "src"> {
  isActive?: boolean;
  name?: string;
  src?: string | StaticImport;
}

export default function Avater({
  isActive,
  className,
  name,
  src,
  ...props
}: AvaterProps) {
  const initial = getAvatarInitials(name);

  return (
    <div className="relative">
      <Avatar className={cn("size-12", className)}>
        {src ? (
          <Image
            className="aspect-square size-full"
            width={40}
            height={40}
            src={src}
            {...props}
          />
        ) : (
          <AvatarFallback>{initial}</AvatarFallback>
        )}
      </Avatar>
      {isActive && (
        <div className="bg-primary size-2 rounded-full absolute right-px bottom-px border-2 border-white box-content" />
      )}
    </div>
  );
}

function getAvatarInitials(name?: string, twoChars: boolean = false) {
  if (!name) return "";

  const parts = name
    .replace(/[^a-zA-Z\s]/g, "") // remove symbols like "-" or numbers
    .trim()
    .split(/\s+/); // split by spaces

  const first = parts[0]?.[0]?.toUpperCase() || "";
  const second = parts[1]?.[0]?.toUpperCase() || "";

  if (!twoChars) {
    return first;
  }

  // show 2 letters if available, otherwise 1
  return parts.length > 1 ? first + second : first;
}
