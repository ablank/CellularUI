(function(){
        var res = 'media_query_breakpoint';
        var css = "' . cellular_theme_path() . '/css/style-large.css";
        var winWidth = window.innerWidth;
        var style;
        
        function mq(res, css){
            
            if(winWidth >= res) {
                var obj=document.createElement("link");

                obj.setAttribute("href", css);
                obj.setAttribute("rel", "stylesheet");
                obj.setAttribute("type", "text/css");

                if(typeof obj!="undefined") {
                    style = "large";
                    document.getElementsByTagName("head")[0].appendChild(obj);
                }
            }
            
        }
        
        mq(res, css);
        
        window.onresize = function(){
                if(style !== "large" && winWidth >= res){
                    mq(res, css);
                }
        };
        
    })();