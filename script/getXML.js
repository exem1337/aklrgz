$(document).ready(function () { //если документ прогрузился
  $.ajax({
    type: "GET",
    url: "cart.xml",
    dataType: "text",
    success: function (xml) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xml, "text/xml"); //из string в xml
      var json = xmlToJson(xmlDoc); //конвертируем в json объект
      const offers = json.Offers.Offer;
      for (var i = 0; i < offers.length; i++) {
        const offer = offers[i]; //забираем новый оффер
        const offerContainer = document.createElement("div");
        offerContainer.classList.add("offer");
        offerContainer.classList.add("small-shadow");

        const offerHeading = document.createElement("div");
        offerHeading.classList.add("offer-heading");
        offerHeading.innerHTML = offer.Heading;

        const offerText = document.createElement("div");
        offerText.classList.add("offer-text");
        offerText.innerHTML = offer.Text;

        const button = document.createElement("button");
        button.classList.add("addToCard");
        button.classList.add("shadow");
        button.innerHTML = "купить";

        offerContainer.appendChild(offerHeading);
        offerContainer.appendChild(offerText);
        offerContainer.appendChild(button);

        const place = document.querySelector(".offers-container");
        place.appendChild(offerContainer);
      }
    },
  });
});



function xmlToJson(xml) {
  // Create the return object
  var obj = {};

  if (xml.nodeType == 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) {
    // text
    obj = xml.nodeValue;
  }

  // do children
  // If all text nodes inside, get concatenated text from them.
  var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
    return node.nodeType === 3;
  });
  if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
    obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
      return text + node.nodeValue;
    }, "");
  } else if (xml.hasChildNodes()) {
    for (var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof obj[nodeName] == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}
