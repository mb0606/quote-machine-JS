!function(){function t(t){return document.querySelector(t)}function e(t){t.length>140&&(t=t.substr(0,138)+"...");var e=document.createElement("a");return e.setAttribute("href","https://twitter.com/share"),e.setAttribute("class","twitter-share-button"),e.setAttribute("data-count","horizontal"),e.setAttribute("data-text",t),e}function r(t,r,n){function o(t,e){return Math.floor(Math.random()*(e-t+1))+t}var u=t[o(0,t.length-1)];r.innerText=u.quote,n.innerText=u.author;var a=e(u.quote);document.querySelector(".main-container").appendChild(a)}var n=t("button.random-quote"),o=t(".quote-text"),u=t(".said-by");n.addEventListener("click",function(){document.querySelector("iframe").remove(),r(quotes,o,u),twttr.widgets.load()})}();