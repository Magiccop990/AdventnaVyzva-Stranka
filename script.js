var positions = [
    {top:"21", right:"17"},//blue right up 01
    {top:"60", right:"25"},//orange left middle_down 02
    {top:"33", right:"27"},//orange_red left middle_up 03
    {top:"46", right:"27"},//pink left middle 04
    {top:"55", right:"7"},//purple right middle_down 05
    {top:"40", right:"16"},//red midle_right midle 06
    {top:"38", right:"22"},//white midle midle 07
    {top:"30", right:"14"},//pink2 right up 08
    {top:"54", right:"17"},//yellow midle midle_down 09
    {top:"50", right:"11"},//blue right midle 10
    {top:"65", right:"9"},//orange right down 11
    {top:"70", right:"19"},//orange_red midle down 12
    {top:"72", right:"30"},//pink left down 13
    {top:"51", right:"22"},//purple left midle 14
];

var ballResourcePath = "img/balls/";

var ballImages = [
    "blue_ball.png",//0
    "orange_ball.png",//1
    "orange_red_ball.png",//2
    "pink_ball.png",//3
    "purple_ball.png",//4
    "red_ball.png",//5
    "white_ball.png",//6
    "pink2_ball.png",//7
    "yellow_ball.png"//8
];

var color_list = [
    ballImages[0],
    ballImages[1],
    ballImages[2],
    ballImages[3],
    ballImages[4],
    ballImages[5],
    ballImages[6],
    ballImages[7],
    ballImages[8],
    ballImages[0],
    ballImages[1],
    ballImages[2],
    ballImages[3],
    ballImages[4],
    ballImages[5],
    ballImages[6],
    ballImages[7],
    ballImages[8],
    ballImages[0],
    ballImages[1],
    ballImages[2],
    ballImages[3],
    ballImages[4]
];

function on_click() {
    alert("ball pressed")
};

function randomInt(bound) {
    return Math.floor(Math.random() * bound);
}

function on_load() {
    var ballContainer = document.getElementById("treecontainer");
    for (var i = 0; i < positions.length; i++) {
        var currentPosition = positions[i];
        var currentBall = document.createElement("img");

        currentBall.src = ballResourcePath + color_list[i];
        
        currentBall.style.top = currentPosition.top + "%";
        currentBall.style.right = currentPosition.right + "%";
        currentBall.style.width = "40px";
        currentBall.style.height = "40px";
        currentBall.style.position = "absolute";
        currentBall.style.zIndex = 1;

        currentBall.onclick = on_click;

        ballContainer.appendChild(currentBall);
    };
};

on_load()
