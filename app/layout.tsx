import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { NotificationPrompt } from "@/components/notification-prompt"
import { SimpleAnalyticsButton } from "@/components/simple-analytics-button"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })

export const metadata: Metadata = {
  title: "RK Home Tuitions - Learn or Teach Anything",
  description:
    "RK Home Tuitions connects learners with tutors for academics, music, dance, yoga, and more. Find a tutor or become one today!",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" 
          defer
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.OneSignalDeferred = window.OneSignalDeferred || [];
              OneSignalDeferred.push(async function(OneSignal) {
                await OneSignal.init({
                  appId: "388a6a35-8441-4905-882d-76621dab0151",
                  safari_web_id: "web.onesignal.auto.63749170-9b18-4e2b-ba12-fbd09a76fb84",
                  notifyButton: {
                    enable: true,
                  },
                });
              });
            `
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_location: window.location.href,
                page_title: document.title,
              });
            `
          }}
        />
      </head>
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
        <NotificationPrompt />
        <SimpleAnalyticsButton />
      </body>
    </html>
  )
}
