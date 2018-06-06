function howManyDaysNY(day, month, year) {
	var m = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
	var inputDate = new Date(year, m.indexOf(month), +day+1);
	var newYearDate = new Date(+year+1,0,1);
	return (newYearDate - inputDate)/(1000*3600*24);
}

var day = process.argv[2];
var month = process.argv[3]
var year = process.argv[4]

console.log(howManyDaysNY(day,month,year));