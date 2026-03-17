import OneSignal from 'react-onesignal'

export const initializeOneSignal = async () => {
  try {
    await OneSignal.init({
      appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID || '',
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: true,
        position: 'bottom-right',
        size: 'medium',
        prenotify: true,
        showCredit: false,
        text: {
          'tip.state.unsubscribed': 'Subscribe to notifications',
          'tip.state.subscribed': 'You\'re subscribed to notifications',
          'tip.state.blocked': 'You\'ve blocked notifications',
          'message.prenotify': 'Click to subscribe to notifications',
          'message.action.subscribed': 'Thanks for subscribing!',
          'message.action.resubscribed': 'You\'re subscribed to notifications',
          'message.action.unsubscribed': 'You won\'t receive notifications anymore',
          'message.action.subscribing': 'Subscribing...',
          'dialog.main.title': 'Manage Site Notifications',
          'dialog.main.button.subscribe': 'SUBSCRIBE',
          'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',
          'dialog.blocked.title': 'Unblock Notifications',
          'dialog.blocked.message': 'Follow these instructions to allow notifications:',
        },
      },
    })
    
    console.log('OneSignal initialized successfully')
  } catch (error) {
    console.error('Error initializing OneSignal:', error)
  }
}

export const requestNotificationPermission = async () => {
  try {
    const permission = await OneSignal.Notifications.requestPermission()
    return permission
  } catch (error) {
    console.error('Error requesting notification permission:', error)
    return 'denied'
  }
}

export const subscribeToNotifications = async () => {
  try {
    const isPushSupported = OneSignal.Notifications.isPushSupported()
    if (isPushSupported) {
      const permission = await OneSignal.Notifications.requestPermission()
      if (permission === true) {
        await OneSignal.User.PushSubscription.optIn()
        return true
      }
    }
    return false
  } catch (error) {
    console.error('Error subscribing to notifications:', error)
    return false
  }
}
