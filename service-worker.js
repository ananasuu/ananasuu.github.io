const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `ninumakes-${CACHE_VERSION}`;

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
	'/',
	'/index.html',
	'/work.html',
	'/index.js',
	'/data.js',
	'/workdata.js',
	'/assets/styles/index.css',
	'/assets/styles/base.css',
	'/assets/styles/component.css',
	'/assets/styles/layout.css'
];

// Assets to cache on first request
const RUNTIME_CACHE_PATTERNS = [
	/\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
	/\.(?:woff|woff2|ttf|eot)$/,
	/^https:\/\/fonts\.googleapis\.com/,
	/^https:\/\/fonts\.gstatic\.com/,
	/^https:\/\/img\.icons8\.com/,
];

// Install event - precache critical assets
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				console.log('[Service Worker] Precaching assets');
				return cache.addAll(PRECACHE_ASSETS);
			})
			.then(() => self.skipWaiting()),
	);
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames
						.filter((cacheName) => cacheName.startsWith('ninumakes-') && cacheName !== CACHE_NAME)
						.map((cacheName) => {
							console.log('[Service Worker] Deleting old cache:', cacheName);
							return caches.delete(cacheName);
						}),
				);
			})
			.then(() => self.clients.claim()),
	);
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
	const { request } = event;
	const url = new URL(request.url);

	// Skip non-GET requests
	if (request.method !== 'GET') {
		return;
	}

	// Skip chrome extensions and other schemes
	if (!url.protocol.startsWith('http')) {
		return;
	}

	event.respondWith(handleFetch(request));
});

async function handleFetch(request) {
	const url = new URL(request.url);

	try {
		// HTML files: Network-first strategy (always get fresh content)
		if (request.destination === 'document' || url.pathname.endsWith('.html')) {
			return await networkFirst(request);
		}

		// Static assets: Cache-first strategy
		if (shouldCache(request)) {
			return await cacheFirst(request);
		}

		// Default: Network-first
		return await networkFirst(request);
	} catch (error) {
		console.error('[Service Worker] Fetch failed:', error);
		throw error;
	}
}

// Cache-first strategy: Try cache, fall back to network
async function cacheFirst(request) {
	const cache = await caches.open(CACHE_NAME);
	const cached = await cache.match(request);

	if (cached) {
		return cached;
	}

	const response = await fetch(request);

	// Cache successful responses
	if (response.ok) {
		cache.put(request, response.clone());
	}

	return response;
}

// Network-first strategy: Try network, fall back to cache
async function networkFirst(request) {
	const cache = await caches.open(CACHE_NAME);

	try {
		const response = await fetch(request);

		// Cache successful responses
		if (response.ok) {
			cache.put(request, response.clone());
		}

		return response;
	} catch (error) {
		const cached = await cache.match(request);

		if (cached) {
			return cached;
		}

		throw error;
	}
}

// Check if request should be cached
function shouldCache(request) {
	const url = new URL(request.url);

	// Check if URL matches any runtime cache pattern
	return RUNTIME_CACHE_PATTERNS.some((pattern) => pattern.test(url.href));
}
