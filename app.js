// Time
function time() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let ampms = hours > 12 ? "PM" : "AM";

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
  document.getElementById("ampm").innerHTML = ampms;

  // Date
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday ",
    "Saturday",
    "Sunday",
  ];

  let days = today.getDay();
  let months = today.getMonth();
  let dates = today.getDate();
  let years = today.getFullYear();

  document.getElementById("day").innerHTML = weekNames[days];
  document.getElementById("month").innerHTML = monthNames[months];
  document.getElementById("date").innerHTML = dates;
  document.getElementById("year").innerHTML = years;
}
setInterval(time, 1000);
