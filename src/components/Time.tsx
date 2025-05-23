"use client";

import { useEffect, useState } from "react";
import { HiOutlineClock } from "react-icons/hi";
import { TIME_FORMAT_OPTIONS } from "@/util";

function convertDateToString(date: Date, hour12: boolean) {
  return date.toLocaleString("en-US", { ...TIME_FORMAT_OPTIONS, hour12 });
}

export default function Time() {
  const [hour12, setHour12] = useState(true);
  const [time, setTime] = useState(convertDateToString(new Date(), hour12));

  const toggleHour12 = () => setHour12(!hour12);

  useEffect(() => {
    setTime(convertDateToString(new Date(), hour12));
    const interval = setInterval(() => setTime(convertDateToString(new Date(), hour12)), 5_000);

    return () => clearInterval(interval);
  }, [hour12]);

  const timeTitle = `Switch to ${hour12 ? "24" : "12"}-hour format`;

  return (
    <div className="flex items-center gap-x-2 rounded-xl bg-gray-200/60 pt-1 pr-2 pb-1 pl-2 font-semibold dark:bg-white/10">
      <HiOutlineClock size={20} title="My Local Time" />
      <span
        className="cursor-pointer underline underline-offset-2 select-none"
        onClick={toggleHour12}
        suppressHydrationWarning
        title={timeTitle}
      >
        {time}
      </span>
    </div>
  );
}
