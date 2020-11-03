let button;
let colorPicker;

var backgroundR = 135;
var backgroundG = 206;
var backgroundB = 235;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    button = createButton('START');
    button.position(30, 30);
    
    colorPicker = createColorPicker('#179169');
    colorPicker.position(30, 100);
    
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
    
    fill(colorPicker.color());
    noStroke();
    rect(0, windowHeight/2, windowWidth, windowHeight/2);

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}