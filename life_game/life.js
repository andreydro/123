function nextGen(field) {
  var livingNeighbours = 0;
  var neighbourArray;
  for(var i = 0; i < field.length; i++) {
      for(var j = 0; j <  field[i].length; j++) {
          neighbourArray = getNeighbours(i, j);
          neighbourArray.forEach(function(item) {
            if(field[item[0]] && field[item[1]]) {
              if(field[item[0]][item[1]] === '1' || field[item[0]][item[1]] === '-') {
                livingNeighbours ++;
              }
            }
          });
          if(field[i][j] === '1' && (livingNeighbours > 3  || livingNeighbours < 2)) {
            field[i][j] = '-';
          }
          if(field[i][j] === '0' && (livingNeighbours === 3)) {
            field[i][j] = '+';
          }
          livingNeighbours = 0;
      }
  }
  field.forEach(function(line) {console.log(line);});
  for(var i = 0; i < field.length; i++) {
    for(var j = 0; j <  field[i].length; j++) {
      if(field[i][j] === '-') {field[i][j] = '0';}
      if(field[i][j] === '+') {field[i][j] = '1';}
    }
  }
  return field;
}

function getNeighbours (i, j) {
  return [[i-1, j-1], [i-1, j], [i-1, j+1],[i, j-1], [i, j+1] ,[i+1, j-1], [i+1,j], [i+1, j+1]];
}