var data;

$(".addToCard").on("click", function () {
  console.log("object");
  var parent_id = $(this).parent();
  parent_id.each(function () {
    var $this = $(this);
    data = {
      heading: $this.find(".offer-heading").text(),
      text: $this.find(".offer-text").text(),
    };
  });
  localStorage.setItem("currentOffer", JSON.stringify(data));
});
