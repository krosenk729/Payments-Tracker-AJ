angular.module('paymentTracker')
.filter('getCostinTime', function(){
	return function(cost, date ,freq){
		const FUTUREDATE = '2020-01-01';		
		var numEvents = () => {
			switch(freq){
				case 'Hourly': 
				return moment(FUTUREDATE).diff(moment(date), 'hours') + 1;
				break;
				case'Daily':
				return moment(FUTUREDATE).diff(moment(date), 'days') + 1;
				break;
				case 'Weekly':
				return moment(FUTUREDATE).diff(moment(date), 'weeks') + 1;
				break;
				case 'Monthly':
				return moment(FUTUREDATE).diff(moment(date), 'months') + 1;
				break;
				case 'Yearly':
				return moment(FUTUREDATE).diff(moment(date), 'years') + 1;
				break;
			}
		}
		return `$${ cost*numEvents() } by ${ moment(FUTUREDATE).year() } after ${numEvents()} payments`;
	}
});

angular.module('paymentTracker')
.filter('getCountdown', function(){
	return function(date, freq, hour, ampm){
		let newhour = ampm === 'PM' ? hour + 12 : hour;
		let countdownVal = () => {
			switch(freq){
				case 'Hourly': 
				return moment(date).hour(newhour).diff(moment(), 'minutes') + ' minutes';
				break;
				case'Daily':
				return moment(date).hour(newhour).diff(moment(), 'hours') + ' hours';
				break;
				case 'Weekly':
				case 'Monthly':
				case 'Yearly':
				return moment(date).hour(newhour).diff(moment(), 'days') + ' days';
				break;
			}
		}

		return countdownVal(); //setInterval(countdownVal(), 60000);
	}
});