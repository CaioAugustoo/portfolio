if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,r,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-019999f6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_error",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/AVi1xyoBR01miqXFck7wp/_buildManifest.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/AVi1xyoBR01miqXFck7wp/_ssgManifest.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.9b77d9c82e12555f4b79.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.d16e34d082bd9267f2e6.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/chunks/framework.0c239260661ae1d12aa2.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/chunks/main-801c73a5770b9c33fb68.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/chunks/pages/_app-1d92680df685be6ae011.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/chunks/pages/_error-3280d8d506df4c049934.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/chunks/pages/index-d83eb2a1a54d5aa2e67b.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"AVi1xyoBR01miqXFck7wp"},{url:"/img/back_top.svg",revision:"d51cbefb90a82a40784018bf1de8ab0d"},{url:"/img/favicon.ico",revision:"c657fffd221375f2620a6b99a8e405d7"},{url:"/img/hands.svg",revision:"ec0faa8f35b88dc93696ded545f5cee3"},{url:"/img/logo.svg",revision:"d48a0481f8aa0dccf9adb9f76e3898a7"},{url:"/img/logo192.png",revision:"289838f4a4a1687a8a293b7c37ee5b03"},{url:"/img/logo512.png",revision:"1e7b4f81307f53014cbed9b0cec9c39e"},{url:"/manifest.json",revision:"32cb5eab124ac8604b800a4e8843480b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",networkTimeoutSeconds:10,plugins:[{requestWillFetch:async({request:e})=>(Request(),e)},new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e,event:s,error:i,state:r})=>caches.match("/offline.jpg",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e,event:s,error:i,state:r})=>caches.match("/_error",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
