$('header').click(function(){
  $(this).removeClass('slideDown').addClass('slideUp');
})

$('main').click(function(){
  $('header').removeClass('slideUp').addClass('slideDown');
})




// sample array
var arr = ['keep your cah dry today','Mark Walberg doesnt miss his weathah','F@#$ the Yankees',
           'dont forget your soxs','run like f@$%in Revere','shippin off to BOSTON!'];

function getRandom(){
  // get random number based on length of array
  var rand = Math.floor(Math.random() * arr.length);
  // display random value
  $('.display').html( arr[rand] );
}

// call function when page loads
getRandom();





/* -----------------------------------------------
   Function for retrieving the main weather info
   ----------------------------------------------- */

// Replace the lat/long below with the lat/long for your desired location.
// Get your city lat/long using https://www.latlong.net/
var latlong = '42.360081,-71.058884';

// Your unique API key. Place the long string of characters between the quotes.
var apikey = '6198cef41325a6c46c4efebc7ed8484e';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/'+ latlong)

// Display the weather content once it is loaded, not before.
.done(function(forecast) {
	// Your header section covers over the main weather info.
	// When the data is available, you will need to hide/remove this section
	// in order to see the main content. How you do this is up to you.
	
	// The most basic basic approach is to just hide the header (uncomment to use)
		
	// $('header').hide();
	
	// Other methods include animating the header away.
	// This can be done by adding a class name containing CSS animation
	// code to the header like this (uncomment to use)

	// $('header').addClass('anim');

	// This assumes you have written a class with the animation code
	// and named it .anim

	// Another way to remove the header is to provide a button and the event
	// to trigger what happens when the button is clicked (uncomment to use)

	// $('header').append('<a class="button" href="#">Click</a>');
	// $('header .button').click(function(){
	//   $('header').hide();
	// });

	// The following line calls a function to display
	// the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})

// Print the data object feturned from DarkSky for all the details
// DO NOT EDIT THIS LINE.
.always(function(forecast) {
	console.log(forecast);
});


/* -----------------------------------------------
   Function for displaying the main weather info
   ----------------------------------------------- */

// All of the data comes from the "forecast" object returned
// from the DarkSky API. Inspect this page in the browser
// for a full list of data that can be used using the methods below.

function displayData(forecast){

	// Target an element in your interface and display
	// dynamic weather information inside of it

	// All of the data you need is located in the "Console" tab
	// when you inspect th code in the browser
	// Click the arrow next to the "Object" to drill down into the data
	// You can reference these data points in your code using the following
	// method(s).

	// For example, if I have an element <div class="today"> in my main content area
	// I can add data from the "Daily" array like this

	// $('.day01 p').html(Math.round(forecast.daily.data[0].temperatureHigh));

	// $('.day02 p').html(Math.round(forecast.daily.data[1].temperatureHigh));
	// $('.day02 h3').html(displayDay(1));

	// $('.day03 p').html(Math.round(forecast.daily.data[2].temperatureHigh));
	// $('.day03 h3').html(displayDay(2));

	// $('.day04 p').html(Math.round(forecast.daily.data[3].temperatureHigh));
	// $('.day04 h3').html(displayDay(3));
	
	// In this example, the high temperature for the first day of the week
	// (referenced by the number 0) is written as HTML inside the <div class="today"> element
	// If I want to round this number up, I would modify the code like this

	$('.day02').html(Math.round(forecast.daily.data[0].temperatureHigh));

	$('.high').html(Math.round(forecast.daily.data[0].temperatureHigh));

    $('.low').html(Math.round(forecast.daily.data[0].temperatureLow));

	$('.icon').html(displayIcon(forecast.daily.data[0].icon));

	// $('.day02').html(Math.round(forecast.daily.data[1].temperatureHigh));

	$('.day02').html(forecast.daily.data[0].summary);

	// $('.today').addClass(forecast.daily.data[0].icon);

}


function displayIcon(n){
	switch(n) {
		case "clear-day":
    		return '<img src="img/icons/Sun.svg" alt="Clear Day">';
    		break;
    	case "clear-night":
    		return '<img src="img/icons/Moon-Full.svg" alt="Clear Night">';
    		break;
    	case "rain":
    		return '<img src="img/icons/Cloud-Rain.svg" alt="Rain">';
    		break;
    	case "snow":
    		return '<img src="img/icons/Snowflake.svg" alt="Snow">';
    		break;
    	case "sleet":
    		return '<img src="img/icons/Cloud-Hail.svg" alt="Sleet">';
    		break;
    	case "wind":
    		return '<img src="img/icons/Wind.svg" alt="Wind">';
    		break;
    	case "fog":
    		return '<img src="img/icons/Cloud-Fog.svg" alt="Fog">';
    		break;
    	case "cloudy":
    		return '<img src="img/icons/Cloud.svg" alt="Cloudy">';
    		break;
    	case "partly-cloudy-day":
    		return '<img src="img/icons/Cloud-Sun.svg" alt="Partly Cloudy Day">';
    		break;
    	case "partly-cloudy-night":
    		return '<img src="img/icons/Cloud-Moon.svg" alt="Partly Cloudy Night">';
    		break;
    	case "hail":
    		return '<img src="img/icons/Cloud-Hail.svg" alt="Hail">';
    		break;
    	case "thunderstorm":
    		return '<img src="img/icons/Cloud-Lightening.svg" alt="Thunderstorm">';
    		break;
    	case "tornado":
    		return '<img src="img/icons/Tornado.svg" alt="Tornado">';
    		break;
  		default:
    		// code block
	}
}


/* -----------------------------------------------
   Function for creating day of the week
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below
// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

	var d = new Date();
	var weekday = new Array();

	weekday[0] = "S";
	weekday[1] = "M";
	weekday[2] = "T";
	weekday[3] = "W";
	weekday[4] = "T";
	weekday[5] = "F";
	weekday[6] = "S";

	var dispDay = d.getDay() + n;

	// adjust number system for numbers over 6
	// subtract 7 from totals higher than 6
	// to keep the day numbers in the array range above
	if(dispDay > 6){
		dispDay = dispDay - 7;
	}

	return weekday[ dispDay ];

}


/* -----------------------------------------------
   Function for converting timestampt to readable text
   Source: https://stackoverflow.com/a/6078873
   ----------------------------------------------- */

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  var time = hour + ':' + min ;
  return time;
}