let brown1, brown2, slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // working in degrees not radians, slightly less performant but easier for humans to read
  angleMode(DEGREES);
  // prevent the draw function from being called recursively
  noLoop();
  // smooth the stroke joins
  strokeJoin(ROUND);
  // define branch colours
  brown1 = color("#38D360");
  brown2 = color("#4BAF64");
  // create a slider
  slider = createSlider(5, 180, 5);
  slider.position(10, 10);
  slider.style("width", "300px");
  // when the slider changes, redraw the fern
  slider.input(draw);
}
function draw() {
  background(180);
  // this resets all the transforms (translations and rotations)
  resetMatrix();
  // initially translate to the middle of the bottom edge of the canvas
  translate(width / 2, height);
  branch(150);
}
function branch(len) {
  // length of branch to draw
  // the maximum/minimum angle of each branch
  // value taken from the slider
  let maxAngle = slider.value();
  // use map() to derive branch stroke weight from current length of branch
  strokeWeight(map(len, 10, 200, 1, 10));
  // semi-randomly mix two colours for each branch segment
  stroke(lerpColor(brown1, brown2, random(0.3, 0.7)));
  // the draw command for a branch
  line(0, 0, 0, -len);
  // immediately translate the drawing context to the top of the line ready for the next branch call
  translate(0, -len);
  // recursion exit condition
  if (len > 10) {
    // draw leaf and terminate recursion
    if (len < 15) {
      console.log("Ferntest");
      // semi-random leaf colour
      let r = 10 + random(-20, 20);
      let g = 160 + random(-20, 20);
      let b = 15 + random(-20, 20);
      fill(r, g, b, 90);
      // semi-random leaf size
      let size = 200 + random(40);
      noStroke();
    } else {
      let arm = len * 1.1;
      // length of arm
      push();
      rotate(90);
      line(0, 0, 0, -arm);
      let spacer = 30;
      // space between leaves
      let size = 18;
      // leaf size
      for (let i = 0; i < arm; i += spacer) {
        let r = 10 + random(-20, 20);
        let g = 160 + random(-20, 20);
        let b = 15 + random(-20, 20);
        fill(r, g, b, 100);
        ellipse(size, i, size * 2, size);
        ellipse(-size, i, size * 2, size);
        //fern leaves left size
        noStroke();
      }
      pop();
      push();
      rotate(-90);
      line(0, 0, 0, -arm);
      for (let i = 0; i < arm; i += spacer) {
        let r = 10 + random(-20, 20);
        let g = 160 + random(-20, 20);
        let b = 15 + random(-20, 20);
        fill(r, g, b, 100);
        ellipse(size, i, size * 2, size);
        ellipse(-size, i, size * 2, size);
        //fern leaves right side
        noStroke();
      }
      pop();
      // branch 1
      push(); // save the current drawing context
      rotate(random(-maxAngle, maxAngle)); // rotate the whole canvas
      // 0.8 represents the ratio of the original branch size that the new branch size should be
      branch(len * 0.8); // create a new branch
      pop(); // restore the drawing context
    }
  }
}
