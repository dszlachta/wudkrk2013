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

   $('#program .toggle').click(function() {
       $(this).toggleClass('active');

       var v;

       if ( $(this).hasClass('active') )
           v = 'visible';
       else 
           v = 'hidden';

       $('#map-canvas').css({visibility: v});//.toggle();
   });

   // map
   var map;
   google.maps.visualRefresh = true;
   function initialize() {
       var center = new google.maps.LatLng(50.04985,19.946445);
       var mapOptions = {
           zoom: 16,
           center: center
       };
       map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
       var marker = new google.maps.Marker({
           position: center,
           map: map,
           title: 'Afterparty @ Stara Zajezdnia'
       });
   }

   google.maps.event.addDomListener(window, 'load', initialize);

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
