// block <pre> 2-array
// 0 1
// 1 - x
//JSON.stringify in pre
var block = document.getElementById("block");
var output = document.getElementById("output");
var size = 10;
var width = 225;
var height = 200;
var next = document.getElementById("next");
var list = [];
for (var i = 0; i < size; i++) {
  list[i] = new Array(size).fill(0);
}
showMatrix();
block.addEventListener("click", function(e) {
  let x = Math.floor(e.clientX / (width / size));
  let y = Math.floor(e.clientY / (height / size)) - 1;
  list[x][y] = list[x][y] === 0 ? 1 : 0;
  showMatrix();
});
next.addEventListener("click", function(e) {
  list = nextGen(list);
  showMatrix();
});
function showMatrix() {
  let str = "";
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      str += list[j][i] === 0 ? "  " : " X";
    }
    str += "<br>";
  }
  block.innerHTML = str;
  output.innerHTML = JSON.stringify(list);
}