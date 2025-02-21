let x = 0;
let y = 0;
let theta = 0;
let inc = 0.01;
let offset = 0; // the amount offtset from beginning of wave
let amplitude; //amplitude of the wave
let frequency; // freqency
let maxAngle; // The max angle
// setting all the variables

// values for the height and width of the waves through amplitude and frequency
function setup() {
  //amplitude = windowHeight / 8;
  frequency = windowWidth / 8; // Freqency of the ellipse is set as the width of the window divivded by 4
  maxAngle = (windowWidth / frequency) * TWO_PI;
  // Setting the max angle of the wave by taking the window width and diviving that by the established frequency, following by a multiplication of 2 pie
  const animatedCanvas = createCanvas(770, 514);
  animatedCanvas.parent("animatedSketch");
  noStroke();
  fill(50, 45, 230);
}
function draw() {
  // Background and no stroke around shapes
  background(0, 25, 25);
  noStroke();
  let length = 10;
  let ypos = height / 2;
  while (theta < maxAngle + offset) {
    //amplitude = sin(theta - offset) * (windowHeight/2);
    amplitude = ((theta - offset) / maxAngle) * (windowHeight / 1);
    //  ^ This is setting the amplitude by taking the theta minus the estabalished offset and then dividing that by the max angle.
    for (i = length; i > 0; i--) {
      // Sinewave
      y = sin(theta - i * 20) * amplitude;
      //Theta is an angle that is processed by sine and then multipled by the amplitude gives us the y value
      fill(110, 0, 255 - (255 / length) * i);
      ellipse(x, y + ypos + 0, 12);
      // Example of a sinewave.
      // The ellipse determines the shape of each individual component. x and y set the positions, the number at the end sets the size

      //arc(x, height/2 + y, 16, width, 50, height, 50, start, 0, stop, 0,);
      // Top cosine wave
      y = cos(theta - i * 1) * amplitude;
      fill(255 - (255 / length) * i, 45, 83);
      ellipse(x, y + ypos - 5, 4);
      // Bottom cosine wave
      y = cos(theta - i * 50) * amplitude;
      fill(255 - (255 / length) * i, 15, 83);
      circle(x, y + ypos + 10, 12);
    }
    theta += 0.5;
    x = ((theta - offset) / maxAngle) * windowWidth;
    // X has to be consistent between all of them and must be set as it can't be 0
    // x is the "gap" between the ellipses.
    // This this mapping theta to the width of the screen.
  }
  offset += inc;
  theta = offset;
  // Enables the loop
}
