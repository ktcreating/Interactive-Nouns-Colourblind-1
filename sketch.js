let colour, dcm;

function preload() {
  colour = loadImage("noun579.png");
  gb = loadImage("noun579gb.png");
}
function setup() {
let canvas = createCanvas(500, 500);
  canvas.parent('sketch-container');
  noCursor();
  cursor("glasscur.png", 30, -10);
  image(colour, 0, 0);
  image(gb, 0, 0);
}
function mouseDragged() {
  copy(colour, mouseX, mouseY, 50, 30, mouseX, mouseY, 50, 30);
}
