$(function(){


$('.bar').click(function(){
  $('.menu').toggle();
  $('.bar').css('display','none');
  $('.cross').css('display','block');
});

$('.cross').click(function(){
  $('.menu').toggle();
  $('.cross').css('display','none');
  $('.bar').css('display','block');
});



// ページ内移動
$('header a').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;
  $('html, body').animate({
    'scrollTop':position
  },500);
});



// スクロール動き
  $(window).scroll(function (){
      $('.fadeIn').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('scrollin');
          }
      });
  });



});
