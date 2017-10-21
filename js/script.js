var menu = document.querySelector(".main-nav");
var link = document.querySelector(".choice__order");
var shops = document.querySelectorAll(".shop__busket");
var popup = document.querySelector(".modal-busket");
var close = document.querySelector(".form-size__send");
var overlay = document.querySelector(".modal-overlay");

if(menu) {
  menu.classList.remove("main-nav--nojs");
  menu.classList.add("main-nav--closed");
}
if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault( );
    popup.classList.add("modal-busket--show");
    overlay.classList.add("modal-overlay--show");
  });
}

close.addEventListener("click", function (evt) {
  evt.preventDefault( );
  popup.classList.remove("modal-busket--show");
  overlay.classList.remove("modal-overlay--show");
});

[].forEach.call(shops, function(shop) {
    shop.addEventListener("click", function (evt) {
    evt.preventDefault( );
    popup.classList.add("modal-busket--show");
    overlay.classList.add("modal-overlay--show");
    });
});

close.addEventListener("click", function (evt) {
  evt.preventDefault( );
  popup.classList.remove("modal-busket--show");
  overlay.classList.remove("modal-overlay--show");
});
