let hour = document.getElementById('hours');

let minute = document.getElementById('minuts');

let second = document.getElementById('seconds');

let day = document.getElementById('day');

setInterval(() => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}, 1000); 


// this code to get day

// Get current day as a number (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const dayNumber = new Date().getDay();

// Convert the number to a day name
const dayNames = ["SN", "MO", "TU", "WE", "TH", "FR", "SA"];
const currentDay = dayNames[dayNumber];

// Output the result (you can remove this if not needed)
console.log("Today is:", currentDay);

// You can now use `currentDay` variable wherever you want(text declaration is here)
day.innerHTML = currentDay;