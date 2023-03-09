// function to save data input to local storage
$(function () {
  
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();

    localStorage.setItem(time, userInput);
  });

  // dayjs variable for current hour
  var hour = dayjs().hour();

  //sets saved user data input to that of the text area
  $(".time-block").each(function () {
    var chosenTimeBlock = $(this)
    var id = chosenTimeBlock.attr("id")
    chosenTimeBlock.children("textarea").val(localStorage.getItem(id));
  });

  // use dayjs to display the current date in the header of the page

  var currentDate = dayjs();
  $("#currentDay").text(currentDate.format("dddd, MMMM DD, YYYY"))
});

// text area elements
let schedule9am = $("#hour-9");
let schedule10am = $("#hour-10");
let schedule11am = $("#hour-11");
let schedule12pm = $("#hour-12");
let schedule1pm = $("#hour-13");
let schedule2pm = $("#hour-14");
let schedule3pm = $("#hour-15");
let schedule4pm = $("#hour-16");
let schedule5pm = $("#hour-17");

//function to change background based on the hour
function background () {
      
  $(".description").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}
