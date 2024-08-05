
//function getDate() {
    
// Get the current date

const currentDate = new Date();

// Extract the individual components of the date (year, month, day, hours, minutes, seconds)
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Construct the date string in the desired format
const dateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

// Combine date and time strings
const dateTimeString = `${dateString} ${timeString}`;

console.log(dateTimeString); // Output: e.g., "2024-05-01 14:30:15"


