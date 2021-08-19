// ==UserScript==
// @name         vasilysu_calc_cheat
// @namespace    http://github.com/
// @homepage     http://dikey0ficial.github.io/vasilysu_calc_cheat
// @version      1.2
// @description  Simple cheat script to skip unsolvable games on http://vasily.su/calculator-game/
// @author       d!key
// @match        http://vasily.su/calculator-game/level_random1.html
// @match        http://vasily.su/calculator-game/level_random2.html
// @match        http://vasily.su/calculator-game/level_random3.html
// @match        http://vasily.su/calculator-game/level_random4.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var button = document.createElement("button");
    button.className = "blue_border_start";
    button.id = "hack";
    button.innerHTML = "Click to win!";
    button.style.backgroundColor = "#1d3d1e";
    button.title = "Cheat made by d!key";
    if (document.location.href == "http://vasily.su/calculator-game/level_random4.html") {
         button.onclick = function() {
            firstnumber = answer - number1;
            firstButton();
        };
    } else {
        button.onclick = function() {
            firstnumber = answer + number2;
            secondButton();
        };
    }
    document.getElementsByTagName("h1")[0].after(button);
})();