"use strict";

$(function () {
  var show_menu = false; //adaptive menu animation

  $("#menu-button").click(function () {
    $(this).toggleClass("active");

    if (show_menu == false) {
      $("#menu-adaptive").slideDown(250);
      show_menu = true;
    } else if (show_menu == true) {
      $("#menu-adaptive").slideUp(250);
      show_menu = false;
    }
  }); //funciton for scroling to blocks

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    var $this = $(this),
        blockId = $this.data("scroll"),
        blockOffset = $(blockId).offset().top;
    $("html, body").animate({
      scrollTop: blockOffset - 80
    }, 500);
  });
});