// edit, delete, change color of border

class Task {
  constructor(content, container) {
    this.content = content;
    this.newElem = document.createElement('div');
    this.container = container;
    this.colors = ['red', 'green', 'blue'];
    this.init();
  }
  init() {
    this.newElem.style.cssPosition = 'absolute';
    this.newElem.setAttribute('class', 'task');
    this.newElem.classList.add('blue');
    this.newElem.addEventListener('change', (e)=> {
      if(e.target.tagName == 'SELECT') {
        e.target.parentElement.classList.remove(...this.colors);
        e.target.parentElement.classList.add(e.target.value);
        e.target.parentElement.querySelector('header').style.backgroundColor = e.target.value;
      }
    });
    this.newElem.addEventListener('click', (e) => {
      e.preventDefault();
      if(e.target.tagName == 'BUTTON') {
        this.container.removeChild(this.newElem);
      }
    });
    var flag;
    this.newElem.addEventListener('mousedown', e => {
    if(e.target.tagName == 'HEADER') {
      flag = true;
        e.target.addEventListener('mousemove', ev => {
          if(flag) {
            console.log(1);
          }
          return;
        });
        this.newElem.addEventListener('mouseup', ev => {
          flag = false;
          return;
        });
      }
    });
    
    
//    var ball = document.getElementById('ball');

// ball.onmousedown = function(e) { // 1. отследить нажатие

//   // подготовить к перемещению
//   // 2. разместить на том же месте, но в абсолютных координатах
//   ball.style.position = 'absolute';
//   moveAt(e);
//   // переместим в body, чтобы мяч был точно не внутри position:relative
//   document.body.appendChild(ball);

//   ball.style.zIndex = 1000; // показывать мяч над другими элементами

//   // передвинуть мяч под координаты курсора
//   // и сдвинуть на половину ширины/высоты для центрирования
//   function moveAt(e) {
//     ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
//     ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
//   }

//   // 3, перемещать по экрану
//   document.onmousemove = function(e) {
//     moveAt(e);
//   }

//   // 4. отследить окончание переноса
//   ball.onmouseup = function() {
//     document.onmousemove = null;
//     ball.onmouseup = null;
//   }
// }
// 
//function moveAt(e) {
//  this.newElem.style.left = e.pageX - this.newElem.offsetWidth / 2 + 'px';
//  this.newElem.style.top = e.pageY - this.newElem.offsetWidth / 2 + 'px';  
//  }
//
//
//










    this.render();
  }
  render(container) {
    var header = document.createElement('header');
    
    var text = document.createElement('p');
    text.setAttribute('contenteditable', true);
    text.style.display = 'inline-block';
    var select = document.createElement('select');
    select.style.cssFloat = 'right';
    
    for(var i = 0; i < 3; i++) {
      var option = document.createElement('option');
      option.textContent = this.colors[i];
      option.setAttribute('data-color', this.colors[i]);
      select.appendChild(option);
    }
    
    var button = document.createElement('button');
    button.setAttribute('id', 'delete');
    button.style.cssFloat = 'right';
    button.textContent = 'Delete';
    
    text.textContent = this.content;
    this.newElem.appendChild(header);
    this.newElem.appendChild(text);
    this.newElem.appendChild(select);
    this.newElem.appendChild(button);
    this.container.appendChild(this.newElem);// проверка на DOM-Element cont
  }
}

var button = document.getElementById('button');
var input = document.getElementById('input');
button.addEventListener('click', function() {
  var task = new Task(input.value, document.getElementById('app'));
  input.value = '';
});



