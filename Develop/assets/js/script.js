
// creates schedule html
var createScheduler = function() {
    for (var i = 9; i <= 17; i++) {

        // sets x variable for time
        if (i <= 12) {
            var x = i + "AM";
            console.log(x)

        } else {
            var x = i - 12 + "PM";
            console.log(x)
        }

        // locates container
        var container = $(".container")

        // creates row container for each time block
        var rowContainer = $("<div>")
            .addClass("time-block row");

        // creates timeblock html
        var time = $("<div>")
            .addClass("col-2 border border-left-0 border-dark pt-3 font-weight-bold")
            .text(x);
        var task = $("<div>")
            .addClass("col-8 bg-secondary text-left pt-2")
        var save = $("<div>")
            .addClass("col-2 bg-info pt-3 rounded-right")

        // appends elements into containers
        container.append(rowContainer);
        rowContainer.append(time, task, save);
    }
}



createScheduler();