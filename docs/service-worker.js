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
  "./precache-manifest.7c3055a8a3b49a0f799dca5e552611bd.js"
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
    "revision": "4d6dd3a9a67aa0a13a1064d534ce0bf3"
  },
  {
    "url": "precache-manifest.0825a779ffb16b27ad9e1a1ad145a7b9.js",
    "revision": "0825a779ffb16b27ad9e1a1ad145a7b9"
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
    "revision": "624bf2b4301578489c69ad1624a9bdc6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
