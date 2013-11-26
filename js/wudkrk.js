(function() {

    var toggleBtn = $('button.navbar-toggle');

    $('.main-navigation').click(function(ev) {

        toggleBtn.click();

    });

    // show more

   $('#program div.description').each(function() {

       var $d = $(this);
       var $p = $d.prev('p');

       var $b = $('<button>').addClass('showMore').addClass('pull-right').text('zobacz szczegóły').click(function() {

           $(this).toggleClass('active');

           if ( $(this).hasClass('active') )
               $(this).text('ukryj szczegóły');
           else 
               $(this).text('zobacz szczegóły');

           $d.fadeToggle();
       });

       $p.append($b);

   });

})();

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
