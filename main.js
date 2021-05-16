img=""
function preload(){
img=loadImage("dog_cat.jpg")
}
function setup(){
canvas=createCanvas(600,400)
canvas.center()
}
function draw(){
image(img,0,0,600,400)
//Code for drawing rectangle around the dog
fill("red")
//text("hello",x,y)
text("Dog",80,65)
textSize(15)
stroke("red")
noFill()
//rect(x,y,width,height)
rect(80,80,320,300)
}