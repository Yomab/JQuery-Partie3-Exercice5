$(function() {

var heigthScreen = $(window).height();
var widhtScreen = $(window).width();

$('#move').keydown(function(x) {
  var posSquare1 = $('#square').offset().left;
  var posSquare2 = $('#square').offset().top;
  switch (x.which) {
    case 37:
      if (posSquare1 <= 0) {
        $('#square').css('margin-left', widhtScreen-50);
      } else {
        $('#square').css('margin-left', '-=10px');
      }
      break;
    case 39:
      if (posSquare1 >= (widhtScreen-50)) {
        $('#square').css('margin-left', '0');
      } else {
        $('#square').css('margin-left', '+=10px');
      }
      break;
    case 38:
      if (posSquare2 <= 0) {
        $('#square').css('margin-top', heigthScreen-50);
      } else {
        $('#square').css('margin-top', '-=10px');
      }
      break;
    case 40:
      if (posSquare2 >= (heigthScreen-50)) {
        $('#square').css('margin-top', '0');
      } else {
        $('#square').css('margin-top', '+=10px');
      }
      break;
  }
});
});
