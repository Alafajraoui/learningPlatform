// service-worker.js
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const title = data.title;
    const options = {
        body: data.body,
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow() // Optional: specify the URL to open
    );
});
