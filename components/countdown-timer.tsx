"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"
import data from "@/utils/data";
import ExternalLink from "@/components/external-link";
import Badge from "@/components/badge";
// @ts-ignore
import { DateTime } from "luxon";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(createTimeLeft());
  const endDateString =
    createEndDate()
      .setZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
      .toFormat("yyyy-MM-dd HH:mm z");

  function createEndDate() {
    return DateTime.fromObject(
      {
        year: data.launchDate.year,
        month: data.launchDate.month,
        day: data.launchDate.day,
        hour: data.launchDate.hour,
        minute: data.launchDate.minute,
      },
      { zone: "America/New_York" }
    );
  }

  function createTimeLeft() {
    const endDate = createEndDate();
    const now = DateTime.now();
    const diff = endDate.diff(now, ["days", "hours", "minutes", "seconds"]);

    if (diff.toMillis() <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff.days),
      hours: Math.floor(diff.hours),
      minutes: Math.floor(diff.minutes),
      seconds: Math.floor(diff.seconds),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = createTimeLeft();

      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(interval);
      }

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ExternalLink
      href={data.url.kickstarter}
      className="group"
      title={endDateString}
    >
      <Badge
        icon={<Clock />}
        title={`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`}
      />
    </ExternalLink>
  )
}
