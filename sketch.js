let circles = [];
let introText = "Welcome to my webpage";
let infoText = "Click to add more balls";
function setup() {
    createCanvas(windowWidth, windowHeight)
    noStroke();
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height/3);
        let d = random(20, 150);
        let c = color(random(255), random(255), 255);
        let s = random(0.2, 3);
          circles[i] = new DrawCircle(x, y, d, c, s);
      }
}

function draw() { 
    background(220);
    fill(0, 150, 240);
    textSize(windowWidth/18)
    text(introText, windowWidth/4, windowHeight/2)
    textSize(windowWidth/50)
    text(infoText, 10, 80);
    text
    for (let i = 0; i < circles.length; i++) {
        circles[i].move();
      circles[i].display();
    }
    
    if (circles.length > 60) {
        circles.shift();
    }
    
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function mousePressed() {
    let d = random(20, 150);
    let c = color(random(255), random(255), 255);
    let s = random(0.2, 3);
      let newCircle = new DrawCircle(mouseX, mouseY, d, c, s);
    circles.push(newCircle);
  }
  
  class DrawCircle {
    constructor(x, y, d, c, s) {
        this.xPos = x;
        this.yPos = y;
        this.diameter = d;
        this.color = c;
        this.speed = s;
    }
    display() {
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);
    }
    move() {
        this.yPos += this.speed;
        if (this.yPos - this.diameter / 2 > height) {
            this.yPos = -this.diameter / 2;
        }
    }
}
  
