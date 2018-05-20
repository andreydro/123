var coords = elem.getBoundingClientRect();

var coords1 = [coords.left, coords.top];
var coords2 = [coords.right, coords.bottom];

var coords3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

var coords4 = [
  coords.left + elem.clientLeft + elem.clientWidth,
  coords.top + elem.clientTop + elem.clientHeight
]