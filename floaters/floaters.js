let img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11;
let pieces = [];
let selectedPiece = null;
let offsetX = 0;
let offsetY = 0;
let repelStrength = 100;

function preload() {
  img = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/art%2074%20final/me.png');
  img2 = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/bbymouth.png');
  img3 = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/blacknose.png');
  img4 = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/art%2074%20final/sillyR.png');
  img5 = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/REar.png');
  img6 = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/cheek.png');
  img7 = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/lcheek.png');
  img8 = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/chin.png');
  img9 = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/underleye.png');
  img10 = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/middleface.png');
  img11 = loadImage('https://raw.githubusercontent.com/alysaphamdesigns/test/main/freehead.png');
}

function setup() {
  createCanvas(600, 600);

  pieces = [
    { img: img11, x: 235, y: 135, w: 50, h: 50, ox: 235, oy: 135, alpha: 255 },
    { img: img10, x: 225, y: 175, w: 125, h: 85, ox: 225, oy: 175, alpha: 255 },
    { img: img9,  x: 198, y: 181, w: 60, h: 30, ox: 198, oy: 181, alpha: 255 },
    { img: img3,  x: 235, y: 170, w: 55, h: 85, ox: 235, oy: 170, alpha: 255 },
    { img: img8,  x: 226, y: 275, w: 100, h: 45, ox: 226, oy: 275, alpha: 255 },
    { img: img7,  x: 198, y: 195, w: 50, h: 100, ox: 198, oy: 195, alpha: 255 },
    { img: img2,  x: 230, y: 250, w: 85, h: 40, ox: 230, oy: 250, alpha: 255 },
    { img: img4,  x: 253, y: 140, w: 83, h: 55, ox: 253, oy: 140, alpha: 255 },
    { img: img5,  x: 370, y: 140, w: 30, h: 60, ox: 370, oy: 140, alpha: 255 },
    { img: img6,  x: 297, y: 200, w: 65, h: 110, ox: 297, oy: 200, alpha: 255 }
  ];

  // Initialize velocities and floating state
  pieces.forEach(p => {
    p.vx = 0;
    p.vy = 0;
    p.floating = false;
  });
}

function draw() {
  background(255);
  tint(255);
  image(img, 0, 0, width, height);

  pieces.forEach(piece => {
    // Repel if not selected
    if (selectedPiece !== piece) {
      let dx = piece.x + piece.w / 2 - mouseX;
      let dy = piece.y + piece.h / 2 - mouseY;
      let distance = dist(mouseX, mouseY, piece.x + piece.w / 2, piece.y + piece.h / 2);

      if (distance < 100) {
        let angle = atan2(dy, dx);
        let repelX = cos(angle) * repelStrength / distance;
        let repelY = sin(angle) * repelStrength / distance;
        piece.x += repelX;
        piece.y += repelY;

        // Start floating
        piece.vx = random(-1, 1);
        piece.vy = random(-1, 1);
        piece.floating = true;
      }
    }

    // Apply floating movement
    if (piece.floating && selectedPiece !== piece) {
      piece.x += piece.vx;
      piece.y += piece.vy;

      // Bounce off edges
      if (piece.x < 0 || piece.x + piece.w > width) piece.vx *= -1;
      if (piece.y < 0 || piece.y + piece.h > height) piece.vy *= -1;
    }

    // Draw the piece
    tint(255, 255, 255, piece.alpha);
    image(piece.img, piece.x, piece.y, piece.w, piece.h);
  });
}

function mousePressed() {
  selectedPiece = null;

  // Check for piece selection (top to bottom)
  for (let i = pieces.length - 1; i >= 0; i--) {
    let p = pieces[i];
    if (
      mouseX > p.x && mouseX < p.x + p.w &&
      mouseY > p.y && mouseY < p.y + p.h
    ) {
      selectedPiece = p;
      offsetX = mouseX - p.x;
      offsetY = mouseY - p.y;
      return;
    }
  }

  // If no piece selected: reset everything
  pieces.forEach(p => {
    p.x = p.ox;
    p.y = p.oy;
    p.vx = 0;
    p.vy = 0;
    p.floating = false;
  });
}

function mouseDragged() {
  if (selectedPiece) {
    selectedPiece.x = mouseX - offsetX;
    selectedPiece.y = mouseY - offsetY;
    selectedPiece.floating = false; // stop floating while dragging
  }
}

function mouseReleased() {
  selectedPiece = null;
}
