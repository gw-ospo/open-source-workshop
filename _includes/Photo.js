class Photo {
  constructor(img, x, y){
    this.x = x;
    this.y = y;
    this.dx = 2;
    this.dy = 3;
    this.img = img;
  }
  
  drawImg() {
    this.img.resize(width/4, 0);
    this.img.filter(POSTERIZE);
    tint(255, 200);
    image(this.img, this.x, this.y);
  }
  
  moveImg() {
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
  
  checkBoundary() {
    if (this.x > width || this.x < 0){
      this.dx = this.dx * -1 - 1;
    }
    if (this.y > height || this.y < 0){
      this.dy = this.dy * -1 - 1;
    }
  }
}