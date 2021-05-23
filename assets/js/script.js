
var today = moment().format('dddd, MMM Do YYYY h:mm:ss a');
$("#currentDay").text(today);


$(document).ready(function () {
    $(".saveBtn").on("click", function () {
    
        var task = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, task);
    })


function currentTime() {
   var timeHour= moment().hour();
   
$(".time-block").each(function () {
  var taskTime = parseInt($(this).attr("id"));  

    if (taskTime < timeHour) {
    $(this).removeClass("present")
    $(this).removeClass("future")
    $(this).addClass("past");
    }
    else if (taskTime === timeHour) {
    $(this).removeClass("present")
    $(this).removeClass("future")
    $(this).addClass("present");
    }
    else if (taskTime > timeHour){
    $(this).removeClass("present")
    $(this).removeClass("future")
    $(this).addClass("future");
    }
})
}

$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

currentTime();

})