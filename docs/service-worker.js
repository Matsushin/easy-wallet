/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

importScripts(
  "./precache-manifest.0825a779ffb16b27ad9e1a1ad145a7b9.js"
);

workbox.core.setCacheNameDetails({prefix: "easy-wallet"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "6afa027f6ede25369929b452d80c3999"
  },
  {
    "url": "precache-manifest.d9d14e006c6dc9d41c0962a7bc945ea0.js",
    "revision": "d9d14e006c6dc9d41c0962a7bc945ea0"
  },
  {
    "url": "precache-manifest.ebe52ba3469e1c860341cd9bda814698.js",
    "revision": "ebe52ba3469e1c860341cd9bda814698"
  },
  {
    "url": "service-worker.js",
    "revision": "4222b9ad84e0aa291526a119dd9a6b03"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
