/* ==========================================================================
   Site settings and small behaviours
   ========================================================================== */

/*
  NETWORK BUTTON
  Paste the address of the network's login page between the quotes below
  (for example "https://network.example.com/login"). Every "Network" button
  on the site turns on and links there. While this is empty, the buttons show
  a "Coming soon" state and do nothing when clicked.
*/
var SITE_CONFIG = {
  networkUrl: ""
};

(function () {
  "use strict";

  // Network buttons
  var networkLinks = document.querySelectorAll("[data-network]");
  networkLinks.forEach(function (link) {
    var soon = link.querySelector(".badge");
    if (SITE_CONFIG.networkUrl) {
      link.setAttribute("href", SITE_CONFIG.networkUrl);
      link.removeAttribute("aria-disabled");
      link.removeAttribute("title");
      link.classList.add("is-live");
      if (soon) {
        soon.remove();
      }
    } else {
      link.addEventListener("click", function (event) {
        event.preventDefault();
      });
    }
  });

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
