// ==UserScript==
// @name         r/Place Black MIDI Place Overlay
// @namespace    https://github.com/6gh/rPlaceOverlay
// @version      1.0.0
// @description  R/Place Black MIDI Overlay by Danidanijr
// @author       stevebel
// @author       6gh
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("garlic-bread-embed")[0].shadowRoot.querySelectorAll("garlic-bread-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/6gh/rPlaceOverlay/raw/main/place-overlay.png";
            i.style = "position: absolute;image-rendering: pixelated;width: 42px;height: 20px;z-index: 100;";
            i.style.top = 171 + 'px';
            i.style.left = 312 + 'px';
            return i;
        })())
    }, false);
}
