const platformHeight = 110;
const fruitCartonHeight = 74;
let i = 1;

function setup() {
  const canvas3d = createCanvas(770, 514, WEBGL);
  canvas3d.parent("sketch3d");
  setAttributes("antialias", true);

  describe(
    "A still life featuring cherries, strawberries, an apple, and sliced plums and peaches. These are set in and around various stemmed glassware. This is made in 2021 as an interpretation of a photo by Victoria Jane Photography: https://www.instagram.com/p/CGICi-sl4nH/."
  );
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function draw() {
  orbitControl(1, 1, 0.5);
  angleMode(DEGREES);

  i += 0.008;

  background(255);
  noStroke();

  translate(0, 250, -300);
  directionalLight(255, 255, 255, 300, 200, -100);
  pointLight(197, 182, 182, -400, -200, 400);
  pointLight(155, 95, 155, 200, -200, 1000);

  pointLight(40, 40, 40, mouseX - width / 2, height / 2 - mouseY, 30);

  // ground
  push();
  ambientLight(40);
  directionalLight(120, 120, 80, 100, 200, -100);
  fill(185, 185, 127);
  translate(-width, 0, -180);
  rotateX(90);
  rect(0, 0, width * 2, height);
  pop();

  // backdrop
  push();
  pointLight(255, 60, 70, -150, 0, -200);
  pointLight(40, 255, 40, 150, 0, -200);
  fill(50, 50, 42);
  translate(-width, -height * 1.5, -180);
  rect(0, 0, width * 2, height * 1.5);
  pop();

  // platform
  push();
  translate(90, -50, 20);
  fill(253, 212, 196);

  rotateY(26);
  box(300, platformHeight, 300);
  rotateY(-26);

  translate(-16, -platformHeight / 2, 85);

  push();
  translate(0, -14, 0);
  rotateY(40);
  strawberry(20, 30);
  pop();

  push();
  translate(40, 0, 0);
  plum();
  pop();

  push();
  translate(90, -3.5, 30);
  rotateZ(-40);
  rotateX(-20);
  cherry();
  cherryStem(45);
  pop();

  push();
  translate(100, 0, 0);
  peach();
  pop();

  push();
  translate(-30, 0, -50);
  apple();

  translate(-6, -2, 116);
  rotateY(-20);
  rotateZ(20);
  plum();
  pop();

  push();
  translate(-36, 0, -160);
  champagneFlute();
  rotateY(40);
  translate(-50, -16, -20);
  strawberry(20, 24);
  pop();

  push();
  translate(-110, 0, -100);
  mediumGlass();
  translate(0, 0, 60);

  push();
  cherry();
  translate(24, 0, 10);
  cherry();

  push();
  translate(2, -2, -3);
  rotateX(5);
  rotateZ(-16);
  cherryStem(54);
  pop();
  push();
  translate(-28, -2, -8);
  rotateZ(16);
  cherryStem(64);
  pop();
  pop();

  translate(50, -14, 60);
  rotateY(30);
  strawberry(20, 30);
  pop();

  pop();

  // fruit carton 1
  push();
  translate(120, -platformHeight - fruitCartonHeight / 2, 0);
  rotateY(10);
  fruitCarton();

  translate(0, -fruitCartonHeight / 2, 0);
  push();
  translate(0, 0, 30);

  rotateZ(-20);
  cherry();
  cherryStem(50);
  pop();

  push();
  translate(22, -10, 10);
  strawberry();
  pop();
  pop();

  // lower fruit carton
  push();
  translate(-150, 0, 70);

  push();
  translate(25, 0, 100);
  cherry();
  translate(114, 0, 20);
  rotateZ(-30);
  cherry();
  cherryStem(60);
  pop();

  push();
  translate(-60, 0, 70);
  push();
  rotateZ(20);
  cherry();
  cherryStem();
  pop();
  translate(-20, 0, -50);
  push();
  translate(0, -4, -30);
  rotateZ(-50);
  cherry();
  cherryStem();
  pop();
  translate(-10, 0, 60);
  push();
  cherry();
  cherryStem(40);
  pop();
  pop();

  translate(0, -fruitCartonHeight / 2, 0);
  push();
  rotateY(-20);
  fruitCarton();
  pop();

  push();
  translate(0, -fruitCartonHeight / 2, 0);
  wineGlass();
  pop();
  pop();

  push();
  translate(100, -platformHeight - fruitCartonHeight, -10);
  smallGlass();
  pop();

  push();
  translate(-320, 0, 40);
  upsideDownGlass();
  translate(0, -110, 0);
  cherry();
  rotateZ(10);
  cherryStem(50);
  pop();

  // debugMode();
}

function upsideDownGlass() {
  const h = 100;
  const w = 50;
  push();
  glass();
  rotateX(180);
  translate(0, h / 2 - 1, 0);
  cone(w, h);

  push();
  translate(0, h / 2 - w / 3, 0);
  sphere(w / 3);
  pop();

  translate(0, h / 2, 0);
  rotateX(180);
  cone((w * 2) / 3, h / 4);
  pop();
}

function mediumGlass() {
  const h = 110;
  const w = 30;
  const stem = 50;
  push();
  glass();
  translate(0, -13, 0);

  push();
  rotateX(180);
  cone(w, 15);
  pop();

  push();
  translate(0, -26);
  cylinder(5, stem);
  translate(0, -32, 0);
  cone(24, 36);
  translate(0, 24, 0);
  cone(12, 16);
  translate(0, 20, 0);
  sphere(10);
  pop();

  push();
  translate(0, -stem - w - 14);
  sphere(w);
  translate(0, -(h - stem) / 2);
  cylinder(w, h - stem);
  pop();

  push();
  translate(0, -h - stem + 5);

  push();
  cherry();
  translate(2, -18, 0);
  cherry();
  push();
  translate(10, 0, 0);
  rotateX(-14);
  rotateZ(-26);
  cherryStem(65);
  pop();
  pop();

  push();
  translate(15, -3);
  cherry();
  translate(-30, 0, 10);
  cherry();
  translate(10, 0, 20);
  cherry();
  translate(-20, 0, -12);
  cherry();
  push();
  rotateZ(10);
  rotateX(5);
  cherryStem(68);
  pop();
  translate(-9, 15, 7);
  cherry();
  pop();

  push();
  translate(-8, 10, 15);
  cherry();
  translate(10, 0, 0);
  cherry();
  translate(12, 0, -5);
  cherry();
  translate(0, 0, -12);
  cherry();
  translate(-6, 0, -12);
  cherry();
  pop();
  pop();

  pop();
}

function fruitCarton() {
  const w = 100;
  push();
  ambientLight(100);
  fill(99, 183, 178);
  box(w, fruitCartonHeight, w);

  for (let i = 0; i < 4; i += 1) {
    push();
    translate(
      (-w / 2) * (i < 2 ? -1 : 1),
      0,
      (w / 2) * ((i + 1) % 2 === 0 ? -1 : 1)
    );
    rotateX(180);
    cone(10, fruitCartonHeight);
    pop();
    push();
    rotateY(i * 90);
    translate(-15, 0, w / 2);
    box(10, fruitCartonHeight, 5);
    translate(30, 0, 0);
    box(10, fruitCartonHeight, 5);
    pop();
  }
  pop();
}

function glass() {
  ambientLight(40);
  fill(230, 220, 250, 205);
}

function champagneFlute() {
  const h = 110;
  const w = 25;
  push();
  glass();
  translate(0, -h / 2 - w, 0);
  cylinder(w, h);
  translate(0, h / 2, 0);
  sphere(w);

  push();
  translate(16, -h - 8, 7);
  rotateY(155);
  rotateZ(-12);
  strawberry(w - 4, 30);
  pop();

  pop();
}

function wineGlass() {
  const h = 90;
  push();
  glass();
  translate(0, -1.5, 0);

  translate(0, -h / 2 - 10, 0);
  cylinder(4, h);

  translate(0, h / 2);

  push();
  translate(0, 5, 0);
  rotateX(180);
  cone(32, 12);
  pop();

  translate(0, -h + 12, 0);
  push();
  translate(0, -1, 0);
  peach();
  pop();

  fill(230, 220, 250, 180);
  translate(0, -33, 0);
  sphere(32.5);
  translate(0.5, -30, 0);
  cylinder(33, 60);
  pop();
}

function smallGlass() {
  const h = 70;
  push();
  glass();
  translate(0, -1.5, 0);

  translate(0, -h / 2 - 6, 0);
  cylinder(6, h);

  translate(0, -h / 2);

  push();
  translate(0, h, 0);
  rotateX(180);
  cone(24, 10);
  pop();

  push();
  translate(0, h - 32);
  push();
  translate(0, 24);
  cone(16, 24);
  pop();
  rotateZ(180);
  cone(16, 24);
  pop();

  push();
  translate(0, 10);
  push();
  translate(0, 24);
  cone(16, 24);
  pop();
  rotateZ(180);
  cone(16, 24);
  pop();

  push();
  translate(0, -22);
  sphere(26);

  translate(0, 10);
  cone(40, 90);
  pop();

  push();
  translate(4, -h);
  push();
  translate(-34, 0, 0);
  rotateX(-20);
  rotateZ(-10);
  strawberry(20, 30);
  pop();

  push();
  translate(0, -4, 6);
  rotateZ(45);
  strawberry(22, 30);
  pop();

  pop();

  pop();
}

function plum() {
  const h = 10;
  const w = 20;
  push();
  ambientLight(100, 100, 0);
  fill(140, 60, 70);
  translate(0, -h, 0);
  ellipsoid(w, h, 6, 8);
  pop();
}

function apple() {
  push();
  ambientLight(60, 10, 0);
  translate(0, -24, 0);
  fill(105, 40, 50);
  sphere(28);
  pop();
}

function strawberry(w = 15, h = 15) {
  push();
  fill(140, 30, 30);
  translate(w, h / 3, 0);
  rotateZ(-45);
  cone(w, h);
  pop();
}

function cherry() {
  const size = 12;
  push();
  fill(80, 10, 10);
  translate(0, -size, 0);
  sphere(size);
  pop();
}

function cherryStem(h = 60) {
  push();
  fill(70, 150, 70);
  translate(0, -h / 2, 0);
  cylinder(1.5, h);
  pop();
}

function peach() {
  push();
  translate(0, -32, 0);
  ambientLight(150, 140, 100);
  fill(220, 140, 100);
  sphere(32);
  pop();
}
