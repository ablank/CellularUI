/////
cellular.jTabs = function(opts) {
    var o = jQuery.extend({
        "active": 0
    }, opts);

    var fn = {};

    fn.showContent = function(li) {
        //Content
        var c = li.find('.content');
        //Display
        var pan = li.parent().find('.panel-content');

        li.activate();
        pan.fadeOut('normal', function() {
            jQuery(this).html(c.html())
                .fadeIn('normal');
        });
    };

    return this.each(function() {

        var $obj = jQuery(this);
        var tab = $obj.find('> li');

         $obj.addClass(cellular.opts.cclass)
            .append('<div class="' + cellular.opts.cclass + ' panel" />');
            $obj.find('.panel').append('<div class="panel-content" />');

        //Add classes/functions to each panel
        tab.addClass('tab')
            .each(function() {
                var li = jQuery(this);
                var con = li.children();

                li.kidWrap();
                //Set 1st child as title
                li.children().eq(0).addClass('title')
                    .click(function(e) {
                        e.preventDefault();
                        fn.showContent(li);
                    });
                //Set 2nd child as content
                li.children().eq(1).addClass('content')
                    .hide();
            });

        //Set default content
        fn.showContent(tab.eq([o.active]));
    });
};
