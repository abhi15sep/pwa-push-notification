// Service Worker

// LIsten for Notifications
self.addEventListener( 'push', (e) => {
  self.registration.showNotification( e.data.text() )
})
