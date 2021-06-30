var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")

var greencar_w=75
var greencar_h=100
var greencar_x=5
var greencar_y=225
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
var background_imgTag
var greencar_imgTag
function add() {
	background_imgTag= new Image()
	background_imgTag.onload=uploadBackground
	background_imgTag.src=background_image

	greencar_imgTag= new Image()
	greencar_imgTag.onload=uploadBackground
	greencar_imgTag.src=greencar_image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.canvas.Width,canvas.height)

}

function uploadgreencar() {
ctx.drawImage(greencae_imgTag,greencar_x,green_y,green_width,greencar_height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(greencar_y>=0)
{
	greencar_y= greencar_y-10
	console.log("When up arrow is pressed, x = "+green_x+"| y = "+greencar_y)
	uploadBackground()
	uploadgreencar()
}
}

function down()
{
	if(greencar_y<=0)
{
	greencar_y= greencar_y+10
	console.log("When down arrow is pressed, x = "+green_x+"| y = "+greencar_y)
	uploadBackground()
	uploadgreencar()
}
}

function left()
{
	if(greencar_x>=0)
{
	greencar_x= greencar_x-10
	console.log("When left arrow is pressed, x = "+green_x+"| y = "+greencar_y)
	uploadBackground()
	uploadgreencar()
}
}

function right()
{
	if(greencar_x<=0)
	{
		greencar_x= greencar_x+10
		console.log("When left arrow is pressed, x = "+green_x+"| y = "+greencar_y)
		uploadBackground()
		uploadgreencar()
	}
}