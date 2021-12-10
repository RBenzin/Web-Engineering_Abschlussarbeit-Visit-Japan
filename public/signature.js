var canvas, ctx, flag = false,
        prevX = 0,
        currentX = 0,
        prevY = 0,
        currentY = 0,
        dot_flag = false;

    var x = "black";
    var y = 2;
    
//Alle Input Events
function init() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        calc_coord('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        calc_coord('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        calc_coord('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        calc_coord('out', e)
    }, false);
    canvas.addEventListener("touchstart", function (e) {
        calc_coord('down', e)
    }, false);
    canvas.addEventListener("touchend", function (e) {
        calc_coord('up', e)
    }, false);
    canvas.addEventListener("touchmove", function (e) {
        calc_coord('move', e)
    }, false);
}

//Speichert Inhalt des Canvas als src in anderen Bild
function save() {
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
    document.getElementById("canvasimg").style.marginLeft = "10px";
}

//Malt auf dem Canvas
function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

//Loescht Inhalt des Canvas
function erase() {
    var m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, width, height);
        document.getElementById("canvasimg").style.display = "none";
    }
}

//Berechnet Zieloordinate und malt
function calc_coord(action, target) {
    if (action == 'down') {
        prevX = currentX;
        prevY = currentY;
        currentX = target.clientX - canvas.offsetLeft;
        currentY = target.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currentX, currentY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (action == 'up' || action == "out") {
        flag = false;
    }
    if (action == 'move') {
        if (flag) {
            prevX = currentX;
            prevY = currentY;
            currentX = target.clientX - canvas.offsetLeft;
            currentY = target.clientY - canvas.offsetTop;
            draw();
        }
    }
}