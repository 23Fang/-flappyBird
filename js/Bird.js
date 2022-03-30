const birdDom = document.querySelector(".bird");
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdTop = parseFloat(birdStyles.top);
const birdLeft = parseFloat(birdStyles.left);
const gameDom = document.querySelector(".game");
const gameHeight = gameDom.clientHeight;


class Bird extends Rectangle {
  constructor() {
    super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, birdDom);
    this.g = 1500;//重力加速度，向下
    this.maxY = gameHeight - landHeight - this.height;
    this.swingStatus = 1;//小鸟的翅膀为1
    this.timer = null;//翅膀煽动的计时器
  }

  //开始煽动
  startSwing() {
    if (this.timer) {
      return;
    }
    this.timer = setInterval(() => {
      this.swingStatus++;
      if (this.swingStatus === 4) {
        this.swingStatus = 1;
      }
      this.render();
    }, 300)
  }

  render() {
    super.render();//重用父类的渲染逻辑
    this.dom.className = `bird swing${this.swingStatus}`;
  }

  //停止煽动
  stopSwing() {
    this.timer = null;
    clearInterval(this.timer);
  }


  move(duration) {//重新定义move()
    super.move(duration);
    this.ySpeed += this.g * duration;
  }


  onMove() {
    if (this.top < 0) {
      this.top = 0;
    }
    else if (this.top > this.maxY) {
      this.top = this.maxY;
    }
  }

  //直接给向上的速度
  jump() {
    this.ySpeed = -550;
  }

}
