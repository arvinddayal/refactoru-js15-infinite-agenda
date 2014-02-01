$(function() {
//Global Functions - Retrieve/create date
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

	//Creates new Event-Container with info from form
	var newEvent = function() {
		var newTimeInput = $('#timebox').val();
		var newEventInput = $('#eventbox').val();
		var newTime = $('<li class="time">');
		var newEvent = $('<li class="event">');
		var newDelete = $('<li class="delete">');
		var newDeleteButton = $('<button type="button" class="button delete" id="delete">Delete Event</>');
		var newDeleteLi = newDelete.append(newDeleteButton);
		var newEventOl = $('<ol class="new-event">').append(newTime).append(newEvent).append(newDeleteLi);
		$(newTime).text(newTimeInput);
		$(newEvent).text(newEventInput);
		return newEventOl;
	};


//Global Functions - Make visible changes to calendar
	//Pushes date into .date h2
	$('#date-header').text(makeDate);

	//Click on date toggles display of events
	$(document).on('click', '#date-header', function() {
		$(this).next('.event-container').toggle('display');
	});

	//delete button deletes time/event
	$(document).on('click', '#delete', function() {
		$(this).parent().parent().remove();
	});

	//shows input form
	$(document).on('click', "#show-form", function() {
		$(this).parent().next('.submit-form').toggle('display');
	});

	//Creates new event from form, clears form, hides form
	$(document).on('click', '#add-event', function(e) {
		e.preventDefault();
		$(this).parent().parent().prev().prepend(newEvent);
		$(this).parent().parent('.submit-form').toggle('display');
		$(this).prev('input').val("");
		$(this).prev().prev('input').val("");
	});
















});