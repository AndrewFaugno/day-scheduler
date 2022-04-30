// time and day in header
var day = moment().format('MMMM Do YYYY, h:mm:ss a'); 
$("#currentDay").append(day)

// creates schedule html
var createScheduler = function() {
    for (var i = 9; i <= 17; i++) {
        // sets class based on time of day
        var hour = moment().format("H");
        if (hour == i) {
            var currentState = 'present'
        } else if (hour < i) {
            currentState = 'future'
        } else if (hour > i) {
            currentState = 'past'
        }
        // sets x variable for time
        if (i <= 12) {
            var x = i + "AM";
        } else {
            var x = i - 12 + "PM";
        }
        // locates container
        var container = $(".container")
        var rowContainer = $("<div>")
            .addClass("row mb-2")
        // creates timeblock html
        var time = $("<div>")
            .addClass("col-2 pt-3 hour")
            .text(x);
        var taskArea = $("<textarea>")
            .addClass("description col-8 text-left text-dark pt-2 " + currentState)
            .attr("id", "task-" + i);
        var saveBtn = $("<button>")
            .addClass("col-2 saveBtn fas fa-save")
            .attr("id", i);
        // appends elements into containers
        container.append(rowContainer);
        rowContainer.append(time, taskArea, saveBtn);
    };
}

// temporarily saves text into textarea so save button can read it
$(".container").on("blur", "textarea", function() {
    var text = $(this).val();
    $(this).text(text);
})

// save changes to local storage when button is clicked
$(".container").on("click", "button", function() {
    // gets values of current task written
    var time = $(this).attr("id");
    var textVal = "#task-" + time;
    var text = $(textVal).text();
    // sends values to local storage
    localStorage.setItem(time, text);
})

// recall saved tasks from localStorage
var callAllTasks = function () {
for (var i = 9; i <= 17; i++) {
    // grabs values from local storage using 'i' as the key value
    $("#task-"+i).text(localStorage.getItem(i));
    };
}

// calls creation of page
createScheduler();

// calls all localstorage tasks
callAllTasks();



