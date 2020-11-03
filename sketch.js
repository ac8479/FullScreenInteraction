let button;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    
    button = createButton('START');
  
    button.position(30, 30);
    
}

function draw() {
    background(220);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}