function camelize(str) {
  var array = str.split("-");

  for (var i =1; i < array.length; i++) {
  	array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return array.join("");
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");