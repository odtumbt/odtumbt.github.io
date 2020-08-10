'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7bc49fb1339d4bee2b87ac48964b636f",
".git/config": "ca717995aa3726f5b9028fd05f76234b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "da44e6a31c3511167f6dcc40cdf560f5",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "2403b84db2619c2b4ee82af1ee1e06a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d086e6fba896532b8df69e8c3777e989",
".git/logs/refs/heads/master": "d086e6fba896532b8df69e8c3777e989",
".git/logs/refs/remotes/origin/HEAD": "abb48522e092fa9139dc3d0dc334c565",
".git/logs/refs/remotes/origin/master": "2cacb764f46747068e7f07bf997156f8",
".git/objects/03/70ceb26682dd4f0d7ca1f058ede7755b6a2735": "0d36510ba0aaed0daad49fa4192a887e",
".git/objects/03/be38de28272c3b2fc6ae9e7d8816198d931c3f": "c4921971028fe5067dc636350d788798",
".git/objects/0e/31e7c57573c3fb4250057b57ebc9be66784db7": "5befccc127f8a21a49b52fb05c86cb74",
".git/objects/12/2dd761e304b9aa083e87eea4cd649070717e7b": "30e5e655e2f104734b1085d714b98c7b",
".git/objects/15/d94578d43feadd52ac39d64bea80103a0ac90c": "e52dcbb70b4ac966d3428787fbdb39bc",
".git/objects/18/154d7424ee047856d2309c1c0078b4bde38448": "891d4dbaa60bf263d97f3f6a1caf8fd6",
".git/objects/19/00b384754997ea07b041b2f7cdf80511707892": "f0793cd88961d74fb83f621a223c3806",
".git/objects/2e/b022ecf6f6ef5233db284cb7fb3b2671ed5baf": "00bfb96e889511841640db24eb52b742",
".git/objects/43/6a2c23a819798c40d9b049f1d6a61d25e6a1df": "88d97c81271d19b2a905eea479fdae28",
".git/objects/51/571fcc1e1fff880100880aa17948c1a2d174ee": "7c82cca32386f8e5af42939422204001",
".git/objects/60/5ea08d3933cfa3f72b6cb476b663c88d5e5773": "ada5bca97dc7853d973f18b2ca0a571a",
".git/objects/64/58e69431034dfe8f8c12cf546718c04aa96e5d": "fe1cd4b2f9c2f42973ddaebc8223d197",
".git/objects/6c/5fcb78d93c750c7608070f9905331a5062dee6": "6946d548153ba142ff6d2afd7a3e3f62",
".git/objects/7a/44778bf04a7080407c9685d317a862f07bb9f2": "b3ccc6e133885ac391d65927b9eda3bb",
".git/objects/7d/b680b12a330bee368516458b9525373dcad53a": "8cf58e8d3ce2fa6724ee21e9a92f75e9",
".git/objects/82/30ce3c5d4b808d9256032ea57263398fbd3cfc": "2a9c3fbffc5f90d4c426ac9c9fcff3d7",
".git/objects/85/8c73bf21550678abffda0dc06d5ccf41907362": "f877a6f97ebca0bd2549269f61d2847a",
".git/objects/89/84de5cb01ec8ce90ef05a238a57b1f31d39fa9": "dcb186859805c993244da02fafdf04da",
".git/objects/89/f0a96f65d285ef65d8a52e5e4331de5fd85adf": "5edfa73338af0cc2fecf5ad9325b4c4e",
".git/objects/a2/435ede84c75bfa7d8d44c71f4d5f8fad0cc928": "d650f7560e247d85244d918cffe3bf9c",
".git/objects/a6/ca481e846ec46721a9b8d7b6590632917f10e9": "4b52d0579d19762dbf563690d5dae046",
".git/objects/c6/8441450272923f05251b177495d2a7285aef1c": "2b535894ee8b03ad80928f10f27c4f79",
".git/objects/cd/8863ab5caff06a7e26dd43e9a658c2c80fd0a3": "74f1aa22b30d7a30aba2edbcd884a2a2",
".git/objects/dd/2abbcffa9a0148735856fa0e350da1cbb943a3": "8dc84b2ac74a0d9ba0e49e59d6b33bbc",
".git/objects/f7/14cd9a79b8d2c58262762e92be643cbed33a63": "17cac6f9946bac3b854988f8ad3abf71",
".git/objects/pack/pack-0c10061c8cbcae67ed57461c06fad06b8158dfc2.idx": "4dd081355faa5c411646d6cc261b5c0b",
".git/objects/pack/pack-0c10061c8cbcae67ed57461c06fad06b8158dfc2.pack": "e2784243a7b729ebdd3eff89b9977bdf",
".git/packed-refs": "19289650be398f6f7bc6870a29f4d7b7",
".git/refs/heads/master": "2ff58bbbb0d7c96be38af33f133613a1",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "2ff58bbbb0d7c96be38af33f133613a1",
"assets/AssetManifest.json": "6a47759ba677cd170cc8a7e080357cef",
"assets/assets/images/4-3.jpg": "268763d545d425ebe22e25b2da8849a4",
"assets/assets/images/faaliyetlerimiz/basindabiz.png": "2aab3e0b16b9af83fff693ca5a5f09cf",
"assets/assets/images/faaliyetlerimiz/ders-notlarimiz.png": "e33111643b3cc7222b4e5aada14910cd",
"assets/assets/images/faaliyetlerimiz/makale.png": "c803e2771af7df718db2320ac5d6d908",
"assets/assets/images/faaliyetlerimiz/online-egitimlerimiz.png": "0192b21ccd27c96223dd70c80e39516f",
"assets/assets/images/faaliyetlerimiz/online-kutuphanemiz.png": "986a3cced2be6194772e4eb644b85f31",
"assets/assets/images/faaliyetlerimiz/projelerimiz.png": "aac0a9c8df879ca2bf631ad6c09cd8c2",
"assets/assets/images/faaliyetlerimiz/sosyal-etkinliklerimiz.png": "fedceda84b62d16bd3603135e5489dec",
"assets/assets/images/faaliyetlerimiz/teknik-etkinliklerimiz.png": "7149981e1bb764242f58abb972f4af51",
"assets/assets/images/faaliyetlerimiz/video-egitimlerimiz.png": "e401f709974e54e664e7ecbea03e8122",
"assets/assets/images/kolaj.png": "37cbbfea18513d21aa52e47c10aac1d2",
"assets/assets/images/logo/favicon.png": "d728b9b90bea963c3995789095c64079",
"assets/assets/images/logo/Icon-192.png": "44a5832c03c9a29c4841ce34392c04d8",
"assets/assets/images/logo/Icon-512.png": "184ce9886f728542890b8c6e5a8c4232",
"assets/assets/images/logo/logo-128.png": "0bd24fedd09c0200e249ffac95959a18",
"assets/assets/images/logo/logo-256.png": "14d4f335660eb2f89ab5e1667b9bb42f",
"assets/assets/images/logo/logo-512.png": "184ce9886f728542890b8c6e5a8c4232",
"assets/assets/images/logo/logo-64.png": "78f06237ec80ca007ead220e9f189830",
"assets/assets/images/logo/logo-yatay.png": "4020f3a866351bbb2ba4354e3d290bda",
"assets/assets/images/sosyalMedya/discord.png": "39a564ccee762aee938268cb2207094a",
"assets/assets/images/sosyalMedya/facebook.png": "dfed48900fd935dbdc604c06c76721b4",
"assets/assets/images/sosyalMedya/github.png": "1dfad82968ef75c2b7072ad52c10ece5",
"assets/assets/images/sosyalMedya/instagram.png": "6f3dbfce0f2ed8376627878f02d1b85a",
"assets/assets/images/sosyalMedya/linkedin.png": "f81f084330de2f3ca1902d289ec3b616",
"assets/assets/images/sosyalMedya/reddit.png": "5f0b9a7a4c8d881d591013c34cc94f00",
"assets/assets/images/sosyalMedya/twitch.png": "ddfe9df87aceecab52f657a4950c754a",
"assets/assets/images/sosyalMedya/twitter.png": "4a5eeb9394152266580c171ec01cc860",
"assets/assets/images/sosyalMedya/youtube.png": "1099763b9fa768c3f4030fe2ff8c39f5",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "fa9e85b8b3cc6fe9c7f89dea2f13aa48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "d728b9b90bea963c3995789095c64079",
"icons/Icon-192.png": "44a5832c03c9a29c4841ce34392c04d8",
"icons/Icon-512.png": "184ce9886f728542890b8c6e5a8c4232",
"index.html": "53fcc70ce0ba56ae38ab3ae1754f7ee7",
"/": "53fcc70ce0ba56ae38ab3ae1754f7ee7",
"main.dart.js": "084bd91b903f03563dd28ec0581bcbe2",
"manifest.json": "492fdb19bfb7c531d5756514a8d5d454"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
  // If the URL is not the RESOURCE list, skip the cache.
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
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
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
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
