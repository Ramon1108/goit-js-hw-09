!function(){var t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");t.addEventListener("click",(function(){e=setInterval(a,1e3),o(!0)})),n.addEventListener("click",(function(){clearInterval(e),o(!1)}));var e=null;function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}function o(e){t.disabled=e,n.disabled=!e}}();
//# sourceMappingURL=01-color-switcher.bea7e8ae.js.map
