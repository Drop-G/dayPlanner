var text = document.querySelector("#text-input");
var saveBtn = document.querySelector(".saveBtn");

saveBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var plans = {
        text: textInput.value.trim(),
    };

    if (plans.text === "") {
        displayMessage("error", "Text area can't be blank homie");
    } else {
        displayMessage("successfully stored your plans!");

        localStorage.setItem("plans", JSON.stringify(plans));

        // get most recent submission
        var lastPlans = JSON.parse(localStorage.getItem("plans"));
        plansTextSpan.textContent = lastPlans.text;
    }

})

$(document).ready(function () {
    // checkTime():
    var presentDay = moment().format('MMMM Do YYYY');
    $("#currentDay").append(presentDay);

    $(".row").each(function () {
        var hour = $(this).attr("name");
        console.log(hour);
        var hourInt = parseInt(hour)
        var currentHour = moment().hours()
        console.log(currentHour);

        if (currentHour > hourInt) {
            $(this).children(".description").addClass("past")

        }
        else if (currentHour < hourInt) {
            $(this).children(".description").addClass("future")
            console.log(this)
        }

        else {
            $(this).children(".description").addClass("present")
            console.log(this)
        }

    })
})
