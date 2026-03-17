'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Bell, BellOff, X } from 'lucide-react'

export function NotificationPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if user has already made a decision
    const hasDecided = localStorage.getItem('notification-decision')
    if (!hasDecided) {
      // Show prompt after 10 seconds
      const timer = setTimeout(() => {
        setShowPrompt(true)
      }, 10000)
      return () => clearTimeout(timer)
    }

    // Check current subscription status
    checkSubscriptionStatus()
  }, [])

  const checkSubscriptionStatus = async () => {
    try {
      // Check if OneSignal is available and get subscription status
      if (typeof window !== 'undefined' && window.OneSignal) {
        const isPushSupported = await window.OneSignal.Notifications.isPushSupported()
        if (isPushSupported) {
          const permission = await window.OneSignal.Notifications.permission
          setIsSubscribed(permission === 'granted')
        }
      }
    } catch (error) {
      console.error('Error checking subscription status:', error)
    }
  }

  const handleSubscribe = async () => {
    setIsLoading(true)
    try {
      if (typeof window !== 'undefined' && window.OneSignal) {
        const permission = await window.OneSignal.Notifications.requestPermission()
        if (permission === 'granted') {
          setIsSubscribed(true)
          localStorage.setItem('notifications-subscribed', 'true')
          localStorage.setItem('notification-decision', 'subscribed')
          setShowPrompt(false)
        }
      }
    } catch (error) {
      console.error('Error subscribing to notifications:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDismiss = () => {
    localStorage.setItem('notification-decision', 'dismissed')
    setShowPrompt(false)
  }

  const handleNever = () => {
    localStorage.setItem('notification-decision', 'never')
    setShowPrompt(false)
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg border p-4 z-50 animate-in slide-in-from-bottom">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Stay Updated!
          </h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDismiss}
          className="h-6 w-6 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Get notified about new tutors, classes, and announcements from RK Home Tuitions.
      </p>
      
      <div className="flex space-x-2">
        <Button
          onClick={handleSubscribe}
          disabled={isLoading}
          className="flex-1"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Subscribing...
            </>
          ) : (
            <>
              <Bell className="h-4 w-4 mr-2" />
              Enable Notifications
            </>
          )}
        </Button>
        
        <Button
          variant="outline"
          onClick={handleNever}
          className="text-xs"
        >
          <BellOff className="h-4 w-4 mr-1" />
          Never
        </Button>
      </div>
    </div>
  )
}
