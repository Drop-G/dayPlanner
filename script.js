$(document).ready(function() {

    // checkTime():
    checkTime();

    // local storage function goes here:
    function storageUnit(){
        var descriptiveText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setTime(time,descriptiveText);
    }

    function checkTime(){
        var timeTable = moment().hours();
        $(".time-block").each(function() {
            var id = $(this).attr("id");
            if(id == timeTable){
                $(this).addClass("present")
            }else if(id < timeTable) {
                $(this).addClass("past")
            }else {
                $(this).addClass("future")
            }
    
            }
        )
    }      


    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

    // storageUnit comms

    $("#8 .description").val(localStorage.getItem("8"))
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
    $("#18 .description").val(localStorage.getItem("18"))
    $("#19 .description").val(localStorage.getItem("19"))


    // Onclick stuff

    $(".saveBtn").on("click", storageUnit);

})
