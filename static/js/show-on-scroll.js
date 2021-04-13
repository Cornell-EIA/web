$(window).on("load", function () {
  function fade() {
    $(".fade").each(function () {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();

      /* If the object is completely visible in the window, fade it in */
      if (objectBottom - 300 < windowBottom) {
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(300, 1);
        }
      } else {
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(300, 0);
        }
      }
    });
  }
  fade(); //Fade in completely visible elements during page-load
  $(window).scroll(function () {
    fade();
  }); //Fade in elements during scroll
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown) {
      myDropdown.classList.remove("show");
    }
  }
};
