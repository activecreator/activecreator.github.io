var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = canvas.width/2;
var y = canvas.height-60;
var stepX = 1;
var stepY = 1;
var ballRadius = 10;
var anycolor = randomColor();

function drawBall() {
   
    ctx.beginPath();
    ctx.arc(x, y, ballRadius ,0 , 2*Math.PI);
    ctx.fillStyle = anycolor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
}
    
function draw() {
    canvas.width=window.innerWidth-20;
    canvas.height=window.innerHeight-20;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if ( (x<ballRadius) || (x>canvas.width - ballRadius) )
    {
        stepX = -1 * stepX; 
        randomColor();
    }
    
    if ( (y<ballRadius) || (y>canvas.height - ballRadius) )
    {
        stepY = -1 * stepY;  
        randomColor();
    }
    
    x = x- stepX
    y = y- stepY

    
    console.log(anycolor)
    
    
}
setInterval(draw, 10);