$(document).ready(function()
    {
        // Scroll the whole document
        $('#main').localScroll({
           target:'body'
        });
 
    });
 

$(document).ready(function() {
 
$('#verse_left a').click(function(){
  $.scrollTo( this.hash, 1500, { easing:'swing' });
  return false;
});

$(document).ready(function() {

  $('section').scroll(function() {
    var id = $(this).attr('id');
    var nav = $(this).find('nav');
    var inner = $(nav).find('.inner');
    var top = $(nav).offset().top;
    var topheight = $('header .right').css('padding-bottom');
    var parsedTopHeight = parseInt(topheight);
    if(top <= parsedTopHeight) {
      $(nav).addClass('stick');
    } else {
      $(nav).removeClass('stick');
    }
  });

  $('nav .inner').click(function(e) {
    e.stopPropagation();
    var nav = $(this).parents('nav');
    if($(nav).is('.show')) {
      $(nav).removeClass('show');
      $(this).attr('style','');
    }
    else if($(nav).is('.stick')) {
      var menuHeight = $(this).find('ul').outerHeight();
      var topheight = $('nav .top').css('height');
      var parsedTopHeight = parseInt(topheight);
      $(nav).addClass('show');
      $(this).css({'height':menuHeight+parsedTopHeight});
    }
  });

  $('html').click(function() {
    var nav = $('nav .inner').parents('nav');
    $(nav).removeClass('show');
    $('nav .inner').attr('style','');
  });

  $('nav ul li a').click(function() {
    var section = $(this).parents('section');
    var nav = $(section).find('nav');
    var inner = $(nav).find('.inner');
    $(nav).removeClass('show');
    $(inner).attr('style','');
    var target = $(this.hash);
    var topheight = $('header .right').css('padding-bottom');
    var parsedTopHeight = parseInt(topheight);
    if (target.length) {
      var top = $(section).scrollTop() + $(target).offset().top - parsedTopHeight;
      $(section).animate({
        scrollTop: top
      }, 1000);
      return false;
    }
  });




});
