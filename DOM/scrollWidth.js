var div = document.createElement('div');

div.style.overFlowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

div.style.visibility = 'hidden';

document.body.appendChild(div);
var scrollWidth = div.offsetWidth - div.clientWidth;
document.body.removeChild(div);

alert(scrollWidth);