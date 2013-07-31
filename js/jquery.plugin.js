(function($) {
// Namespace for plugin
    jQuery.fn.namespace = function(opts) {
        // Default options
        opts = $.extend({ 
            "speed": 500,
            "target": null
        }, opts);

        return this.each(function() {
            var $obj = $(this);
            var $kids = $($obj.children(), $obj);
            var $target = $(opts.target);

            $kids.each(function() {
                // Do stuff with obj.children
            });

        });
    };
// fin

// Call the plugin
    $('.DOM-obj').namespace({
        "speed": 200
    });

})(jQuery);