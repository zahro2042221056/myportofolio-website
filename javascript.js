//menu
var tombolMenu = $('.tombol-menu');
var menu = $('nav .menu ul');

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 880) {
    klikMenu();
  }
});

//check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 879) {
    menu.css('display', 'flex');
    //display:block
  } else {
    menu.css('display', 'none');
  }
  klikMenu();
});

//efek scroll
$(document).ready(function () {
  var scrol_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $('nav').addClass('aquamarine');
      $('nav img.hitam').show();
      $('nav img.blue').hide();
    } else {
      $('nav').removeClass('aquamarine');
      $('nav img.hitam').hide();
      $('nav img.blue').show();
    }
  });
});
