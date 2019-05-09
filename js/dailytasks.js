var days = [
  {
    day: "Monday"
  },
  {
    day: "Tuesday"
  },
  {
    day: "Wednesday"
}
];
console.log(days);

var task =[
  {
    tasks: "Cleaning"
  },
  {
    tasks: ["Homework","Something else","Shopping"]
  },
  {
    tasks: ["Work", "Gym"]
  }
];
console.log(task);

for (var i = 0; i < days.length; i++) {
  console.log(days[i].day);
  console.log(days[i].tasks);

for (var a = 0; a < days[i].tasks.length; a++) {
  console.log(days[i].tasks[a]);
  }
}
