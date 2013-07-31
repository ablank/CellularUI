(function ($) {

        (function labelize(){
            var input = $('input[type="text"], input[type="email"], input[type="password"], textarea');
	
            input.each(function(){
                var $t = $(this);
                var $v = $t.val();
		
                $t.bind('focus', function(){
                    if($t.val() === $v){
                        $t.val("");
                    }
                }).bind('blur', function(){
                    if($t.val() === ""){
                        $t.val($v);
                    }
                });
            });
        })();


})(jQuery);