var hourformat = true;

function DateBoard(){
var today = new Date();
var day = today.getDay();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var daylist = ['Sunday','Monday','Tuesday','Wednesday ','Thursday','Friday','Saturday']
var monthlist = ['January','February','March','April ','May','June','July','August', 'September', 'October', 'November', 'December']
//console.log('Today is : ' + daylist[day] + '.' + date);
var prepand = hour >= 12 ? ' PM ' : ' AM ';
hour = (hour >= 12) ? hour - 12 : hour;
//console.log('Current Time : ' + hour + prepand + ' : ' + minute + ' : ' + second  );
if (hourformat==true){
document.getElementById("date").innerHTML = monthlist[month]+ " " + date + "," +" " + year;
document.getElementById("day").innerHTML = daylist[day];
document.getElementById("hours").innerHTML = hour;
document.getElementById("minutes").innerHTML = minute;
document.getElementById("seconds").innerHTML = second;
document.getElementById("session").innerHTML = prepand;
}else{
  document.getElementById("date").innerHTML = monthlist[month]+ " " + date + "," +" " + year;
  document.getElementById("day").innerHTML = daylist[day];
  document.getElementById("hours").innerHTML = hour+12;
  document.getElementById("minutes").innerHTML = minute;
  document.getElementById("seconds").innerHTML = second;
  //document.getElementById("session").style.display = none;   
}
hourformat = !hourformat;
}

setInterval(DateBoard,500)

/*
if (hour === 0 && prepand === ' PM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = 'Noon';
  } else {
    hour = 12;
    prepand = ' PM';
  }
}else if(hour === 0 && prepand === ' AM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = 'Midnight';
  } else {
    hour = 12;
    prepand = 'AM';
  }
}*/

/*
var is12HourFormat = true;

// Function to toggle the time format between 12-hour and 24-hour formats
function Switchdisplay() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Convert the hours to 12-hour format or 24-hour format, depending on the current time format
  if (is12HourFormat) {
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12' in 12-hour format
    var strHours = hours < 10 ? '0' + hours : hours;
    var strMinutes = minutes < 10 ? '0' + minutes : minutes;
    var strSeconds = seconds < 10 ? '0' + seconds : seconds;
    var time = strHours + ':' + strMinutes + ':' + strSeconds + ' ' + ampm;
  } else {
    var strHours = hours < 10 ? '0' + hours : hours;
    var strMinutes = minutes < 10 ? '0' + minutes : minutes;
    var strSeconds = seconds < 10 ? '0' + seconds : seconds;
    var time = strHours + ':' + strMinutes + ':' + strSeconds;
  }

  // Update the clock display
  document.getElementById('clock').innerHTML = time;

  // Toggle the time format
  is12HourFormat = !is12HourFormat;
}

// Start the clock
setInterval(Switchdisplay, 1000);
*/