$(".cart-open").on("click", function () {
  $(".cart").addClass("show");
  const offer = localStorage.getItem("currentOffer");
  if (offer) {
    $("#formContact").removeClass("no-display");
    $(".empty-cart").addClass("no-display");
    $(".empty-cart").removeClass("show");
    const offerParsed = JSON.parse(offer);
    $(".cart-plan").html("Вы выбрали план: " + offerParsed.heading);
  } else {
    $("#formContact").addClass("no-display");
    $(".empty-cart").addClass("show");
    $(".empty-cart").removeClass("no-display");
  }
});

$(".close-cart").on("click", function () {
  $(".cart").removeClass("show");
});
