(function($) {
    $(function() {


        $('.jcarousel').jcarousel().jcarouselAutoscroll({
          interval: 3000,
          target: '+=1',
          autostart: true
        });

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();



            $('input, select').styler();
            $('#switch-1, #switch-2, #switch-3, #switch-4, #switch-5, #switch-6').styler('destroy');







            $('.topMenu ul li').hover(function() {
                // $(this).addClass('active');
                $(this).stop(true,true).animate({backgroundColor: '#b1af89'}, 300).addClass('active');
                $(this).find('a:first').stop(true,true).animate({color: 'white'}, 100);

                $(this).find('ul:first').stop(true,true).slideDown('slow');
              }, function() {
                $(this).find('ul:first').slideUp('fast');
                // $(this).removeClass('active');
                $(this).stop(true,true).animate({backgroundColor: '#e6e5d3'}, 300).removeClass('active');
                $(this).find('a').stop(true,true).animate({color: '#71643e'}, 100);
              });


    });




})(jQuery);
