//cache stands for storage of the browser if we load something once 
// if we make a request for example if you load a image you dont have to load a image every time 
//when you go online you just take it from the cache 'its faster and more effecctive'.
const CACHE_NAME = "version-1";

//here offline.html is used when we offline
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)//here request means EX: you need to see a image you send request
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {//if cacheWhitelist does not include a cacheName then return
                    return caches.delete(cacheName);
                }
            })
        ))

    )
});