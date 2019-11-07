function choice1() {
    createBtn("radio", "payment", "pay1", "phone");
    createBtn("radio", "payment", "pay2", "card");
    createBtn("radio", "payment", "pay3", "bank");
    createBr("target");
    createBtn("radio", "after", "afterY", "yes");
    createBtn("radio", "after", "afterN", "no");
    createBr("target");
    createBtn("checkbox", "send", "send", "send");
    createBr("target");
    createBtn("checkbox", "caution", "caution", "caution");
    createBr("target");
}

function choice2() {
    createCal();
    createBr("target");
    createTxtBox("text", "testt");
    createBr("target");
}