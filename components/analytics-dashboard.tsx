'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Eye, 
  Clock, 
  MousePointer, 
  TrendingUp, 
  Activity,
  BarChart3,
  Globe,
  Smartphone
} from 'lucide-react'

interface AnalyticsData {
  totalVisitors: number
  activeUsers: number
  pageViews: number
  avgTimeOnPage: number
  bounceRate: number
  topPages: Array<{ page: string; views: number; avgTime: number }>
  deviceBreakdown: { desktop: number; mobile: number; tablet: number }
  realTimeUsers: number
  events: Array<{ action: string; count: number; timestamp: Date }>
}

export function AnalyticsDashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      loadAnalyticsData()
    }
  }, [isOpen])

  const loadAnalyticsData = async () => {
    setLoading(true)
    try {
      // In a real implementation, this would fetch from Google Analytics API
      // For demo, we'll use mock data
      const mockData: AnalyticsData = {
        totalVisitors: 1247,
        activeUsers: 23,
        pageViews: 3842,
        avgTimeOnPage: 185, // seconds
        bounceRate: 42.3, // percentage
        topPages: [
          { page: '/', views: 1523, avgTime: 245 },
          { page: '/#find-connect', views: 892, avgTime: 156 },
          { page: '/#how-it-works', views: 645, avgTime: 98 },
          { page: '/#social-proof', views: 432, avgTime: 67 },
        ],
        deviceBreakdown: {
          desktop: 68.5,
          mobile: 28.3,
          tablet: 3.2
        },
        realTimeUsers: 23,
        events: [
          { action: 'button_click', count: 234, timestamp: new Date(Date.now() - 60000) },
          { action: 'form_submit', count: 12, timestamp: new Date(Date.now() - 120000) },
          { action: 'phone_call', count: 8, timestamp: new Date(Date.now() - 180000) },
          { action: 'scroll_depth', count: 156, timestamp: new Date(Date.now() - 240000) },
        ]
      }
      
      setData(mockData)
    } catch (error) {
      console.error('Error loading analytics data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  if (!isOpen) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40"
      >
        <BarChart3 className="h-4 w-4 mr-2" />
        Analytics
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Analytics Dashboard</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
          >
            ×
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : data ? (
          <div className="p-6 space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.totalVisitors.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">All time</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Activity className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{data.realTimeUsers}</div>
                  <p className="text-xs text-muted-foreground">Real-time</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.pageViews.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Total views</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{formatTime(data.avgTimeOnPage)}</div>
                  <p className="text-xs text-muted-foreground">Per page</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Pages */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Top Pages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.topPages.map((page, index) => (
                      <div key={page.page} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs">
                            #{index + 1}
                          </Badge>
                          <span className="text-sm font-medium">{page.page}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold">{page.views}</div>
                          <div className="text-xs text-muted-foreground">
                            {formatTime(page.avgTime)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Device Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Device Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Monitor className="h-4 w-4" />
                        <span className="text-sm">Desktop</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${data.deviceBreakdown.desktop}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{data.deviceBreakdown.desktop}%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        <span className="text-sm">Mobile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${data.deviceBreakdown.mobile}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{data.deviceBreakdown.mobile}%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tablet className="h-4 w-4" />
                        <span className="text-sm">Tablet</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full" 
                            style={{ width: `${data.deviceBreakdown.tablet}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{data.deviceBreakdown.tablet}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MousePointer className="h-4 w-4" />
                  Recent User Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {data.events.map((event, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {event.action.replace('_', ' ')}
                        </Badge>
                        <span>{event.count} times</span>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {event.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button onClick={loadAnalyticsData} variant="outline">
                Refresh Data
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-muted-foreground">
            No analytics data available
          </div>
        )}
      </div>
    </div>
  )
}

// Missing icons - let me add them
function Monitor({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function Tablet({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
}
