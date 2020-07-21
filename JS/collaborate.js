var $firstButton = $(".first"),
  $secondButton = $(".second"),
  $input = $("input"),
  $name = $(".name"),
  $email = $(".email"),
  $more = $(".more"),
  $yourname = $(".yourname"),
  $youremail = $(".youremail"),
  $reset = $(".reset"),
  $ctr = $(".container");
var count = 0;

$firstButton.on("click", function (e) {
  $(this)
    .text("Saving...")
    .delay(900)
    .queue(function () {
      $ctr
        .addClass("center slider-two-active")
        .removeClass("full slider-one-active");
      $email = $email.val();
      if ($email == "") {
        $youremail.html(
          "Our team will not be able to contact you beacuse no email was provided"
        );
      } else {
        $youremail.html("OUR TEAM WILL CONTACT YOU SHORTLY AT " + $email);
      }
    });
  e.preventDefault();
});

$secondButton.on("click", function (e) {
  $(this)
    .text("Saving...")
    .delay(900)
    .queue(function () {
      $ctr
        .addClass("full slider-three-active")
        .removeClass("center slider-two-active slider-one-active");
      $name = $name.val();
      if ($name == "") {
        $yourname.html("Anonymous!");
      } else {
        $yourname.html($name + "!");
      }
    });
  e.preventDefault();
});
