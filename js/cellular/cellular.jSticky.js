/////
cellular.jSticky = function (opts) {
  o = jQuery.extend({
    "sspeed": 500,
    "delay": 200
  }, opts);

  var fn = {};

  fn.style = function ($obj) {
    $obj.addClass(cellular.opts.cclass);
  };

  fn.update = function ($obj, offset) {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= offset) {
      $obj.addClass("sticky");
    } else {
      $obj.removeClass("sticky");
    }
  };

  return this.each(function () {
    var $obj = jQuery(this);
    var offset = $obj.offset().top; // - $obj.height();


    fn.style($obj);
    $(window).throttle().scroll(function () {
      fn.update($obj, offset);
    });
  });
};