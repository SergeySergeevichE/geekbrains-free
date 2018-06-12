function declOfNum(number, str) {
  return str[(number % 10 === 1 && number % 100 !== 11) ? 0 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) ? 1 : 2]
}

function addTimes(firstTime, secondTime) {
	var sumTime = parseInt(firstTime) + parseInt(secondTime);
	var hours = Math.floor(sumTime / 3600);
	var minutes = Math.floor((sumTime - hours*3600) / 60);
	var seconds = sumTime % 60;
	textHours = hours + declOfNum(hours, [' час',' часа',' часов']);
	textMinutes = minutes + declOfNum(minutes, [' минута',' минуты',' минут']);
	textSeconds = seconds + declOfNum(seconds ,[' секунда',' секунды',' секунд']);
	return (hours === 0 && minutes === 0) ? textSeconds : (hours === 0 && minutes !== 0) ? (textMinutes + ' ' + textSeconds) : (textHours + ' ' + textMinutes + ' ' + textSeconds);
}

var a = process.argv[2];
var b = process.argv[3];

console.log(addTimes(a,b));