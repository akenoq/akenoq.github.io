"use strict";

window.onload = function () {
    $('a.nav-link').click(function () {
        $($(this).attr('data-href'))[0].scrollIntoView();
        window.scrollBy(0,-50);
    })
};
