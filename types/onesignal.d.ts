declare global {
  interface Window {
    OneSignalDeferred: any[]
    OneSignal: {
      Notifications: {
        isPushSupported(): Promise<boolean>
        requestPermission(): Promise<boolean>
        permission: Promise<boolean>
      }
      init(config: {
        appId: string
        safari_web_id?: string
        notifyButton?: {
          enable?: boolean
        }
      }): Promise<void>
    }
  }
}

export {}
