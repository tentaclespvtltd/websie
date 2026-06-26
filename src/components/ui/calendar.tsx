"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 relative", className)}
      classNames={{
        root: "relative",
        months: "flex flex-col sm:flex-row gap-4",
        month: "flex flex-col gap-4 relative",
        month_caption: "flex justify-center pt-1.5 items-center h-9",
        caption_label: "text-sm font-bold font-heading text-text-main",
        nav: "flex justify-between items-center w-full absolute top-4 left-0 px-4 z-10 pointer-events-none",
        button_previous: cn(
          "h-7 w-7 bg-white pointer-events-auto opacity-70 hover:opacity-100 inline-flex items-center justify-center rounded border border-border-subtle text-sm transition-opacity cursor-pointer shadow-sm"
        ),
        button_next: cn(
          "h-7 w-7 bg-white pointer-events-auto opacity-70 hover:opacity-100 inline-flex items-center justify-center rounded border border-border-subtle text-sm transition-opacity cursor-pointer shadow-sm"
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] text-center",
        week: "flex w-full mt-2",
        day: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary/10 [&:has([aria-selected])]:rounded-md",
        day_button: cn(
          "h-8 w-8 p-0 font-normal inline-flex items-center justify-center rounded-md text-sm transition-colors",
          "hover:bg-muted hover:text-foreground"
        ),
        selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-md font-semibold",
        today: "border border-primary text-primary font-bold rounded-md [&[aria-selected]]:bg-primary [&[aria-selected]]:text-white",
        outside: "text-muted-foreground opacity-50",
        disabled: "text-muted-foreground opacity-50",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === "left") {
            return <ChevronLeft className="h-4 w-4" />
          }
          return <ChevronRight className="h-4 w-4" />
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
