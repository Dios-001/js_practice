// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


let date = new Date();
const arr = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
console.log("Today is : ", arr[date.getDay()])
console.log(`Current time is : ${Math.abs(date.getHours() - 12)} ${date.getHours()>11 ? "PM":"AM"} : ${date.getMinutes()} : ${date.getSeconds()} `)