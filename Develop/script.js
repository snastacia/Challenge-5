// function to save data input to local storage
$(function () {
  
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();

    localStorage.setItem(time, userInput);
  });

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


//function to change background based on the hour
function background () {

// dayjs variable for current hour
var hour = dayjs().hour();
console.log(hour, "this is the time!");
      
  $(".description").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      console.log(timeTest);
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

background();