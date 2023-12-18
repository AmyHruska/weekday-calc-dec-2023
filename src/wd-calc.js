export default function WeekdayObj (userInput) {
    this.userInput = userInput;
}

WeekdayObj.prototype.weekdayFinder = function () {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(this.userInput);
    let weekdayNumber = date.getDay();
    this.weekday = dayNames[weekdayNumber];
}
// let birthday = new WeekdayObj('February 14, 1996');
// birthday.weekdayFinder();



// const birthday = new Date('August 19, 1975');
// const valentines = new Date('1996-02-14');
// const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

// console.log(day1);
// Expected output: 2
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];