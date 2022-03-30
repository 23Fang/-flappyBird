/**
 *矩形类，可以移动
 *属性：宽度，高度，横坐标，纵坐标，横向速度，纵向速度，对应的dom对象
 * 横向速度xSpeed 单位：像素/秒,   
 * 纵向速度ySpeed 单位：像素/秒
 * @class Rectangle
 */
class Rectangle {
  constructor(width, height, left, top, xSpeed, ySpeed, dom) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.dom = dom;
    this.render();
  }


  render() {
    this.dom.style.width = this.width + 'px';
    this.dom.style.height = this.height + 'px';
    this.dom.style.left = this.left + 'px';
    this.dom.style.top = this.top + 'px';
  }


  /**
 *
 * @param {*} duration 单位，秒
 */
  move(duration) {
    const disX = this.xSpeed * duration;
    const disY = this.ySpeed * duration;
    this.left = this.left + disX;
    this.top = this.top + disY;

    if (this.onMove) {
      this.onMove();//判断是否有onmove这个方法，有的话在渲染前调用它
    }
    this.render();//重新渲染
  }
}