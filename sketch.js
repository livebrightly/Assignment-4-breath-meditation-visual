// a is the unknown angle (aka theta in trig)
// k is the constant (trig)
// r is the radius

// r=cos(k*theta)
// source: https://en.wikipedia.org/wiki/Rose_(mathematics)

// SOH sin(theta) = y/r  or y = r* sin(theta)
// CAH cos(theta) = x/r  or x = r* cos(theta)
// TOA tan(theta) = y/x  or y = x* tan(theta)
let angle = 0

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);


  //createCanvas(1000, 1000, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB, 100);

    translate(width/2, height/2)

}

function draw() {
  background('rgba(100%,100%,100%,0.1)');


  var mousepositionX = mouseX / width;

  for (var a = 0; a < TWO_PI; a += 0.04) {

    // var r needs to lerp between sketches
    var r;

    var sketch1r = 900 * sin(3 / a + 10 * 6, 14 / 2);
    var sketch2r = 900 * sin(30 * a - 12);
    
    
    var sketch3r = 900 * sin(3 * a + 10 * 6,) ;
    var sketch4r = 900 * sin(3 * a + 10);
    var sketch5r = 900 * sin(3 * a * 40);


    if (mousepositionX < 0.25) {
var interp = map(mouseX/width, 0, 0.25, 0, 1);
r = lerp(sketch1r,sketch2r, interp) 
    }

    if (mousepositionX > 0.25 && mousepositionX < 0.5) {
      var interp = map(mouseX / width, 0.25, 0.5, 0, 1);
      r = lerp(sketch2r, sketch3r, interp)
    }

    if (mousepositionX > 0.5 && mousepositionX < 0.75) {
      var interp = map(mouseX / width, 0.5, 0.75, 0, 1);
      r = lerp(sketch3r, sketch4r, interp)
    }




    var x = r * sin(0);
    var y = r * sin(0);


    c = color('hsba(160, 100%, 50%, 0.5)');
    //c = color('hsba(' + mouseY + ', 100%, 50%, 0.5)');
    color(mouseY, 100, 50, 0.5)

    stroke(c)
    //stroke('rbga(40%, 68%,70%, 1)' )
    //stroke('rgba(40%,40%,40%,0.08)');
    strokeWeight(3);
    noFill();
    //fill('rgba(5%,50%,100%,0.0019456)');

    push();
    translate(x, y);
    rotate(angle);
    scale(1);
    ellipse(0, 0, r + 275 * sin(frameCount), r + 275 * sin(frameCount));
    //ellipse(x,y,r,r);
    pop();


    //ellipse(x,y,r,r);

    angle = angle + 2

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}