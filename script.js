// ==UserScript==
// @name         Flowdock Style Update
// @namespace    https://www.danielandrade.net
// @version      0.1
// @description  Make flowdock noicer
// @author       Daniel Spillere Andrade
// @match        https://www.flowdock.com/*
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('p {font-family: Consolas !important; font-size:20px; }');
addGlobalStyle('.message-author {font-size:16px; }');
