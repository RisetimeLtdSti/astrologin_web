'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9f1312702d09c36c8cc61c85e3034d76",
"assets/assets/fonts/Montserrat-Light.ttf": "a17f43cc60643d965636985afc00a221",
"assets/assets/fonts/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/Montserrat-Regular.otf": "92db9a0772b3732e6d686fec3711af42",
"assets/assets/images/adImage/ad1.png": "1417f155065c2701b7f061868e9aacef",
"assets/assets/images/adImage/ad3.png": "304cd6270691fccd8d3d24921f992223",
"assets/assets/images/background/about_header.png": "3fb6d2d772c2cc2b6f7b9ce681298c46",
"assets/assets/images/background/anasayfa.png": "9d1ec73e798bd7248e7091c1cb8375f0",
"assets/assets/images/background/anaSayfaCut.png": "73dd2df53eb531fb2e83506bc50eb01d",
"assets/assets/images/background/astrologlar.png": "accacb7e4ee02449b49fe9c3c33f7157",
"assets/assets/images/background/backg.png": "492bf5e89905a082d3f2aea156504b09",
"assets/assets/images/background/Group40.png": "752c689200a5993de89cc16d8102f65f",
"assets/assets/images/background/hizmet.png": "1a9025e19c312b896376c79930df6edd",
"assets/assets/images/background/hizmetSayfas%25C4%25B1Cut.png": "f9103d128563894d752a779029cd030d",
"assets/assets/images/background/Katman2.png": "3bab225e1b135af3f6435af1a8141e3b",
"assets/assets/images/background/thirdPageCut.png": "6d6c912e450cd5d6dcd0f537b61fd002",
"assets/assets/images/background/title.png": "0d08dbb154cf9565ea24643be0e5d7e9",
"assets/assets/images/card/card1.png": "464d7a7a39aee3a93f8732ebeb48ed94",
"assets/assets/images/card/card2.png": "210e7da3c3d0cdb18649fbbc100fd53e",
"assets/assets/images/card/card3.png": "45db2bb39c238ba3c247c2dfb3982dd7",
"assets/assets/images/card/card4.png": "ede4444f44c7f1d7c94c7fcf75284978",
"assets/assets/images/card/card5.png": "22912abccb201760b84629bef1f1e770",
"assets/assets/images/card/card6.png": "e65b09d7d852958373983a0c093ea1ae",
"assets/assets/images/icon/cup-2.png": "671485cf0ef464ede624ac815836fc1a",
"assets/assets/images/icon/edit_profile_circular.png": "46bcbc0c871741a6dd0406b64a91a6ad",
"assets/assets/images/icon/element_air_icon.png": "2f5a9d9934cf453401e7fc347f9f950d",
"assets/assets/images/icon/element_earth_icon.png": "a83b4638884922ff330928b28a541d0d",
"assets/assets/images/icon/element_fire_icon.png": "86508da533d69ecf35bb467b881819c4",
"assets/assets/images/icon/element_water_icon.png": "3298d381bc94c5583ede70ab54d81364",
"assets/assets/images/icon/facebook-icon.ico": "d855b8d41bf273c66bcbca7ed6a09364",
"assets/assets/images/icon/gender_female.ico": "9fe0aa6887a9cbe3868ea2e9ce4db5b9",
"assets/assets/images/icon/gender_male.ico": "37eeaf49d3f29d4cabc61a7091808925",
"assets/assets/images/icon/gender_non-binary.ico": "1afe4f406bef3b0ff3cdef41f3fd6c44",
"assets/assets/images/icon/google_icon.ico": "7fa97c71202620686c9c679c3f61b9f5",
"assets/assets/images/icon/grey_rewind.png": "291d697e4c66ea11992c061524441356",
"assets/assets/images/icon/instagram-icon.png": "f2dea9574a1413438c7de5fde22c26e3",
"assets/assets/images/icon/like.png": "4ba0b11539b3d46effcebd37b7414d47",
"assets/assets/images/icon/message-box.png": "f287f7337463e9d43252d5b59c1a8576",
"assets/assets/images/icon/moon_sign.png": "850e90a0f033fb814be01932231070d0",
"assets/assets/images/icon/nope.png": "9673aff6c0507f397226d01c3e220b1a",
"assets/assets/images/icon/ok_sa%25C4%259F.png": "6b9a178cf3f30169c5c27a9de5737465",
"assets/assets/images/icon/ok_sol.png": "5f9d535ecc65dc46d103a88b181214d4",
"assets/assets/images/icon/pinterest-icon.png": "b92f16467acf3de944383ed79fdd953b",
"assets/assets/images/icon/profile-1.png": "898495295cf11268c318ef7c80100f96",
"assets/assets/images/icon/rising_sign.png": "159cf304145119d4174978a56be49c06",
"assets/assets/images/icon/settings_circular.png": "0ee1955ec031db2e33e2a9de228c0350",
"assets/assets/images/icon/shop.png": "abc76679cf8f66be6afcb60c8a098528",
"assets/assets/images/icon/sun_sign.png": "94e2b8f77c80049b30eaa3b4888a9047",
"assets/assets/images/icon/super_like.png": "13f274e98d09fbdd6b77f6d7ac5f66aa",
"assets/assets/images/icon/swipe-1.png": "7591a64f9e9cf0a4323ca93a86934037",
"assets/assets/images/icon/tick.ico": "fc528ea9575978e84faf83f4baab1ecf",
"assets/assets/images/icon/twitter-icon.png": "00de0742afc224236a0b3b1147f80575",
"assets/assets/images/icon/yuyyu_coin.png": "5c72886c27b65cf47443d9e7199066c4",
"assets/assets/images/logo/fire.png": "7f978f0d5cba541dbdb95af6c8a3dbaa",
"assets/assets/images/logo/logo.png": "fb4f0eafb6fd5d73a3f5b8246bec202b",
"assets/assets/images/logo/logo_text.png": "a0aeb2bd6b78bb81ead7451ec0bb6ed7",
"assets/assets/userImages/image_3.jpg": "63aae95f60bd3d3df83f62a0d9e50186",
"assets/assets/userImages/image_4.jpg": "58de98c36df68863bf5c1cc5c9061dc9",
"assets/assets/userImages/image_5.jpg": "9dfeca4337ef8f511fd1387a7bb734c4",
"assets/FontManifest.json": "57eaaf03069c49e82bab1f71539141bd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0f4e1aa3fe324d369566d9701b1dff77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "cadfcf986f26d830521e9a63350f4dbd",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "af9d2aa412eb43d4a740bb8e3320c89b",
"/": "af9d2aa412eb43d4a740bb8e3320c89b",
"main.dart.js": "d89734b586aad72b7d539bb92eed1dfd",
"manifest.json": "a07254bf4fa03f551995b1cbf2ac8b1e",
"version.json": "6531f80211781a8eee5f945b5ca0083d"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
