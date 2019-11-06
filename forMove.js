var rent = document.getElementById("btn1");
rent.addEventListener(
  "click",
  function() {
    //function createRadio( radioName, radioId, radioValue)
    createRadio("payment", "pay1", "phone");
    createRadio("payment", "pay2", "card");
    createRadio("payment", "pay3", "bank");
  },
  false
);
