'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "d3d33d18604b541662e911d4eb3745f3",
"/": "d3d33d18604b541662e911d4eb3745f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/images/4-3.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/iletisim/konum.png": "0d833c87f1b443e514f744f7ab9d13c4",
"assets/assets/images/iletisim/mail.png": "4dfadfcf84e4220695578472b389588d",
"assets/assets/images/iletisim/telefon.png": "44233c6e31c24f2d0dbfd1d70a084fcf",
"assets/assets/images/sosyalMedya/linkedin.png": "f81f084330de2f3ca1902d289ec3b616",
"assets/assets/images/sosyalMedya/youtube.png": "1099763b9fa768c3f4030fe2ff8c39f5",
"assets/assets/images/sosyalMedya/twitter.png": "4a5eeb9394152266580c171ec01cc860",
"assets/assets/images/sosyalMedya/reddit.png": "5f0b9a7a4c8d881d591013c34cc94f00",
"assets/assets/images/sosyalMedya/instagram.png": "6f3dbfce0f2ed8376627878f02d1b85a",
"assets/assets/images/sosyalMedya/github.png": "1dfad82968ef75c2b7072ad52c10ece5",
"assets/assets/images/sosyalMedya/facebook.png": "dfed48900fd935dbdc604c06c76721b4",
"assets/assets/images/kolaj.png": "8159158030d358d77dbe5080d02d372f",
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
"assets/AssetManifest.json": "b0b9cb48b7091a914f9cb1a9e8af3012",
"assets/NOTICES": "f86de5b2797b75b4cfc2518de45b04c7",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"manifest.json": "e24f39cce4e0d1ed92398c077267dcb0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8028501451221ca9e5b5df5e56389395",
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
".git/index": "b9916b5afab7e73c5a2f6d784584accd",
".git/objects/pack/pack-9ed90a332cc12d2cbb13396e01e3825385daa973.idx": "710c173fdff4d2a2c836854f55413a36",
".git/objects/pack/pack-9ed90a332cc12d2cbb13396e01e3825385daa973.pack": "f6f875226c851afa358d5a5f6ac056a0",
".git/objects/63/0366e44141c1a69781db07020746c6f3081c9d": "82d66af7f12d10594bd4dc18ec20922e",
".git/objects/1e/eca63a05cbb2381b444fe7faf05495c8da259e": "5ca76df10b3670c0f324ceccc875d024",
".git/objects/7b/88797ee723afa2cef503be2e895ce104413318": "ffeb87e39a424e82900199e1d940c8c8",
".git/objects/ed/a7574038a44dfb6f9abef92ebf514fd20cc3a5": "6198bd6e3e830de4971c50ff79f359e9",
".git/objects/44/b4544a2ce976d4dacdaee2848de9da29f4c69b": "acb245f9e1e9da2e5d674e0b811d19d7",
".git/objects/44/2e8978234e8b9c65042712583c56b277ecd711": "6b76b0bdcefa6e991da2bdef2a014cc5",
".git/objects/df/52a2d7e1b49646800514fca6d7fbaa632c0819": "6f06efef978338856ad3018f00d91ec9",
".git/objects/df/31613603d87c188982a47445ec0222957a9873": "69f41f81f3e65cef0236a7c4cb2c4c34",
".git/objects/41/e606842abf80a85bf6965c5da470fc2ba9a30e": "1042f16dc8268e18c3237ed92d945e72",
".git/objects/12/8f1e86c401beb009b606c13361a2e13aa45a84": "bdeb3eba3eb4ec634390b57e448ba632",
".git/objects/86/0584ee5b51752781eb490556f8c271bafb66b4": "80a22cdc2c77dd7274597959897a7d5e",
".git/objects/92/b177bdbefda09efd15640b74d6c72c44ab3ef9": "962924fb98801e416a06f558875c110b",
".git/objects/8e/4d874006135f493210072f6e4fbaf25a864f4d": "c2cbc03e11cd6e46c4f317e841439d3b",
".git/objects/ba/071e5650a16070c9b1bb2cab717afe85384068": "97ad32be9be7ee1bb78a9cadf5f01123",
".git/objects/f3/7bcc5932902eae076446c5928a74f8105eeb4b": "517e4e38cbffbb8f1a6f9a6a0b39406a",
".git/objects/24/42a7ba22047ad6ecbbd28de84e66a342dd5675": "5883f53752aa07383db7a673a262550d",
".git/objects/9b/21f000bce517f9c5af7e1c171f062983324841": "d86cfe4fc69c758f5795ccaa7d92d457",
".git/objects/4c/6269ca7ddc12a28267ac4e0b7bd6e0c12f7889": "c4b893c9c8b210803c30c57c648250f2",
".git/objects/2a/3200a954b3f65d30d4b80a2ab0874fc37248c8": "0c2033c253862ffd85fade9d587d6c23",
".git/objects/cc/41f7908dfdf35b272e57ceff27f9de9d9a656a": "8061938fdfe4b3c861c7cd666cfb31d4",
".git/objects/8c/7fd8456f0afbe850ead257c7b8e99afd24a657": "32e5b3bb3d2296661850688b559f5bfa",
".git/objects/3f/cb7a729c74b38749f04b31e2a47f49bdda4253": "5bbe8b1ac9c04fd31806841ffbbcd84f",
".git/objects/ac/dc23c0a35afc7b66df2d0238474df5feb48175": "7bfcf8da94f7ad8fa4e62f0b7dc63826",
".git/objects/f0/98472d54357f216e525a03d8764c328b51fdfd": "13b4e20aa1aa2a08b91769f14e30037d",
".git/objects/52/c8f38eceb166b8a19fe3861959e92d7557f33d": "d162487c361ca8d932283fe5358d5e17",
".git/objects/59/12234e3a3f00353b5c8528ac8422a897e48a95": "222b66311e2a32771e1f59cb2d1881bb",
".git/objects/c8/4ca94ed52e2ed43ff0cf595bee1c5dcf4b93c1": "80af6b540ebb2baa02d88fc8094d6da4",
".git/objects/d1/14b6b2ffe436cf5cdd7986da0cc84e8c0e9b9a": "1fe6283bdc1bcba24b25e161335d1818",
".git/objects/33/0a1fb8975e7b2b0590f75fd9c3ba176719a3d2": "096439428900ac894b7bc9adf13ed9cc",
".git/objects/93/aab77aeab8e8bb6445b4e66f6048e8e3c9417a": "62a1ac95e6fb99b1328418f9fc5afedd",
".git/objects/78/bb5ce9bbae0b49e5f0859597c5fb31e2726f69": "5d427ed18c620a3386a8fe58a9ebd959",
".git/objects/85/1ce14d09df5cff010101aed73d033da5ce1d28": "bff5867b7dfc5767b127cba23b1e0414",
".git/objects/6f/5453bae8e4fd37cde13b5c16d3db197479ba4f": "aa24ca43e2f660f57e3b98d5efcf7b73",
".git/objects/49/43fc90093589139dbffd7f0e434f2078d73b65": "4a2e5ad673ac222570e044cf32bf9f1a",
".git/objects/0e/682ae75e50c0aaa47df24f667904d1647a7a4b": "fcc5e5d6ceb6e5d16f45ca390c097c54",
".git/objects/b9/df33c7c283ebd9e6302148d0bc88245b5b6d25": "e23a5340712d5241494cf185e757936e",
".git/objects/8d/178690de5416fb1691e70d7249216f6df43549": "07fd8d32fb936064864ac1a953f281d0",
".git/objects/37/d7a8a6f6632689bd9d0fb717d8232ecdbe019a": "4e31083679ff2a694f604c3442b0aba2",
".git/objects/b5/d0c422c6ecafd12d3fa9c9d8faba0580a46bfc": "7db4a55e0ae735b344aeef05005dac39",
".git/objects/b5/cf47628f1a43780f83eb458187b9d394c92561": "bbbd30ccd79a237ca408fa078aca38f6",
".git/objects/f6/422f72990b68a6f6ecba4314fbbf767456fe26": "209b776ae7632ba3bc437e52a13fc4a4",
".git/objects/06/2933f238538bce50af3e71fbe485650fc98bb8": "b3d2fc7ace5f6f4e7e4e5460e24647fe",
".git/objects/0d/0ffae350133bc0e2a26547119fc1be89ed2076": "2bc22297c11f537553ddc8147531b290",
".git/objects/6a/78496e2a02291a0b98914cd313db7afadb69f9": "d2ed87ee9e6d8270fc6d6fb9caccc807",
".git/objects/c2/f4336267d77c58a21e176f84d23673fa82a49a": "fa0a02c4d6892db1196cbb8a6f0fd289",
".git/objects/f2/1da0f5f1f19eee1b7ff075792f4de850da79bb": "4abdcce8684f64ef3c311e7dd82ff8f5",
".git/objects/25/269c444131e8e00df7deb35191e5113f4ae855": "df08d825f1d5c84e86ddfd93cb498707",
".git/refs/remotes/origin/master": "ba5b87e9ec9f4a881e1593f3c39fd917",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/heads/master": "ba5b87e9ec9f4a881e1593f3c39fd917",
".git/config": "d89ef223c27fcb18e1c707c2a98b3407",
".git/COMMIT_EDITMSG": "f3bbc05c5bcb4195c7a50f2f238a2e2d",
".git/packed-refs": "1e485431135b30292a3d4c3c8d884edd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/remotes/origin/master": "39202a94895e482e702d1a4ff376ed78",
".git/logs/refs/remotes/origin/HEAD": "0aa7ac21b3ec9ee564505bcd21ead21d",
".git/logs/refs/heads/master": "b4e53fcb13ee412f336e321c462d0015",
".git/logs/HEAD": "b4e53fcb13ee412f336e321c462d0015",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "ec68bbb88bda1b3ad3616d978362376a"
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
