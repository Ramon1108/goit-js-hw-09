const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){n=setInterval(o,1e3),a(!0)})),e.addEventListener("click",(function(){clearInterval(n),a(!1)}));let n=null;function o(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}function a(n){t.disabled=n,e.disabled=!n}
//# sourceMappingURL=01-color-switcher.80c94937.js.map