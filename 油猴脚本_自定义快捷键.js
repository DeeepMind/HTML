// ==UserScript==
// @name         自定义快捷键
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ai.baidu.com/easydata/app/annotate/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        var box1
        var box2
        window.addEventListener("keydown", function (event) {

            if (event.defaultPrevented) {
                return; // 如果事件已经在进行中，则不做任何事。
            }
            switch (event.key) {
                case "v":
                case "V":
                    // 按“c”方向键时要做的事。
                    box1 = document.querySelector("#app > div.layout-main > div > main > div > div > div > div.page-annotate-entry.lg-workspace > div.obj-dct-component.workshop.invalid-component.easydata-workshop > div > div.leftmost > div > div > span > div:nth-child(1)")
                    box2 = document.querySelector("#app > div.layout-main > div > main > div > div > div > div.page-annotate-entry.lg-workspace > div.obj-dct-component.workshop.invalid-component.easydata-workshop > div > div.leftmost > div > div > span > div:nth-child(7)")
                    box1.click()
                    break;
                case "c":
                case "C":
                    // 按“v”方向键时要做的事。
                    box1 = document.querySelector("#app > div.layout-main > div > main > div > div > div > div.page-annotate-entry.lg-workspace > div.obj-dct-component.workshop.invalid-component.easydata-workshop > div > div.leftmost > div > div > span > div:nth-child(1)")
                    box2 = document.querySelector("#app > div.layout-main > div > main > div > div > div > div.page-annotate-entry.lg-workspace > div.obj-dct-component.workshop.invalid-component.easydata-workshop > div > div.leftmost > div > div > span > div:nth-child(7)")
                    box2.click()
                    break;
                default:
                    return; // 什么都没按就退出吧。
            }
            // 取消默认动作，从而避免处理两次。
            event.preventDefault();
        }, true);
    // Your code here...
})();
