// Google Analytics 4 tracking utilities

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
    dataLayer: any[]
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Initialize GA4
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track user interactions
export const trackButtonClick = (buttonName: string, location: string) => {
  event({
    action: 'click',
    category: 'button',
    label: `${buttonName} - ${location}`,
  })
}

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'submit',
    category: 'form',
    label: formName,
  })
}

// Track time spent on page
export const trackTimeOnPage = (pageName: string, timeSpent: number) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: pageName,
    value: Math.round(timeSpent),
  })
}

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  event({
    action: 'scroll',
    category: 'engagement',
    label: `${depth}%`,
  })
}

// Track outbound links
export const trackOutboundLink = (url: string) => {
  event({
    action: 'click',
    category: 'outbound',
    label: url,
  })
}

// Track phone calls
export const trackPhoneCall = (phoneNumber: string) => {
  event({
    action: 'call',
    category: 'contact',
    label: phoneNumber,
  })
}
