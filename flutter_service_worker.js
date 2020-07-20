'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "d3d33d18604b541662e911d4eb3745f3",
"/": "d3d33d18604b541662e911d4eb3745f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/images/mail.png": "175dfc727a2ffb413fc1e4ba274c19d6",
"assets/assets/images/linkedin.png": "37caf40e55651fffc78d6be3e814e9f5",
"assets/assets/images/youtube.png": "d107d3769496decaf1928773493c0a1f",
"assets/assets/images/phone.png": "fbfac77bd50f459fd6999787ab7b0f3e",
"assets/assets/images/4-3.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/twitter.png": "fdf976b38ea62efdd540126784ef8e3d",
"assets/assets/images/reddit.png": "4dc5ff3f1a948ccec377492d54c4d2c3",
"assets/assets/images/instagram.png": "b01cc1a597457522576eb74d2caa981d",
"assets/assets/images/kolaj.png": "8159158030d358d77dbe5080d02d372f",
"assets/assets/images/github.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/images/facebook.png": "7767d332bbdada07d197dc5a770f785a",
"assets/assets/images/logo.png": "184ce9886f728542890b8c6e5a8c4232",
"assets/assets/images/yonetim/sekreter.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/dk2.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/maliye.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/dk1.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/sosyal.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/baskan.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/dk3.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/proje.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/yonetim/danisman.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/location.png": "06286fe972cf02735bd14cb76a13d7d8",
"assets/AssetManifest.json": "37bac2b12f931a35f67cb52ffed0af48",
"assets/NOTICES": "f86de5b2797b75b4cfc2518de45b04c7",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"manifest.json": "e24f39cce4e0d1ed92398c077267dcb0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f915b7aba7bad89cadc9e42afdb0cd13",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/index": "8c02832c9133e8ae49423b435c463a5d",
".git/objects/pack/pack-9ed90a332cc12d2cbb13396e01e3825385daa973.idx": "710c173fdff4d2a2c836854f55413a36",
".git/objects/pack/pack-9ed90a332cc12d2cbb13396e01e3825385daa973.pack": "f6f875226c851afa358d5a5f6ac056a0",
".git/objects/12/8f1e86c401beb009b606c13361a2e13aa45a84": "bdeb3eba3eb4ec634390b57e448ba632",
".git/objects/8e/4d874006135f493210072f6e4fbaf25a864f4d": "c2cbc03e11cd6e46c4f317e841439d3b",
".git/objects/f3/7bcc5932902eae076446c5928a74f8105eeb4b": "517e4e38cbffbb8f1a6f9a6a0b39406a",
".git/objects/9b/21f000bce517f9c5af7e1c171f062983324841": "d86cfe4fc69c758f5795ccaa7d92d457",
".git/objects/59/12234e3a3f00353b5c8528ac8422a897e48a95": "222b66311e2a32771e1f59cb2d1881bb",
".git/objects/6f/5453bae8e4fd37cde13b5c16d3db197479ba4f": "aa24ca43e2f660f57e3b98d5efcf7b73",
".git/objects/49/43fc90093589139dbffd7f0e434f2078d73b65": "4a2e5ad673ac222570e044cf32bf9f1a",
".git/objects/37/d7a8a6f6632689bd9d0fb717d8232ecdbe019a": "4e31083679ff2a694f604c3442b0aba2",
".git/objects/b5/cf47628f1a43780f83eb458187b9d394c92561": "bbbd30ccd79a237ca408fa078aca38f6",
".git/objects/c2/f4336267d77c58a21e176f84d23673fa82a49a": "fa0a02c4d6892db1196cbb8a6f0fd289",
".git/objects/25/269c444131e8e00df7deb35191e5113f4ae855": "df08d825f1d5c84e86ddfd93cb498707",
".git/refs/remotes/origin/master": "5b9a640d8c31ee445420e50d63d5f7cd",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/heads/master": "5b9a640d8c31ee445420e50d63d5f7cd",
".git/config": "d89ef223c27fcb18e1c707c2a98b3407",
".git/COMMIT_EDITMSG": "50b7c1459fb776aaec0612fca44f3bb0",
".git/packed-refs": "1e485431135b30292a3d4c3c8d884edd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/remotes/origin/master": "1bde5a40b0f81d36f177eec0d809c87d",
".git/logs/refs/remotes/origin/HEAD": "0aa7ac21b3ec9ee564505bcd21ead21d",
".git/logs/refs/heads/master": "39f3568614b1897fc9c3b2d731d06778",
".git/logs/HEAD": "39f3568614b1897fc9c3b2d731d06778",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "c0aebc07aa53c038814c88bba9d112a2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
