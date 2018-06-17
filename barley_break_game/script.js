// 1) create array (1-15 numbers), 1 is empty
// 2) render table
// 3) update table 
//  var win = [[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12],[13,14,15,"x"]]
// 100 step
// list = randon array 


function getReady() {
  var win = [[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12],[13,14,15,"x"]];
  var obj = {};
  win.forEach((inset, i) => {
    inset.forEach((elem, j) => {
      if(elem == 'x') {
        if(i - 1 >= minSize) {
          obj.top = i - 1;
        }
        if(i + 1 >= maxSize) {
          obj.bottom = i + 1;
        }
        if(j - 1 >= minSize) {
          obj.left = j - 1;
        }
        if(j + 1 <  maxSize) {
          obj.right = j + 1;
        }      
      }
    });
  });
  
  console.log(obj);
};

getReady();

var maxSize = 4;
var minSize = 0;

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers = numbers.sort(_ => Math.random() > 0.5);


var list = [];
for (var i = 0; i < maxSize; i++) {
  list[i] = [];
  for(var j = 0; j < maxSize; j++) {
    list[i][j] = numbers.splice(0,1)[0];
  }
}
list[3][3] = "x";


var app = document.getElementById('app');

function render() {
  app.innerHTML = '';
  for (var i = 0; i < maxSize; i++) {
    var tr = document.createElement('tr');
    for(var j = 0; j < maxSize; j++) {
      var td = document.createElement('td');
      td.classList.add('table__item');
      td.innerHTML = list[i][j];
      tr.appendChild(td);
    }
    app.appendChild(tr);
  }
}
render();


function getNeighbours(i, j) {
  return (i-1 >= minSize && list[i-1][j] == 'x') 
      || (i+1 <  maxSize && list[i+1][j] == 'x') 
      || (j-1 >= minSize && list[i][j-1] == 'x') 
      || (j+1 <  maxSize && list[i][j+1] == 'x')
}

function swipe(i,j) {
  for (var a = 0; a < maxSize; a++) {
    for(var b = 0; b < maxSize; b++) {
      if(list[a][b] == 'x') {
        list[a][b] = list[i][j]; 
      }
    }
  }
  list[i][j] = 'x';
  render();
  checkArray();
}

function checkArray() {
  var win = [[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12],[13,14,15,"x"]];
  getReady();
  if (isDeepEqual(win, list)) {
    alert('Win!');
    return;
  }
  console.log('Try!');
  return;
}

app.addEventListener("click", function(e) {
  if(e.target.tagName !== 'TD') {
    return;
  }

  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list[i].length; j++) {
      if(list[i][j] == e.target.innerHTML) {
        var neighbours = getNeighbours(i, j);
        if(neighbours) swipe(i, j);
        return;
      };
    }
  }
});

  function isDeepEqual(objA, objB) {
    if (objA == objB) {
        return true;
    }
    if (typeof objA !== typeof objB) {
        return false;
    }
    if (typeof objA === 'number' && typeof objB === 'number') {
        if (isNaN(objA) && isNaN(objB)) {
            return true;
        }
        return objA == objB;
    }

    if ((typeof objA === 'string' && typeof objB === 'string') || (Array.isArray(objA) && Array.isArray(objB))) {
        if (objA.length !== objB.length) {
            return false;
        }
        for (var i = 0; i < objB.length; i++) {
            if (objA[i] !== objB[i]) {
                return false;
            }
        }
    }
}