class Photo {
  constructor(img, x, y, direction, r, g, b){
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.dx = 2;
    this.dy = 3;
    this.img = img;
    this.trail = [];
    this.changePlaces = false;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  drawTrail() {
    let particleW = 0;
    let particleH = 0;
    const v = createVector(this.x, this.y);
    this.trail.push(v);
    console.log(this.trail.length);
    if (this.trail.length >= width/15) {
      this.trail.splice(0, 1);
    }

    for (let i = 0; i < this.trail.length; i++) {
      let pos = this.trail[i];
      rectMode(CENTER);
      fill(this.r, this.g, this.b);

      if (particleW < this.img.width) {
        if (particleW < (this.img.width - 4)) {
          particleW += 4;
        } else {
          particleW ++;
        }
      }

      if (particleH < this.img.height) {
        if (particleH < (this.img.height - 4)) {
          particleH += 4;
        } else {
          particleH ++;
        }
      }
      fill(this.r, this.g, this.b);
      rect(pos.x, pos.y, particleW, particleH);
    }
  }
  
  drawImg() {
    if (this.img.width > this.img.height) {
      this.img.resize(width/4, 0);
    } else if (this.img.height >= this.img.width) {
      this.img.resize(0, height/3);
    }
    image(this.img, this.x, this.y);
  }
  
  moveImg() {
    if (this.direction % 2 == 0) {
      this.x = this.x + this.dx;
      this.y = this.y + this.dy;
    } else {
      this.x = this.x - this.dx;
      this.y = this.y - this.dy;
    }
    if (this.y > 50 && this.y < (height - 50)) {
      this.dy += 0.1;
    }
  }
  
  checkBoundary() {
    if (this.x > width || this.x < 0){
      this.dx = this.dx * -1;
      this.changePlaces = true;
    }
    if (this.y > height || this.y < 0){
      this.dy = this.dy * -1;
      this.changePlaces = true;
    }
  }
}