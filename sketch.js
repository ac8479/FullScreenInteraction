let button;
let colorPicker;
let myEl;
let clock = "";
let colors;

var backgroundR = 135;
var backgroundG = 206;
var backgroundB = 235;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    colors = color(100, 100, 150);
    
    button = createButton('COLOR OF MOUNTAINS');
    button.position(30, 30);
    
    button.mousePressed(changeColor);
    
    colorPicker = createColorPicker('#253f6a');
    colorPicker.position(240, 60);
    
    myEl = createElement('p1', "12:00");
    
}

function changeColor(){
    colorSet = [color(100, 100, 150), color(100, 150, 100), color(150, 100, 100)];
    colors = random(colorSet);
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
    
    fill(255);
    rect(30, 60, 250, 25, 4);
    
    fill(0);
    textSize(20);
    textFont('Montserrat');
    text("COLOR OF WATER:", 35, 80);
    
    fill(colors);
    triangle(-20, windowHeight/2, windowWidth/4, windowHeight/3, windowWidth/2, windowHeight/2);
    triangle((windowWidth/2)-20, windowHeight/2, 3*windowWidth/4, windowHeight/3, windowWidth+20, windowHeight/2);
    
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