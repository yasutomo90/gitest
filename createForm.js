var Histry = [];
var flag = 0;

document.addEventListener("DOMContentLoaded", function () {
  var rent = document.getElementById("btn1");
  rent.addEventListener("click", function () {
    //function createRadio( radioName, radioId, radioValue)
    var flag = 1;
    var target = document.getElementById("target");
    target.innerHTML = "";

    createRadio("payment", "pay1", "phone");
    createRadio("payment", "pay2", "card");
    createRadio("payment", "pay3", "bank");

    createBr("target");

    createRadio("after", "afterY", "yes");
    createRadio("after", "afterN", "no");

    createBr("target");

    createRadio("send", "send", "send");

    createBr("target");

    createRadio("caution", "caution", "caution");

  });
},
  false
);
