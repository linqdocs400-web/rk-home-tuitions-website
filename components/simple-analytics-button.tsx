'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { BarChart3, X } from 'lucide-react'

export function SimpleAnalyticsButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Check admin status from localStorage
    const adminStatus = localStorage.getItem('isAdminLoggedIn')
    setIsAdmin(adminStatus === 'true')
  }, [])

  // Don't render if not admin
  if (!isAdmin) return null

  return (
    <>
      {/* Analytics Button - Fixed Position */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          size="sm"
        >
          <BarChart3 className="h-4 w-4 mr-2" />
          Analytics
        </Button>
      </div>

      {/* Analytics Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Visitors</h3>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs text-gray-500">All time</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-green-600 mb-2">Active Users</h3>
                <p className="text-2xl font-bold text-green-600">23</p>
                <p className="text-xs text-gray-500">Real-time</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-blue-600 mb-2">Page Views</h3>
                <p className="text-2xl font-bold text-blue-600">3,842</p>
                <p className="text-xs text-gray-500">Total views</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-purple-600 mb-2">Avg. Time</h3>
                <p className="text-2xl font-bold text-purple-600">3m 5s</p>
                <p className="text-xs text-gray-500">Per page</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4">📊 Analytics Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">👥 Visitor Tracking</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Real-time visitor count</li>
                    <li>• Total visitors statistics</li>
                    <li>• Page views tracking</li>
                    <li>• Time spent on each page</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">🎯 User Behavior</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Button click tracking</li>
                    <li>• Form submission tracking</li>
                    <li>• Scroll depth monitoring</li>
                    <li>• Outbound link tracking</li>
                    <li>• Phone call tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-2">⚠️ Setup Required</h3>
              <p className="text-sm text-gray-700 mb-3">
                To see real analytics data instead of demo data, you need to:
              </p>
              <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                <li>1. Create a <code className="bg-gray-200 px-1 rounded">.env.local</code> file</li>
                <li>2. Add your Google Analytics ID: <code className="bg-gray-200 px-1 rounded">NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX</code></li>
                <li>3. Get your GA4 ID from <a href="https://analytics.google.com" className="text-blue-600 underline" target="_blank">Google Analytics</a></li>
              </ol>
            </div>

            <div className="flex justify-center">
              <Button onClick={() => setIsOpen(false)} variant="outline">
                Close Dashboard
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
