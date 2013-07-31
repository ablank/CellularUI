/*
 * formalize() 
 * clears the default value of an input on focus, 
 * resets to default value if no changes were made
 * validates form on submit
 */

(function($) {
// Namespace for plugin
    jQuery.fn.formalize = function(opts) {
        // Default options
        opts = $.extend({
            // required class for validation
            "required": '.required',
            // input types to remove default value on focus
            "ivalue": [
                'input[type="text"]',
                'input[type="email"]',
                'input[type="password"]',
                'textarea'
            ],
            // input types to validate
            "validate": {
                "text": {
                    "el": 'input[type="text"]',
                    "rule": "",
                    "val": true
                },
                "email": {
                    "el": 'input[type="email"]',
                    "rule": "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b",
                    "val": true
                },
                "url": {
                    "el": 'input[type="url"]',
                    "rule": "",
                    "val": true
                },
                "number": {
                    "el": 'input[type="number"]',
                    "rule": "",
                    "val": true
                },
                "phone": {
                    "el": 'input[type="tel"]',
                    "rule": "",
                    "val": true
                },
                "date": {
                    "el": 'input[type="date"]',
                    "rule": "",
                    "val": false
                },
                "textarea": {
                    "el": 'textarea',
                    "rule": "",
                    "val": true
                }
            },
            // validation rules
            "rules": {
                "text": regEx,
                "number": regEx,
                "minLength": ex,
                "maxLength": ex
            },
            "messages": {
                "invalid": "Invalid input type.",
                "required": "This field is required."
            }
        }, opts);

        return this.each(function() {
            var $obj = $(this);
            var inputs = opts.ivalue.join(',');

            // get/set value of inputs
            $(inputs).each(function() {
                var $t = $(this);
                var $v = $t.val();

                $t.bind('focus', function() {
                    // clear the default value of an input on focus
                    if ($t.val() === $v) {
                        $t.val("");
                    }
                }).bind('blur', function() {
                    // reset to default value if no changes were made
                    if ($t.val() === "") {
                        $t.val($v);
                    }
                });
            });

            // Validate form
            $obj.bind('submit', function(e) {
                e.preventDefault();
                //console.log('submitted');
                opts.required;

            });
        });
    };
// fin

// Call the plugin
    $('form').formalize();

})(jQuery);