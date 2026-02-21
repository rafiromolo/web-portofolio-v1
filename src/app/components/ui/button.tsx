import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-white hover:bg-neutral-900/80",
      },
      size: {
        default: "px-4 py-2",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp 
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({variant, size, className}))}
        {...props}
      />
    )
  }

export { Button, buttonVariants };
