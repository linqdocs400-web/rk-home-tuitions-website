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
  Smartphone,
  Shield,
  LogOut
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

export default function AdminDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [credentials, setCredentials] = useState({ id: '', password: '' })
  const [error, setError] = useState('')

  useEffect(() => {
    // Check if already authenticated
    const adminStatus = sessionStorage.getItem('adminAuthenticated')
    if (adminStatus === 'true') {
      setIsAuthenticated(true)
      loadAnalyticsData()
    } else {
      setShowLogin(true)
    }
  }, [])

  const loadAnalyticsData = async () => {
    setLoading(true)
    try {
      // Mock data for demo
      const mockData: AnalyticsData = {
        totalVisitors: 1247,
        activeUsers: 23,
        pageViews: 3842,
        avgTimeOnPage: 185,
        bounceRate: 42.3,
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (credentials.id === 'hometuition' && credentials.password === '123456') {
      setIsAuthenticated(true)
      sessionStorage.setItem('adminAuthenticated', 'true')
      setShowLogin(false)
      loadAnalyticsData()
    } else {
      setError('Invalid credentials. Please try again.')
      setTimeout(() => setError(''), 3000)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('adminAuthenticated')
    setShowLogin(true)
    setData(null)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5" />
              Private Admin Dashboard
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Enter credentials to access analytics
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="admin-id" className="block text-sm font-medium mb-2">
                  Admin ID
                </label>
                <input
                  id="admin-id"
                  type="text"
                  value={credentials.id}
                  onChange={(e) => setCredentials(prev => ({ ...prev, id: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter admin ID"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-md text-sm">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full">
                Access Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Show dashboard if authenticated
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Private Access
            </Badge>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : data ? (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Setup Info */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">⚠️ Setup Required</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-yellow-700 mb-3">
                  To see real analytics data instead of demo data, you need to:
                </p>
                <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                  <li>1. Create a <code className="bg-yellow-200 px-1 rounded">.env.local</code> file</li>
                  <li>2. Add your Google Analytics ID: <code className="bg-yellow-200 px-1 rounded">NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX</code></li>
                  <li>3. Get your GA4 ID from <a href="https://analytics.google.com" className="text-blue-600 underline" target="_blank">Google Analytics</a></li>
                </ol>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button onClick={loadAnalyticsData} variant="outline">
                Refresh Data
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-12">
            No analytics data available
          </div>
        )}
      </main>
    </div>
  )
}

// Icons
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
