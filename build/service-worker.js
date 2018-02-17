"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/agency/build/index.html","3eeb0191fd719ef87b6144d538ed2f8c"],["/agency/build/static/css/main.42691ebb.css","33067da4c78f87bbe74c649b05914aa8"],["/agency/build/static/js/main.3a324541.js","37c24de2f4b5efe344cacb1dc4a5efd3"],["/agency/build/static/media/bg1.5dd0d62b.jpg","5dd0d62b79b3b7b1c0a6e2c041e23dc6"],["/agency/build/static/media/bg2.feb3c5f2.jpg","feb3c5f2ec8d6931b122dbf4b09a4908"],["/agency/build/static/media/bg3.0bfc61f1.jpg","0bfc61f1d8bc5dd91831963c19ed77c0"],["/agency/build/static/media/bg4.66dc5950.jpg","66dc595079770c3c202f05c34f7778bb"],["/agency/build/static/media/desktop1-1.292271a9.jpg","292271a9375aea06b22dbbca4ffd4c5f"],["/agency/build/static/media/desktop1-2.34d1719d.jpg","34d1719d6e121f9d0f2635b3a64b4acb"],["/agency/build/static/media/desktop1-3.32a75ee2.jpg","32a75ee20cca093d3531e9b014f304e3"],["/agency/build/static/media/desktop1-4.7e6b464f.jpg","7e6b464f72cd0d08877a85effea2199f"],["/agency/build/static/media/desktop2-1.9e99e707.jpg","9e99e707cc64956b07f703e0b1f9c261"],["/agency/build/static/media/desktop2-2.5bb93e43.jpg","5bb93e43c24b8ff1ca40ce89bcec38ac"],["/agency/build/static/media/desktop2-3.ff924f5b.jpg","ff924f5bfd06d46b4933920fd9b164d9"],["/agency/build/static/media/desktop2-4.31281ebe.jpg","31281ebe38179928c1397b967278392d"],["/agency/build/static/media/desktop3-1.ee85cf21.jpg","ee85cf2163660a4dfa3bddac13f64d09"],["/agency/build/static/media/desktop3-2.cc894119.jpg","cc894119fa55e408b5a64018d4956c1e"],["/agency/build/static/media/desktop3-3.9c2668ff.jpg","9c2668ff420f1cecb997b8d5c264fdfe"],["/agency/build/static/media/desktop3-4.3c992316.jpg","3c99231630c84ad7b6f839672632dd4c"],["/agency/build/static/media/desktop4-1.e2797187.jpg","e2797187550e465554901255c69d6131"],["/agency/build/static/media/desktop4-2.d78f1f92.jpg","d78f1f928a4eda00e210a8808b1154a6"],["/agency/build/static/media/desktop4-3.23539d83.jpg","23539d83065a0f4f5ca284509c1c0b1c"],["/agency/build/static/media/desktop4-4.c77ed979.jpg","c77ed97913ee8367ed4ff3187f3172a2"],["/agency/build/static/media/mobile1.aeda4ca1.png","aeda4ca1e5eb98bcc963830d6d235a9e"],["/agency/build/static/media/mobile2.4ff37d41.png","4ff37d4149e47c95f86ff6c78e9ce34e"],["/agency/build/static/media/mobile3.5811d583.png","5811d58301b82dc72a7d5cb00058dcec"],["/agency/build/static/media/mobile4.027afa28.png","027afa284c172eef2ce1010004732bd9"],["/agency/build/static/media/montserrat-bold.482841a0.woff2","482841a071b7574b3ee0c61d8b54f29a"],["/agency/build/static/media/montserrat-bold.b943956f.woff","b943956fc8577e4dcb3b1d8cdef5feae"],["/agency/build/static/media/montserrat-light.be378446.woff2","be378446b45503d1ce48f373b1aaf8cb"],["/agency/build/static/media/montserrat-light.c696061b.woff","c696061b24a368cc7e90a8e708ff6a59"],["/agency/build/static/media/playfairdisplay-regular.3c05c641.woff2","3c05c64121a36b505250db3632cdf06e"],["/agency/build/static/media/playfairdisplay-regular.faaa7b63.woff","faaa7b63f0bcd809807654fffc9f3b84"],["/agency/build/static/media/project1.676362d2.jpg","676362d258aad223672243ac3c83fddc"],["/agency/build/static/media/project2.41425ccc.jpg","41425ccc33075e8a3407e6d962f6e746"],["/agency/build/static/media/project3.e9933d65.jpg","e9933d65a3e02a17242eab4811ba0cf9"],["/agency/build/static/media/project4.eb5f888b.jpg","eb5f888bb9d5845e7a3b236d2a70cb40"],["/agency/build/static/media/web.3e5f47fc.png","3e5f47fca07f314447fe875cf548d7e8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/agency/build/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});