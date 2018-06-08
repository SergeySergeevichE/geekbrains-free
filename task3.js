function declineOfNumber (number, str1, str2, str3) {
	if ((number % 100 > 4) && (number % 100 < 20)) return str3;
	if (number % 10 == 1) return str1;
	if ((number % 10 > 1) && (number % 10 < 5)) return str2;
	return str3;
}

function addTimes(firstTime, secondTime) {
	var sumTime = parseInt(firstTime) + parseInt(secondTime);
	var hours = Math.floor(sumTime / 3600);
	var minutes = Math.floor((sumTime - hours*3600) / 60);
	var seconds = sumTime % 60;
	var time = {
		hours: hours,
		minutes: minutes,
		seconds: seconds,
		textHours: declineOfNumber(hours,' час',' часа',' часов'),
		textMinutes: declineOfNumber(minutes, ' минута',' минуты',' минут'),
		textSeconds: declineOfNumber(seconds ,' секунда',' секунды',' секунд'),
	};
	if ((time.hours === 0) && (time.minutes === 0)) return '' + time.seconds + time.textSeconds;
	if ((time.hours === 0) && (time.minutes != 0)) return  time.minutes + time.textMinutes +' ' + time.seconds + time.textSeconds;
	return time.hours + time.textHours + ' ' + time.minutes + time.textMinutes +' ' + time.seconds + time.textSeconds;
}

var a = process.argv[2];
var b = process.argv[3];

console.log(addTimes(a,b));