if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      workbox.skipWaiting()
      console.log('Workbox is loaded');
  
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([{"revision":"03dfd0d498c4918be228e1366e2e2b24","url":"covidstate192.png"},{"revision":"25be5728ec4e821974b66340599aa37e","url":"covidstate512.png"},{"revision":"ecea5fb0258e9f72b3b1340835669865","url":"index.html"},{"revision":"f7b56a3f4b578a11fd7576225bc1aca1","url":"static/css/main.7799ae6b.chunk.css"},{"revision":"dfc4442db2a702942b86b517f28fe580","url":"static/js/2.d30115ed.chunk.js"},{"revision":"ffd593753f60140992f04b7509cfdd41","url":"static/js/main.9e6cf13d.chunk.js"},{"revision":"7b201c6edd75e989562a097f2c06690e","url":"static/js/runtime-main.1ec1cf69.js"},{"revision":"5ba982bc1ce33d6c1d7c2d3461c76394","url":"asset-manifest.json"},{"revision":"f4b4ce2e3395b8d3cc63c5267d4e4b45","url":"favicon.ico"},{"revision":"391477c080011cae5b3ac5d8d5ff421d","url":"manifest.json"},{"revision":"f295cddb66768911286bc7cfc22d4a6f","url":"precache-manifest.f295cddb66768911286bc7cfc22d4a6f.js"},{"revision":"6e6f972bdc9a4ed68389fda294795301","url":"service-worker.js"}]);
  
      /* custom cache rules*/
      workbox.routing.registerNavigationRoute('/index.html', {
        blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/,/^\/api/],
     });
     
     workbox.routing.registerRoute(
        new RegExp("https:\/\/covidstate\.in\/api\/v1\/messages*"),
        new workbox.strategies.CacheFirst(),
        "GET"
     )
     workbox.routing.registerRoute(
        new RegExp("https:\/\/covidstate\.in\/api\/v1\/contacts*"),
        new workbox.strategies.NetworkFirst(),
        "GET"
     )
     workbox.routing.registerRoute(
        new RegExp("https:\/\/covidstate\.in\/api\/v1\/faqs*"),
        new workbox.strategies.CacheFirst(),
        "GET"
     )

  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }