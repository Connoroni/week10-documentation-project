function setup() {
  // Canvas size to match the published sketches on the site
  const staticCanvas = createCanvas(770, 514);
  staticCanvas.parent("staticSketch");
}

function draw() {
  //   Sky blue background
  background(135, 206, 235);

  //   Set the colours for the circle with a fill colour and border colour before drawing it
  fill("yellow");
  stroke("orange");
  strokeWeight(20);
  //   Circle/sun in top right (x, y, size)
  circle(700, 55, 100);

  //   Set colours for green rectangle
  fill("green");
  stroke("black");
  strokeWeight(1);
  rect(0, 200, 770, 350);

  //   Make house
  fill("tan");
  stroke("brown");
  rect(50, 150, 100, 120);

  //   Roof
  fill("red");
  triangle(50, 150, 100, 90, 150, 150);

  //   Door
  fill("brown");
  rect(95, 240, 20, 30);

  //   Doorknob
  fill("yellow");
  circle(110, 255, 5);

  //   Window1
  fill("lightblue");
  stroke("white");
  rect(70, 180, 20, 20);

  //   Window2
  rect(115, 180, 20, 20);
}
