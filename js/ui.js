(function(jQuery) {

    var cellular = {};
/////
    cellular.opts = {
        "cclass": "ui",
        "wrapper": '<div />'
    };
/////
    cellular.activate = function() {
        return this.each(function() {
            var $t = jQuery(this);
            if ($t.hasClass('active')) {
                return;
            } else {
                $t.addClass('active')
                        .siblings().removeClass('active');
            }
        });
    };
/////
    cellular.deactivate = function() {
        return this.each(function() {
            var $t = jQuery(this);
            if ($t.hasClass('active')) {
                $t.removeClass('active');
            }
        });
    };
/////
    cellular.minimenu = function() {
        var $obj = jQuery(this);
        var li = $obj.children('li');

        li.hide();
        $obj.click(function() {
            if ((li.css('display')) === 'none') {
                li.show();
            } else {
                li.hide();
            }
        });
    };
/////
    cellular.jqMenu = function(opts) {
        var o = jQuery.extend({
            "breakpoint": 650 // Window breakpoint trigger 
        }, opts);
        var fn = {};
        fn.mediaQuery = function(menu) {
            var li = menu.children();
            if (window.innerWidth <= o.breakpoint) {
                li.hide();
                if (menu.hasClass('mini')) {
                    return;
                } else {
                    menu.addClass('mini');
                }

                menu.click(function() {
                    if ((li.css('display')) === 'none') {
                        li.show();
                    } else {
                        li.hide();
                    }
                });
            } else {
                menu.removeClass('mini');
                li.show();
            }
        };
        return this.each(function() {
            var $obj = jQuery(this);
            $obj.addClass(cellular.opts.cclass);
            fn.mediaQuery($obj);
            jQuery(window).resize(function() {
                fn.mediaQuery($obj);
            });
        });
    };
/////
    cellular.jqFormal = function(opts) {
        var o = jQuery.extend({
            "inputs": [
                'input[type="text"]',
                'input[type="email"]',
                'input[type="password"]',
                'textarea'
            ],
        }, opts);
        return this.each(function() {
            var $obj = jQuery(this);
            var inputs = o.inputs.join(',');
            // get/set value of inputs
            $(inputs).each(function() {
                var $t = jQuery(this);
                var $v = $t.val();
                $t.live('focus', function() {
// clear the default value of an input on focus
                    if ($t.val() === $v) {
                        $t.val("");
                    }
                }).live('blur', function() {
// reset to default value if no changes were made
                    if ($t.val() === "") {
                        $t.val($v);
                    }
                });
            });
        });
    };
/////
    cellular.jqTabs = function(opts) {
        var o = jQuery.extend({
            "active": 0
        }, opts);
        var fn = {};
        fn.style = function($obj) {
//Add element to display content
            $obj.addClass(cellular.opts.cclass)
                    .append('<div class="panel" />');
        };
        fn.showContent = function(li) {
//Content
            var c = li.children().eq(1);
            //Display
            var d = li.parent().find('.panel');
            li.activate();
            d.html(c.html());
        };
        return this.each(function() {
            var $obj = jQuery(this);
            var tab = $obj.find('> *');
            fn.style($obj);
            fn.showContent(tab.eq([o.active]));
            //Add classes/functions to each panel
            tab.addClass('tab')
                    .each(function() {
                var li = jQuery(this);
                var con = li.children();
                //Set 1st child as title                    
                con.eq(0).addClass('title')
                        .click(function() {
                    fn.showContent(li);
                });
                //Set 2nd child as content                    
                con.eq(1).addClass('content')
                        .hide();
            });
        });
    };
/////
    cellular.jqAccordion = function(opts) {
        var o = jQuery.extend({
            "active": 0,
            "duration": 500,
            "easing": "swing",
            "single": true,
        }, opts);
        var fn = {};
        fn.style = function($obj) {
            $obj.addClass(cellular.opts.cclass)
                    .find('li').each(function() {
                var $t = jQuery(this);
                $t.children().eq(0).addClass('title');
                $t.children().eq(1).addClass('panel');
            });
        };
        fn.showContent = function(li) {
            li.activate()
                    .children().eq(1).slideDown(o.duration, o.easing);
            if (o.single === true) {
                li.siblings().children().eq(1).slideUp(o.duration, o.easing);
            }
        };
        return this.each(function() {
            var $obj = jQuery(this);
            var li = $obj.find('li');
            fn.style($obj);
            //Set default content
            fn.showContent($obj.children().eq(o.active));
            //Add classes/functions to each panel
            li.each(function() {
                var $t = jQuery(this);
                $t.click(function() {
                    fn.showContent($t);
                });
            });
        });
    };
/////
    cellular.jqScrolli = function(opts) {
        o = $.extend({
            "active": null, // Index value of initial content to display
            "speed": 500, // Duration of cycle
            "pause": 3000// Time to pause between cycles
        }, opts);
        /*
         var fn = {};
         fn.style = function(){};
         */
        return this.each(function() {
            var $obj = jQuery(this);
            var $i = $obj.find(jQuery($obj.children()));
            var active = o.active ? o.active : $i[0];
            $i.each(function() {
                jQuery(this).hide();
            });
            jQuery(active).fadeIn(o.speed, function() {
                var $t = jQuery(this);
                var next = $t.next();
                if (next.length === 0) {
                    next = $i[0];
                }
                $t.delay(o.pause).fadeOut(o.speed, function() {
                    $obj.jqScrolli({"active": next});
                });
            });
        });
    };
/////
    cellular.jqBlocklink = function(opts) {
        var o = jQuery.extend({
            cclass: "blocklink-wrap"
        }, opts);
        return this.each(function() {
            var $obj = jQuery(this);
            var l = $obj.find('a').eq(0).attr('href');
            var bl = jQuery('<a href="' + l + '" class="' + cellular.opts.cclass + ' ' + o.cclass + '" />');
            $obj.wrap(bl);
            bl.hover(function() {
                bl.activate();
            }, function() {
                bl.deactivate();
            });
        });
    };
/////
    cellular.jqEqualHeight = function(opts) {
        var o = jQuery.extend({
            "height": true,
        }, opts);
        return this.each(function() {
            var $obj = jQuery(this);
            var kids = $obj.find('>*');
            var kheight = 0;
            
            kids.each(function(){
                var $k = jQuery(this);
                var kh = $k.height();
                
                if(kh > kheight){
                    kheight = kh;
                }
            });
                kids.css({"height": kheight});
        });
    };
/////
    cellular.jqCarousel = function(opts) {
        var o = jQuery.extend({
            active: 1,
            duration: 500,
            easing: "swing"

        }, opts);
        var fn = {};
        fn.style = function($obj) {
            var btn = '<div class="ui" />';
            $obj.addClass(cellular.opts.cclass)
                    .css({
                "overflow": "hidden"
            })
                    .prepend(jQuery(cellular.opts.wrapper).addClass(cellular.opts.cclass + ' back').text('Back'))
                    .append(jQuery(cellular.opts.wrapper).addClass(cellular.opts.cclass + ' next').text('Next'))
                    .find('li').hide();
        };
        fn.find = function(li) {

        };
        fn.showContent = function($obj, target) {
            var li = jQuery($obj).find('li');
            var $t = li.eq(target);
            var $i = $obj.find(jQuery($obj.children()));
            li.hide();
            $t.activate().show();
            //console.log('showContent: '+$t.html());
        };
        return this.each(function() {
            var $obj = jQuery(this);
            var active = $($obj.find('.active'));
            var target = {};
            target.prev = function($obj) {
                var i = 0;
                var li = $obj.find('li');
                for (i; i < li.length; i += 1) {
                    i = active[i];
                }
                return i;
                console.log(li.length);
            };
            target.next = function() {
                if (active.next() !== 0) {
                    return +1;
                }
                else {
                    return 0;
                }
            };
            fn.style($obj);
            fn.showContent($obj, o.active);
            $obj.find('.back').click(function() {
                fn.showContent($obj, target.prev($obj));
                console.log('prev: ' + target.prev($obj));
            });
            $obj.find('.next').click(function() {
                fn.showContent($obj, target.next($obj));
                console.log('next: ' + target.next($obj));
            });
        });
    };
    /*
     * 
     //move the last list item before the first item. The purpose of this is if the user clicks previous he will be able to see the last item.  
     $('#carousel_ul li:first').before($('#carousel_ul li:last'));  
     
     //when user clicks the image for sliding right  
     $('#right_scroll img').click(function(){  
     
     //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '  
     var item_width = $('#carousel_ul li').outerWidth() + 10;  
     
     //calculate the new left indent of the unordered list  
     var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;  
     
     //make the sliding effect using jquery's anumate function '  
     $('#carousel_ul').animate({'left' : left_indent},{queue:false, duration:500},function(){  
     
     //get the first list item and put it after the last list item (that's how the infinite effects is made) '  
     $('#carousel_ul li:last').after($('#carousel_ul li:first'));  
     
     //and get the left indent to the default -210px  
     $('#carousel_ul').css({'left' : '-210px'});  
     });  
     });  
     
     //when user clicks the image for sliding left  
     $('#left_scroll img').click(function(){  
     
     var item_width = $('#carousel_ul li').outerWidth() + 10;  
     
     // same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) 
     var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;  
     
     $('#carousel_ul').animate({'left' : left_indent},{queue:false, duration:500},function(){  
     
     // when sliding to left we are moving the last item before the first item 
     $('#carousel_ul li:first').before($('#carousel_ul li:last'));  
     
     // and again, when we make that change we are setting the left indent of our unordered list to the default -210px 
     $('#carousel_ul').css({'left' : '-210px'});  
     });  
     
     });  
     */
    cellular.jqSticky = function(opts) {
        o = $.extend({
            "sspeed": 500,
            "delay": 200,
            "mstyle": {}
        }, opts);

        var fn = {};

        fn.style = function($obj) {
            $obj.addClass(cellular.opts.cclass);
        };

        fn.update = function($obj, offset) {
            var scroll = $(window).scrollTop();

            if (scroll >= offset) {
                $obj.addClass("mini")
                        .css({
                    "position": "absolute",
                    "left": $obj.offset().left
                })
                        .stop().animate({
                    "top": scroll
                })
                        .minimenu();

            } else {
                $obj.removeClass("mini")
                        .css($obj.ostyle);
            }
        };

        return this.each(function() {
            var $obj = jQuery(this);
            var offset = $obj.offset().top;// - $obj.height();
            $obj.ostyle = {
                //"position": $obj.css("position"),
                "left": $obj.css("left"),
                "top": $obj.css("top"),
                "z-index": 99
            };

            fn.style($obj);
            fn.update($obj, offset);
            $(window).scroll(function() {
                fn.update($obj, offset);
            });
        });
    };
/////
    jQuery.fn.extend(cellular);
/////
})(jQuery);