function getDateAgo(date,days) {
  var newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate.getDate();
}

var date = new Date(2015,0,2);
console.log(getDateAgo(date, 1));