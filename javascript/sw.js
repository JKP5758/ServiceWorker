self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Tambahkan logika untuk menangani klik notifikasi di sini
  });
  
  function showNotification(title, options) {
    self.registration.showNotification(title, options);
  }
  