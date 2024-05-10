var canvas;
var ctx;

window.onload = function () {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function () {
        var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };
    img.src = 'board.svg';
    canvas.width = window.innerWidth * .95;
    canvas.height = window.innerHeight * .95;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 40;
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
};
function click() {
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 40;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, 2 * Math.PI);
    ctx.stroke();
}



