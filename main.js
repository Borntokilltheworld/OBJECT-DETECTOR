img ="";
status = "";
function setup() {
canvas = createCanvas(640,420);
canvas.center();
ObjectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Object has been Detetced";
}
function preload(){
   img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("Cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = "true" ; 
    objectDetector.detect(img,gotResult)
}
function gotResult(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
}
}