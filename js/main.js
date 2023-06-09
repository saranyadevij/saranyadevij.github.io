$(document).ready(function () {
 // change active menu in navbar
 $("a").click(function () {
  $("a").removeClass("active");
  $(this).addClass("active");
 });

 var $grid1 = $(".grid1").isotope({});

 $(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $grid1.isotope({ filter: filterValue });
 });

 $(".test-popup-link").magnificPopup({
  type: "image",
  gallery: { enabled: true },
 });

 // sticky Nav Menu
 let nav_offset_top = $(".header_area").height() + 30;

 function navbarFixed() {
  if ($(".header_area").length) {
   $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= nav_offset_top) {
     $(".header_area .main-menu").addClass("navbar_fixed");
    } else {
     $(".header_area .main-menu").removeClass("navbar_fixed");
    }
   });
  }
 }
 navbarFixed();
});

$(document).on("click", function () {
 $(".collapse").collapse("hide");
});

function sendMail() {
 var params = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  subject: document.getElementById("subject").value,
  message: document.getElementById("message").value,
 };

 const serviceID = "service_063i9qd";
 const templateID = "template_7ozfa8h";
 emailjs
  .send(serviceID, templateID, params)
  .then((res) => {
   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("subject").value = "";
   document.getElementById("message").value = "";
   console.log(res);
   alert("Your message sent successfully");
  })
  .catch((err) => console.log(err));
}
