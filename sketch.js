let button;
let colorPicker;
let myEl;
let clock = "";

var backgroundR = 135;
var backgroundG = 206;
var backgroundB = 235;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    button = createButton('START');
    button.position(30, 30);
    
    colorPicker = createColorPicker('#253f6a');
    colorPicker.position(30, 90);
    
    myEl = createElement('p1', "12:00");
    //myEl.html('');
    
    
    
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
    circle(windowWidth/2, mouseY, windowWidth/4);
    
    fill(colorPicker.color());
    noStroke();
    rect(0, windowHeight/2, windowWidth, windowHeight/2);
    
    myEl.position(20, windowHeight/2-90);
    myEl.style('font-size', '90px');
    myEl.style('font-family', 'Montserrat');
    myEl.style('color', 'white');
    
    if (mouseY == 0){
        myEl.html('12:00 am');
    }
    
    if (mouseY > 0 && mouseY <= windowHeight/12){
        myEl.html('1:00 pm');
    }
    if (mouseY >= windowHeight/12 && mouseY <= windowHeight/6){
        myEl.html('2:00 pm');
    }
    if (mouseY >= windowHeight/6 && mouseY <= windowHeight/4){
        myEl.html('3:00 pm');
    }
    if (mouseY >= windowHeight/4 && mouseY <= windowHeight/3){
        myEl.html('4:00 pm');
    }
    if (mouseY >= windowHeight/3 && mouseY < windowHeight/2){
        myEl.html('5:00 pm');
    }

    if (mouseY > windowHeight/2 && mouseY <= 7 * windowHeight/12){
        myEl.html('6:00 pm');
    }
    if (mouseY >= 7 * windowHeight/12 && mouseY <= 8 * windowHeight/12){
        myEl.html('7:00 pm');
    }
    if (mouseY >= 8 * windowHeight/12 && mouseY <= 9 * windowHeight/12){
        myEl.html('8:00 pm');
    }
    if (mouseY >= 9 * windowHeight/12 && mouseY <= 10 * windowHeight/12){
        myEl.html('9:00 pm');
    }
    if (mouseY >= 10 * windowHeight/12 && mouseY <= 11 * windowHeight/12){
        myEl.html('10:00 pm');
    }
    if (mouseY >= 11 * windowHeight/12 && mouseY <= windowHeight-1){
        myEl.html('11:00 pm');
    }
    if (mouseY >= windowHeight-1 && mouseY <= windowHeight){
        myEl.html('12:00 pm');
    }
    
    

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}