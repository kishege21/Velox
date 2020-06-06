let color = "purple";
let number = 10;
let word = "cool";

if (color==="purple") {
    $(".North").css("background-color", "purple")
};

if (number>100) {
    $(".East").text("whoah, that's a big number.") 
} else {
    $(".East").text("just a regular number, please.")
}

if (word==="cool") {
    $(".South").text("Power of Dom")
} else {
    $(".West").text(1)
}