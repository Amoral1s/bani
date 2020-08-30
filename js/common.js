$(document).ready(function () {
  
  $('.catalog__wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true
  });
  $('.feed_wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true
  });
  $('.gallery__wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Плавный переход по якорям
  jQuery(".header__menu ul li a").click(function () {
    var elementClick = jQuery(this).attr("href");
    var destination = jQuery(elementClick).offset().top - 90;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
    jQuery('.header__menu').removeClass('header__menu__active');
    jQuery('.burger').removeClass('burger__active');
    return false;
  });
  

  jQuery(window).scroll(function(){
      
      if (jQuery(window).scrollTop() > 320 && jQuery(window).scrollTop() < 350) {
        $('iframe.video').attr('src', $('iframe.video').attr('data'));
        $('iframe.map').attr('src', $('iframe.map').attr('data'));
      }

      var sections = $('.navi');
      sections.each(function(i,el){
        var top  = $(el).offset().top - 120;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
      $('a[href="#'+id+'"]').addClass('active');

        }
      });
  }, {passive: true});

  $('.callback-toggle').on('click', function () { 
    $('.overlay').fadeIn(300);
    $('.callback').fadeIn(300);
  });
  $('.close').on('click', function () { 
    $('.overlay').fadeOut(300);
    $('.popup').fadeOut(300);
  });
  $('.overlay').on('click', function () { 
    $('.overlay').fadeOut(300);
    $('.popup').fadeOut(300);
  });

  const card = document.querySelectorAll('.catalog__card');

  card.forEach((elem) => {
    elem.addEventListener('click', function (event) { 
      let target = event.target;
      
      if (target.classList.contains('button')) {
        $('.overlay').fadeIn(300);
        $('.buy').fadeIn(300);
        $('.popup__type').text($(this).children('h3').text());
        $('.input-type').val($(this).children('h3').text());
      }
  
    });
  });

  if($(window).width() < 993) {
    $('.burger').on('click', function () { 
      $('.burger').toggleClass('burger__active')
      $('.header__menu').toggleClass('header__menu__active')
     });
     
  }

});