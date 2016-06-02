
$(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('select').material_select();
    $('#textarea1').trigger('autoresize');
    $('a[href^="#"]').click(function (e) {

        // Prevent the jump and the #hash from appearing on the address bar
        e.preventDefault();
        // Scroll the window, stop any previous animation, stop on user manual scroll
        // Check https://github.com/flesler/jquery.scrollTo for more customizability
        $(window).stop(true).scrollTo(this.hash, { duration: 1000, interrupt: true });
    });
    function fx(o) {
        var $o = $(o);
        $o.html($o.text().replace(/([\S])/g, '<span>$1</span>'));
        $o.css('position', 'relative');
        $('span', $o).stop().css({
            position: 'relative',
            opacity: 0,
            fontSize: 84,
            top: function (i) { return Math.floor(Math.random() * 500) * ((i % 2) ? 1 : -1); },
            left: function (i) { return Math.floor(Math.random() * 500) * ((i % 2) ? 1 : -1); }

        }).animate({ opacity: 1, fontSize: 30, top: 0, left: 0 }, 1000);

    }

    $('#make').textillate({ in: { effect: 'bounceInLeft' } });
    $('#makeit').textillate({ in: { effect: 'fadeInDown' } });
    $('#makego').textillate({ in: { effect: 'bounceInRight' } });

    $('#insight').click(function () {

        $('.card').removeClass('hide');
        $('.card').show("fast", function () {
            // Animation complete.
        });
    });

    $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        ready: function () { }, // Callback for Modal open
        complete: function () {   } // Callback for Modal close
    }
    );
});