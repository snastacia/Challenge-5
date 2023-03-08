 // update time
function updateTime() {
  var today = dayjs(); 

// updates the time element in the header
  $("#currentDay").text(today.format("dddd, MMMM DD YYYY, h:mm.ss"));

//past, present, and future time blocks
  let now = dayjs().format("hh");
  for (let i = 0; i < scheduleElArray.length; i++) {
      scheduleElArray[i].removeClass("future past present");

      if (now > scheduleElArray[i].data("hour")) {
          scheduleElArray[i].addClass("past");

      } else if (now === scheduleElArray[i].attr("data-hour")) {
          scheduleElArray[i].addClass("present");

      } else {

          scheduleElArray[i].addClass("future");
      }
  }
}

// textarea elements
let saveBtn = $(".saveBtn");
let containerEl = $(".container");
let schedule9am = $("#hour-9");
let schedule10am = $("#hour-10");
let schedule11am = $("#hour-11");
let schedule12pm = $("#hour-12");
let schedule1pm = $("#hour-13");
let schedule2pm = $("#hour-14");
let schedule3pm = $("#hour-15");
let schedule4pm = $("#hour-16");
let schedule5pm = $("#hour-17");

let scheduleElArray = [
  schedule9am,
  schedule10am,
  schedule11am,
  schedule12pm,
  schedule1pm,
  schedule2pm,
  schedule3pm,
  schedule4pm,
  schedule5pm,
];

renderLastRegistered();
updateTime();
setInterval(updateTime, 1000); 

function renderLastRegistered() {
  for (let el of scheduleElArray) {
      el.val(localStorage.getItem("time-block " + el.data("hour")));

  }
}


// Click events
function handleFormSubmit(event) {
  event.preventDefault();

  let btnClicked = $(event.currentTarget);

  let targetText = btnClicked.siblings("textarea");

  let targetTimeBlock = targetText.data("hour");

  localStorage.setItem("time block " +  targetTimeBlock, targetText.val());
}

saveBtn.on("click", handleFormSubmit);


