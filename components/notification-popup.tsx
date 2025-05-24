"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Bell } from "lucide-react"

export default function NotificationPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)

  useEffect(() => {
    // Check if notification has been dismissed before
    const notificationDismissed = localStorage.getItem("notificationDismissed")

    if (!notificationDismissed) {
      // Show notification after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
        setHasBeenShown(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    // Remember that user dismissed the notification
    localStorage.setItem("notificationDismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full animate-in fade-in slide-in-from-bottom-5 duration-500">
      <Card className="overflow-hidden border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/10">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-3 flex items-center justify-between text-white">
            <div className="flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              <span className="font-medium">Special Announcement</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:bg-white/20"
              onClick={handleDismiss}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4">
            <h4 className="font-bold mb-2">Early Bird Rewards Ending Soon!</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Our special Early Bird tier is almost sold out! Back the project now to secure your discount before all
              spots are gone.
            </p>
            <div className="flex justify-between items-center">
              <Button
                variant="link"
                className="text-sm p-0 h-auto text-muted-foreground hover:text-foreground"
                onClick={handleDismiss}
              >
                Remind me later
              </Button>
              <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
                <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer">
                  Back Now
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
