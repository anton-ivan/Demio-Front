 var slider = false;
 $(window).load(function() {
     $('body').addClass('loaded');
     $(window).trigger('resize');
 })
 $(window).on('resize', function() {
     $('.custom-design').each(function(index, el) {
         firstHalf = $(el).find('.col-md-6').get(0);
         secondHalf = $(el).find('.col-md-6').get(1);
         if ($(window).width() > 768) {
             if ($(this).hasClass('left')) {
                 $(secondHalf).css('height', $(firstHalf).height());
             } else {
                 $(firstHalf).css('height', $(secondHalf).height());
             }
         } else {
             $(firstHalf).css('height', 'inherit');
             $(secondHalf).css('height', 'inherit');
         }
     });
 })
 $(function() {
     $('.tools [data-toggle=collapse]').on('click', function() {
         $('.tools [data-toggle=collapse]').removeClass('active');
         $(this).addClass('active');
         slider.goToSlide($(this).data('slide'));
     })
     if ($(window).width() > 768) {
         $('.tehnologies > div').each(function(index, el) {
             img = $(el).find('img').attr('src');
             $(el).find('img').remove();
             $(el).find('a').css({
                 'background-image': 'url(' + img + ')',
                 'height': $(this).find('a').width()
             });
         });
     }
     $(document).ready(function() {
         $(window).trigger('resize');
         slider = $('.bxslider').bxSlider({
             adaptiveHeight: true,
             mode: 'fade',
             controls: false,
             pager: false
         });
     });
 })
