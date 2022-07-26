// ==UserScript==
// @name         Craiyon Download Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.craiyon.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  document.onreadystatechange = () => {
    console.log("READY!!!!!!");
    setTimeout(() => {
      console.log("START!!!!!");
      let scrsh = document.querySelector('button[aria-label="Screenshot"]');
      let button = scrsh.cloneNode();
      scrsh.parentElement.appendChild(button);
      button.textContent = "Download all 9 pictures";
      button.onclick = () => {
        let is = document.querySelectorAll("img.h-full");
        let a = document.createElement("a");
        document.body.append(a);
        let title = document.querySelector("#prompt").innerText;
        is.forEach((v, i) => {
          a.href = v.src;
          a.setAttribute("download", title + ` ${i + 1}`);
          a.click();
        });
      };
    }, 0);
  };
})();
