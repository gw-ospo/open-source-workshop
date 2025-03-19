const getPictures = () => {
  {% assign image_files = site.static_files | where: "image", true %}
  let photoArray = [];
  {% for file in image_files %}
  photoArray.push('{{ site.url }}{{ site.baseurl }}{{ file.path }}');
  {% endfor %}
  return photoArray;
}

// p5js photo Animation
let unformattedPhotos = getPictures();
let photos = [];

let imgX;
let imgY;
let contribs = [];

function preload() {
  unformattedPhotos.forEach((x) => {
    let img = loadImage(x);
    photos.push(img);
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  photos.forEach((x) => {
    imgX = random(0, width-1);
    imgY = random(0, height-1);
    contribs.push(new Photo(x, imgX, imgY));
  });
}

function draw() {
  background(0, 115, 170);
  for (let i = 0; i < contribs.length; i++) {
    contribs[i].drawImg();
    contribs[i].moveImg();
    contribs[i].checkBoundary();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

console.log('test');