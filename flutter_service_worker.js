'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
".git/config": "ca717995aa3726f5b9028fd05f76234b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ad20dd80ff006fd61d9b143c834f1d5c",
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
".git/index": "ca791509da0d62b45f94b25448f1217c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b03c91115ea990ac09fbd562489fcf3",
".git/logs/refs/heads/master": "2b03c91115ea990ac09fbd562489fcf3",
".git/logs/refs/remotes/origin/HEAD": "abb48522e092fa9139dc3d0dc334c565",
".git/logs/refs/remotes/origin/master": "1be357952a5ee5224bc1ebca96e8e597",
".git/objects/00/88ff4c34edacae95b2bad49f6575bc4d0bf816": "1552100834169552b85495d97da49c9a",
".git/objects/00/abf425119c13e1551b5fe2fe69713ca0ad10cb": "57479451118146ef957089d090e8b892",
".git/objects/03/70ceb26682dd4f0d7ca1f058ede7755b6a2735": "0d36510ba0aaed0daad49fa4192a887e",
".git/objects/03/be38de28272c3b2fc6ae9e7d8816198d931c3f": "c4921971028fe5067dc636350d788798",
".git/objects/0b/47e0a0d682ac2a7ffdb2eb970123417de4259b": "95784f8f5eaf1881d80d51d79fc57e05",
".git/objects/0c/6bd54377a9d3f020537c6f006c5da42f1ccb26": "af5a4c72b6552e1e09dc70910dc2ef45",
".git/objects/0d/156a651cfe4e3004289ef23f6c5b7d4d36b350": "fb0abddd81c1bf861974f1787268a4c1",
".git/objects/0e/31e7c57573c3fb4250057b57ebc9be66784db7": "5befccc127f8a21a49b52fb05c86cb74",
".git/objects/12/2dd761e304b9aa083e87eea4cd649070717e7b": "30e5e655e2f104734b1085d714b98c7b",
".git/objects/15/d94578d43feadd52ac39d64bea80103a0ac90c": "e52dcbb70b4ac966d3428787fbdb39bc",
".git/objects/18/154d7424ee047856d2309c1c0078b4bde38448": "891d4dbaa60bf263d97f3f6a1caf8fd6",
".git/objects/19/00b384754997ea07b041b2f7cdf80511707892": "f0793cd88961d74fb83f621a223c3806",
".git/objects/1a/412088c0f53029fbe37f83cc035798c155dd75": "f1c06dfa8d91b6fb62ab8fcf4da73677",
".git/objects/22/92c674e119424604dfa526c8b168b94c3fdcaf": "3c0bb4bd41d0735ee3cedffd463c2f26",
".git/objects/27/d77a97a432ff91b071b860adc8761c16a2ea75": "48351f7cf624da1e47fd077c7c1772ef",
".git/objects/29/889df904f577209190d39300ce0da6ba2643eb": "94d34f74314a9ce1fdcec03d3b2eb07f",
".git/objects/2b/b65865322a2737563d02b47783efd2bf926839": "4ffdcfdf01c552d74595f44c2ed68145",
".git/objects/2e/b022ecf6f6ef5233db284cb7fb3b2671ed5baf": "00bfb96e889511841640db24eb52b742",
".git/objects/2f/bc65c17121ee040963a481001aa997c83e11f2": "f9708b47bc34028ce9dc646a3b6f3be1",
".git/objects/30/55bc092fc01bda4b82f61cb08228ef06572439": "e76f2252f5794095794cf6ec2ed1f876",
".git/objects/32/515f8a3da18845d528fec00af6d6709a416c1f": "eb5a1da9e8e2c3637b2815ff73d4ac84",
".git/objects/3d/5f9ddefa30b1043dab0cdb6c9ab915896a8f3a": "695df45c36f63ce50748a0467af6f7d6",
".git/objects/40/362d0338e27b4762817c11766dd85615ec4cf4": "e8f33ecab6c1a35564bc4d1e847b81cf",
".git/objects/43/6a2c23a819798c40d9b049f1d6a61d25e6a1df": "88d97c81271d19b2a905eea479fdae28",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/51/571fcc1e1fff880100880aa17948c1a2d174ee": "7c82cca32386f8e5af42939422204001",
".git/objects/60/5ea08d3933cfa3f72b6cb476b663c88d5e5773": "ada5bca97dc7853d973f18b2ca0a571a",
".git/objects/63/02aefc02b3cecf5588bdabd860b96b7d4d7967": "58c619ecf5aba2f2331b32824abfc182",
".git/objects/63/bf4d19f0e5d095c08b114f460f0eba3bd6ebad": "884fe2b91ea53406783d4347b8f8f30a",
".git/objects/64/58e69431034dfe8f8c12cf546718c04aa96e5d": "fe1cd4b2f9c2f42973ddaebc8223d197",
".git/objects/65/2dfc0b3a865493b14ee52632cf8a1f7e21f9ed": "f290a2e66881c82b1a33e8f66c47fe80",
".git/objects/66/03ae27a67e96fbb9a2d8007563841c99d4cd40": "068b3209d46b8821304314016732ca26",
".git/objects/66/2c0372e8ce8e2136358fb52160e43197850ee4": "148578656207c97f0b8fcd757243c39c",
".git/objects/67/842f894b8680efedf9e187bb29541ca5701e3c": "5e517e56c847a7d7b8192ef702493d9a",
".git/objects/68/91fdf4b6b4ed2c42a608b856def79d80867016": "70476488504711e04da3a884a87c1e1f",
".git/objects/6c/5fcb78d93c750c7608070f9905331a5062dee6": "6946d548153ba142ff6d2afd7a3e3f62",
".git/objects/6e/0e1b6b9c53a3160dc56e511a48218c336c84f7": "eaf0844ee5fec7d9dc0424c98c153f27",
".git/objects/77/7eb7e1c2c89928d194a83424563edae17b73dc": "a7008b7035ab4b2a98622f8fe0a21a87",
".git/objects/77/febd3673a3cc9c737767fb7884d58f34699dfa": "946ae9f7deea7da3a47a3358d9321422",
".git/objects/7a/44778bf04a7080407c9685d317a862f07bb9f2": "b3ccc6e133885ac391d65927b9eda3bb",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/7d/b680b12a330bee368516458b9525373dcad53a": "8cf58e8d3ce2fa6724ee21e9a92f75e9",
".git/objects/82/30ce3c5d4b808d9256032ea57263398fbd3cfc": "2a9c3fbffc5f90d4c426ac9c9fcff3d7",
".git/objects/82/fc629c598abf8d4227a74d4fd3ef2020ce5a30": "1096f69c50cf25c8153085c9929707a3",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/85/8c73bf21550678abffda0dc06d5ccf41907362": "f877a6f97ebca0bd2549269f61d2847a",
".git/objects/89/54603bd05bf4ab0bc69b63af39867d708dfe4a": "5af657b1d90b1112afc32ec7efa4c594",
".git/objects/89/84de5cb01ec8ce90ef05a238a57b1f31d39fa9": "dcb186859805c993244da02fafdf04da",
".git/objects/89/f0a96f65d285ef65d8a52e5e4331de5fd85adf": "5edfa73338af0cc2fecf5ad9325b4c4e",
".git/objects/8c/1c2696aa53a88af78bf1a66a5d67e9979e2a2c": "830b21badfbe0b98114b694aa808240c",
".git/objects/8d/e48d2f390708f632066b3a8c97b48730b77132": "9171fe1eec989abd545569496f328639",
".git/objects/95/1e59099926a25a83a9edbe26b26c9c0cb1c724": "b1a15c99561e1d94ab7ca502ba69d430",
".git/objects/a2/435ede84c75bfa7d8d44c71f4d5f8fad0cc928": "d650f7560e247d85244d918cffe3bf9c",
".git/objects/a6/ca481e846ec46721a9b8d7b6590632917f10e9": "4b52d0579d19762dbf563690d5dae046",
".git/objects/ad/f79c74d088c72c778356a3b40782b3b38f0691": "5adef47500e759dfe4b8c189282c943f",
".git/objects/af/c2db75055f01fb027100af2b70b5d01a2b2fb0": "a00bd51a6c5dd69462febeec12715b07",
".git/objects/b6/c5172dd5ac44e1aa5649e78a7a6b7e49351533": "7dc6856bcb1fc6f1fbc0334b7480e4da",
".git/objects/bd/20439d345a6b8dc94e445a661205e0e09341e2": "1aa7874b6035d95bf2ef664d17a19188",
".git/objects/be/610143c66655970e893d2c8e4e9d7df4459d6b": "0c2a5a018c8f615bd6a00e91d929285b",
".git/objects/c1/53a5aa555c70a3cbfae33c42384341a6d19fe3": "0c2e5b1312adbed0dbb54b4699393578",
".git/objects/c6/8441450272923f05251b177495d2a7285aef1c": "2b535894ee8b03ad80928f10f27c4f79",
".git/objects/cd/8863ab5caff06a7e26dd43e9a658c2c80fd0a3": "74f1aa22b30d7a30aba2edbcd884a2a2",
".git/objects/dd/2abbcffa9a0148735856fa0e350da1cbb943a3": "8dc84b2ac74a0d9ba0e49e59d6b33bbc",
".git/objects/e6/54a38a4ce724b088f2b8296efc18702ae3c7bb": "75ab2da61defeb046f2e3594addca303",
".git/objects/ea/ba26cbd5c8b28b5132105ee460a62ed7530174": "892d688537b6cea763b9ba54faa717c7",
".git/objects/f7/14cd9a79b8d2c58262762e92be643cbed33a63": "17cac6f9946bac3b854988f8ad3abf71",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/fc/890f981ae3f5e0f241acecc505d151b9e8d110": "eb08994050debfa941f7da56d3ef2075",
".git/objects/fd/f905a97d4e654f42e60a3cc3ef517281e0f920": "0a2bc291669c9ec25760f3adfeb2451b",
".git/objects/pack/pack-0c10061c8cbcae67ed57461c06fad06b8158dfc2.idx": "4dd081355faa5c411646d6cc261b5c0b",
".git/objects/pack/pack-0c10061c8cbcae67ed57461c06fad06b8158dfc2.pack": "e2784243a7b729ebdd3eff89b9977bdf",
".git/packed-refs": "19289650be398f6f7bc6870a29f4d7b7",
".git/refs/heads/master": "dd1fc6391c07b26ad6354959e6c609c7",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "dd1fc6391c07b26ad6354959e6c609c7",
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
"index.html": "58173bb1adaeb5159535ff3558215e4f",
"/": "58173bb1adaeb5159535ff3558215e4f",
"main.dart.js": "908a93cadc72a455620dc788adb0a960",
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
