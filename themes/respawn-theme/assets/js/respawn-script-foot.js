var settingsGlobal = {"fixedMenu":"regular","menuLayout":"right-aligned-menu","onePage":"","blog_feed":"standard_right","megaMenuActive":"1"};
var megamenu = {"timeout":"300","interval":"100"};

document.write('<scr'+'ipt type="text/javascript" src="/themes/respawn-theme/assets/js/bf4b6.js" ></scr'+'ipt>');
//document.write('<scr'+'ipt type="text/javascript" src="/respawn/assets/js/108fc.js" ></scr'+'ipt>');
//document.write('<scr'+'ipt type="text/javascript" src="/respawn/assets/js/6a826.js" ></scr'+'ipt>');
//document.write('<scr'+'ipt type="text/javascript" src="/respawn/assets/js/c3645.js" ></scr'+'ipt>');
document.write('<scr'+'ipt type="text/javascript" src="/themes/respawn-theme/assets/js/9ee52.js" ></scr'+'ipt>');
document.write('<scr'+'ipt type="text/javascript" src="/themes/respawn-theme/assets/js/97e74.js" ></scr'+'ipt>');
//document.write('<scr'+'ipt type="text/javascript" src="/respawn/assets/js/b9d38.js" ></scr'+'ipt>');
//document.write('<scr'+'ipt type="text/javascript" src="/respawn/assets/js/29f53.js" ></scr'+'ipt>');

window.w3tc_lazyload = 1, window.lazyLoadOptions = {
    elements_selector: ".lazy",
    callback_loaded: function (t) {
        var e;
        try {
            e = new CustomEvent("w3tc_lazyload_loaded", {
                detail: {
                    e: t
                }
            })
        } catch (a) {
            (e = document.createEvent("CustomEvent")).initCustomEvent("w3tc_lazyload_loaded", !1, !1, {
                e: t
            })
        }
        window.dispatchEvent(e)
    }
}
