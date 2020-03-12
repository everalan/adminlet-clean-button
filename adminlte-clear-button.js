(function ($){
    "use strict";

    var Plugin = function(elem, opts) {
        this.elem = $(elem);
        this.input = $(elem).find('input');
        this.button = $('<i class="fas fa-times-circle"></i>').appendTo(elem)

        //适配select2, select 在elem的前边
        if(this.elem.hasClass('select2-container')) {
            this.input = this.elem.prev();
        }

        this.opts = $.extend({}, this.opts, opts);
        this.initEvent();
    }

    $.extend(Plugin.prototype, {
        opts: {
            focusOnClear: true,
        },
        elem: null,
        input: null,
        button: null,

        show: function(){
            this.button.addClass('clearbutton-show');
        },
        hide: function(){
            this.button.removeClass('clearbutton-show');
        },
        check: function(){
            if(this.input.val() === '' || this.input.val() === null) {
                this.hide();
            }else{
                this.show();
            }
        },
        clear: function(){
            this.input.val('');
            this.input.trigger('change');
            if(this.opts.focusOnClear) {
                this.input.focus();
            }
        },

        initEvent: function(){
            var self = this;
            this.input.on('input', function(){
                self.check();
            })
            this.input.on('change', function(){
                self.check();
            });
            this.button.on('click', function(){
                self.clear();
            });
            self.check();
        },
    });

    $.fn.clearbutton = function(opts) {
        return this.each(function(){
            var options = $.extend({}, opts);
            if(this.hasAttribute('data-do-not-focus')) {
                options.focusOnClear = false;
            }
            this.clearbutton = new Plugin(this, options)
        })
    }

    $(function(){
        $('[data-toggle=clearbutton]').clearbutton();
    });

})(jQuery);
