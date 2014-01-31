$(function() {





	//Gets Date (Weekday, Month Date, Year)
	var makeDate = function() {
		var newD = new Date ();
		var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var curDay = daysOfWeek[newD.getDay()];
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var curMonth = months[newD.getMonth()];
		var curNumDay = newD.getDate();
		var curYear = newD.getFullYear();
		var displayDate = (curDay + " " + curMonth + " " + curNumDay + ", " + curYear);
		return displayDate;
	};

	//Pushes date into .date h2
	$('h2').text(makeDate);
	//Click on date toggles display of events
	$(document).on('click', '.date', function() {
		$(this).next('.event-container').toggle('display');
	});




















});