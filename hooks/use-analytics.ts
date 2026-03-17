'use client'

import { useEffect, useRef } from 'react'
import { pageview, event, trackTimeOnPage, trackScrollDepth } from '@/lib/analytics'

export function useAnalytics() {
  const startTimeRef = useRef<number>(Date.now())
  const scrollDepthRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    // Track page view on mount
    pageview(window.location.pathname)

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      const timeSpent = (Date.now() - startTimeRef.current) / 1000
      trackTimeOnPage(window.location.pathname, timeSpent)
    }

    // Track scroll depth
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const scrollPercentage = Math.round((scrollPosition / scrollHeight) * 100)

      const milestones = [25, 50, 75, 90]
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !scrollDepthRef.current.has(milestone)) {
          scrollDepthRef.current.add(milestone)
          trackScrollDepth(milestone)
        }
      })
    }

    // Track outbound links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href) {
        const isExternal = link.hostname !== window.location.hostname
        if (isExternal) {
          event({
            action: 'click',
            category: 'outbound',
            label: link.href,
          })
        }
      }
    }

    // Track button clicks
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const button = target.closest('button')
      
      if (button) {
        const buttonText = button.textContent?.trim() || 'Unknown Button'
        const pageLocation = window.location.pathname
        event({
          action: 'click',
          category: 'button',
          label: `${buttonText} - ${pageLocation}`,
        })
      }
    }

    // Track form interactions
    const handleFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement
      const formName = form.id || form.className || 'Unknown Form'
      event({
        action: 'submit',
        category: 'form',
        label: formName,
      })
    }

    // Track phone number clicks
    const handlePhoneClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href.startsWith('tel:')) {
        const phoneNumber = link.href.replace('tel:', '')
        event({
          action: 'call',
          category: 'contact',
          label: phoneNumber,
        })
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleLinkClick)
    document.addEventListener('click', handleButtonClick)
    document.addEventListener('submit', handleFormSubmit)
    document.addEventListener('click', handlePhoneClick)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleLinkClick)
      document.removeEventListener('click', handleButtonClick)
      document.removeEventListener('submit', handleFormSubmit)
      document.removeEventListener('click', handlePhoneClick)
    }
  }, [])

  return {
    trackEvent: event,
    trackPageView: pageview,
  }
}
