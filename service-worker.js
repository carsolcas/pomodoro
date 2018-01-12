"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/pomodoro/index.html","ad3adfac54d756afece188a14684ab2c"],["/pomodoro/static/css/main.88d6567b.css","4c68e2d0bd5414f1c902f0838e961653"],["/pomodoro/static/js/main.09851100.js","b3a5eb4260b686148909ed66118c805c"],["/pomodoro/static/media/logo.ee7cd8ed.svg","ee7cd8ed2dcec943251eb2763684fc6f"],["/pomodoro/static/media/roboto-latin-100.987b8457.woff2","987b84570ea69ee660455b8d5e91f5f1"],["/pomodoro/static/media/roboto-latin-100.e9dbbe8a.woff","e9dbbe8a693dd275c16d32feb101f1c1"],["/pomodoro/static/media/roboto-latin-100italic.6232f43d.woff2","6232f43d15b0e7a0bf0fe82e295bdd06"],["/pomodoro/static/media/roboto-latin-100italic.d704bb3d.woff","d704bb3d579b7d5e40880c75705c8a71"],["/pomodoro/static/media/roboto-latin-300.55536c8e.woff2","55536c8e9e9a532651e3cf374f290ea3"],["/pomodoro/static/media/roboto-latin-300.a1471d1d.woff","a1471d1d6431c893582a5f6a250db3f9"],["/pomodoro/static/media/roboto-latin-300italic.210a7c78.woff","210a7c781f5a354a0e4985656ab456d9"],["/pomodoro/static/media/roboto-latin-300italic.d69924b9.woff2","d69924b98acd849cdeba9fbff3f88ea6"],["/pomodoro/static/media/roboto-latin-400.5d4aeb4e.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["/pomodoro/static/media/roboto-latin-400.bafb105b.woff","bafb105baeb22d965c70fe52ba6b49d9"],["/pomodoro/static/media/roboto-latin-400italic.9680d5a0.woff","9680d5a0c32d2fd084e07bbc4c8b2923"],["/pomodoro/static/media/roboto-latin-400italic.d8bcbe72.woff2","d8bcbe724fd6f4ba44d0ee6a2675890f"],["/pomodoro/static/media/roboto-latin-500.28546717.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["/pomodoro/static/media/roboto-latin-500.de8b7431.woff","de8b7431b74642e830af4d4f4b513ec9"],["/pomodoro/static/media/roboto-latin-500italic.510dec37.woff2","510dec37fa69fba39593e01a469ee018"],["/pomodoro/static/media/roboto-latin-500italic.ffcc050b.woff","ffcc050b2d92d4b14a4fcb527ee0bcc8"],["/pomodoro/static/media/roboto-latin-700.037d8304.woff2","037d830416495def72b7881024c14b7b"],["/pomodoro/static/media/roboto-latin-700.cf6613d1.woff","cf6613d1adf490972c557a8e318e0868"],["/pomodoro/static/media/roboto-latin-700italic.010c1aee.woff2","010c1aeee3c6d1cbb1d5761d80353823"],["/pomodoro/static/media/roboto-latin-700italic.846d1890.woff","846d1890aee87fde5d8ced8eba360c3a"],["/pomodoro/static/media/roboto-latin-900.19b7a0ad.woff2","19b7a0adfdd4f808b53af7e2ce2ad4e5"],["/pomodoro/static/media/roboto-latin-900.8c2ade50.woff","8c2ade503b34e31430d6c98aa29a52a3"],["/pomodoro/static/media/roboto-latin-900italic.7b770d6c.woff2","7b770d6c53423deb1a8e49d3c9175184"],["/pomodoro/static/media/roboto-latin-900italic.bc833e72.woff","bc833e725c137257c2c42a789845d82f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,o){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=o),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(o){return new Response(o,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,o,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(o)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,o){if(0===e.length)return!0;var t=new URL(o).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,o){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return o.every(function(o){return!o.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var o=e[0],t=e[1],a=new URL(o,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(o){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!o.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(o){if(!o.ok)throw new Error("Request for "+t+" returned a response with status "+o.status);return cleanResponse(o).then(function(o){return e.put(t,o)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var o=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!o.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var o,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(o=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),o=urlsToCacheKeys.has(t));var r="/pomodoro/index.html";!o&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),o=urlsToCacheKeys.has(t)),o&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(o){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,o),fetch(e.request)}))}});