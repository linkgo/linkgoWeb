$(document).ready(function() {
  $('.ui.dropdown')
    .dropdown();

  $('.masthead .information')
    .transition('scale in', 1000);

  var waypoint = new Waypoint({
    element: $('.animBoingInUp'),
    handler: function(direction) {
      if(direction == 'down') {
        console.log("add");
        $('.animBoingInUp').addClass('magictime boingInUp');
      } else if (direction == 'up') {
        console.log("remove");
        $('.animBoingInUp').removeClass('magictime boingInUp');
      }
    },
    offset: 'bottom-in-view'
  });

});
