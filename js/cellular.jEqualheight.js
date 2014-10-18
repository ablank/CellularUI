cellular.jEqualheight = function(opts) {
    /*
    var array = [267, 306, 108];
var largest = Math.max.apply(Math, array); // 306
*/
    var o = jQuery.extend({
        //"height": true
    }, opts);
    return this.each(function() {
        var $obj = jQuery(this);
        var kids = $obj.find('>*');
        var gheight = Math.max.apply(Math, kids);

        kids.each(function() {
            var $k = jQuery(this);
            var kh = $k.height();

            if (kh < gheight) {
                $k.height(gheight);
            }
        });
        kids.css({
            "height": kheight
        });
    });
};