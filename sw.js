
const CACHE_NAME = 'pwa-v4';

const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/manifest.webmanifest',
  '/css/reset.css',
  '/css/reveal.css',
  '/css/theme/black.css',
  '/js/reveal.js',
  '/plugin/notes-server/client.js',
  '/plugin/notes-server/index.js',
  '/plugin/notes-server/notes.html',
  '/plugin/zoom-js/zoom.js',
  '/plugin/highlight/highlight.js',
  '/plugin/markdown/example.md',
  '/plugin/markdown/marked.js',
  '/plugin/markdown/example.html',
  '/plugin/markdown/markdown.js',
  '/plugin/math/math.js',
  '/plugin/print-pdf/print-pdf.js',
  '/plugin/search/search.js',
  '/plugin/notes/notes.js',
  '/plugin/notes/notes.html',
  '/plugin/multiplex/client.js',
  '/plugin/multiplex/index.js',
  '/plugin/multiplex/package.json',
  '/plugin/multiplex/master.js',
  '/lib/css/monokai.css',
  '/lib/css/zenburn.css',
  '/lib/js/html5shiv.js',
  '/lib/js/promise.js',
  '/lib/font/source-sans-pro/source-sans-pro.css',
  '/lib/font/source-sans-pro/source-sans-pro-semibolditalic.eot',
  '/lib/font/source-sans-pro/source-sans-pro-regular.woff',
  '/lib/font/source-sans-pro/source-sans-pro-semibold.woff',
  '/lib/font/source-sans-pro/source-sans-pro-semibolditalic.woff',
  '/lib/font/source-sans-pro/source-sans-pro-semibolditalic.ttf',
  '/lib/font/source-sans-pro/source-sans-pro-regular.eot',
  '/lib/font/source-sans-pro/source-sans-pro-italic.ttf',
  '/lib/font/source-sans-pro/source-sans-pro-semibold.ttf',
  '/lib/font/source-sans-pro/source-sans-pro-italic.woff',
  '/lib/font/source-sans-pro/source-sans-pro-regular.ttf',
  '/lib/font/source-sans-pro/source-sans-pro-italic.eot',
  '/lib/font/source-sans-pro/source-sans-pro-semibold.eot',
  '/lib/font/league-gothic/league-gothic.woff',
  '/lib/font/league-gothic/league-gothic.css',
  '/lib/font/league-gothic/league-gothic.ttf',
  '/lib/font/league-gothic/league-gothic.eot',
  '/assets/sw.png',
  '/assets/thanks.gif',
  '/assets/logo.png',
  '/assets/programando.gif',
  '/assets/doubt.gif',
  '/assets/icons/icon-72x72.png',
  '/assets/icons/icon-96x96.png',
  '/assets/icons/icon-128x128.png',
  '/assets/icons/icon-144x144.png',
  '/assets/icons/icon-152x152.png',
  '/assets/icons/icon-192x192.png',
  '/assets/icons/icon-384x384.png',
  '/assets/icons/icon-512x512.png',
  '/assets/why.gif',
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});


self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    if (response) {
      return response;
    }
    return fetch(event.request);
  }));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(cacheNames => Promise.all(cacheNames.map(cacheName => {
    if (CACHE_NAME != cacheName) {
      return caches.delete(cacheName);
    }
  }))));
});