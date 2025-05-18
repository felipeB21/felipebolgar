"use client";
import { SlidingNumber } from "./ui/sliding-number";
import { useEffect, useState } from "react";

export function Clock() {
  const getArgentinaTime = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Argentina/Buenos_Aires",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false, // Use 24-hour format; change to true for 12-hour
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const [hours, minutes, seconds] = formatter
      .format(now)
      .split(":")
      .map(Number);
    return { hours, minutes, seconds };
  };

  const [hours, setHours] = useState(getArgentinaTime().hours);
  const [minutes, setMinutes] = useState(getArgentinaTime().minutes);
  const [seconds, setSeconds] = useState(getArgentinaTime().seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      const { hours, minutes, seconds } = getArgentinaTime();
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-0.5 text-sm dark:text-stone-400 text-stone-600">
      <SlidingNumber value={hours % 12 || 12} padStart={true} />
      <span className="text-zinc-500">:</span>
      <SlidingNumber value={minutes} padStart={true} />
      <span className="text-zinc-500">:</span>
      <SlidingNumber value={seconds} padStart={true} />
      <span className="ml-1">{hours >= 12 ? "PM" : "AM"}</span>
    </div>
  );
}
