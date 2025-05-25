"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"
import data from "@/utils/data";
import ExternalLink from "@/components/external-link";
import Badge from "@/components/badge";

export default function CountdownTimer() {
  // Set end date to 30 days from now for demo purposes
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // For demo purposes, we'll just count down from 30 days
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 30)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = endDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ExternalLink href={data.url.kickstarter}>
      <Badge
        icon={<Clock/>}
        title={
          <>
            <span>Kickstarter: </span>
            <span className="font-mono ml-1">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
            </span>
          </>
        }
      />
    </ExternalLink>
  )
}
