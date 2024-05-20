window.onload = function () {
    canvas = document.getElementById("gameCanvas");
    canvas.addEventListener('click', function () { }, false);
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
    // var centerX = canvas.width / 2;
    // var centerY = canvas.height / 2;
    // let arr = [];
    // let row = 6;
    // let col = 7;
    // // Loop to initialize 2D array elements.
    // for (let i = 0; i < row; i++) {
    //     gfg[i] = [];
    //     for (let j = 0; j < col; j++) {
    //         gfg[i][j] = false;
    //     }
    // }
    canvas.addEventListener('click', function (event) {
        const rect = canvas.getBoundingClientRect(); // Get canvas position
        const x = event.clientX - rect.left; // Get click position relative to canvas
        const y = event.clientY - rect.top;

        // Draw red circle at click location
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2 * Math.PI); // Adjust radius (10 here) as needed
        ctx.fillStyle = "red";
        ctx.fill();
    });
    let x = 0
    let y = 0
    for (let i = 0; i < 7; i++) {
        x += window.innerWidth * .1;
        y = 0
        for (let i = 0; i < 6; i++) {
            y += window.innerHeight * .1;
            ctx.beginPath();
            ctx.arc(x, y, 25, 0, 2 * Math.PI); // Adjust radius (10 here) as needed
            ctx.fillStyle = "red";
            ctx.fill();
        }
    }
};


