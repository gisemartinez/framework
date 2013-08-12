steal.config(
       {
               map:
               {
                       "*":
                       {
                               'jquery/jquery.js' : "jquery"
                       ,        "can/util/util.js": "can/util/jquery/jquery.js"
                       }
               }
       ,        paths:
               {
                       "jquery": "can/lib/jquery.1.8.3.js"
               ,        "mootools/mootools.js" : "can/lib/mootools-core-1.4.5.js"
               ,        "dojo/dojo.js" : "can/util/dojo/dojo-1.8.1.js"
               ,        "yui/yui.js" : "can/lib/yui-3.7.3.js"
               ,        "zepto/zepto.js" : "can/lib/zepto.1.0rc1.js"
               // ,        "sigma/": "HAL-Client/sigma/"
               ,        "can/": "donejs/can/"
               // ,        "canui/": "HAL-Client/canui/"
               // ,        "jquery/": "HAL-Client/jquery/"
               // ,        "underscore/": "HAL-Client/underscore/"
               // ,        "bootstrap/": "HAL-Client/bootstrap/"
               // ,        "underscore.string/":"HAL-Client/underscore.string/"
               // ,        "font-awesome/":"HAL-Client/font-awesome/"
               // ,        "models/": "app/models/"
               // ,        "controls/": "app/controls/"
               // ,        "views/": "app/views/"
               // ,        "styles/": "app/styles/"
               // ,        "fixtures/": "app/fixtures/"
               ,        "pruebas/":"pruebas/"               }
       ,        shim:
               {
                       jquery:
                       {
                               exports: "jQuery"
                       }
               }
       ,        ext:
               {
                       js: "js"
               ,        css: "css"
               ,        less: "steal/less/less.js"
               ,        coffee: "steal/coffee/coffee.js"
               ,        ejs: "can/view/ejs/ejs.js"
               }
       }
)