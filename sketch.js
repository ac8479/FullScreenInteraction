let button;

var backgroundR = 135;
var backgroundG = 206;
var backgroundB = 235;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    button = createButton('START');
  
    button.position(30, 30);
    
}

function draw() {
    background(backgroundR, backgroundG, backgroundB);
    
    fromBG = color(135, 206, 235);
    toBG = color(0, 1, 10);
    backgroundColor = lerpColor(fromBG, toBG, mouseY/windowHeight);
    background(backgroundColor);
    
    fill(255, 255, 225);
    noStroke();
    ellipseMode(CENTER);
    circle(windowWidth/2, mouseY, 100);
    

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}