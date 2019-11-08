//クリップボードにコピー
function copyClipBoad() {
  var copyText = document.getElementById("sentenceArea");
  copyText.select();
  document.execCommand("copy");
}