var CACHE_NAME = 'daniel_breiner_portfolio';
var urlsToCache = [
    '/',
    '/index.html',
    '/src/css/main.css',
    '/src/img/me.jpg',
    '/src/img/icons/devpost.svg',
    '/src/img/icons/github.svg',
    '/src/img/icons/linkedin.svg',
    '/src/img/iontee.jpg',
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});