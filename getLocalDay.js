function getLocalDay(date) {
	var days = [7,1,2,3,4,5,6]
    return days[date.getDay()];
}
var date = new Date(2012, 0, 3);
console.log(getLocalDay(date));