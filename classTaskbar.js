const ParameterTaskbar = {
    width: 50,
    height: 10,
    botMargin: 50,
    speed: 5,
    color: 'Blue'

}
let Taskbar = function () {
    this.width = ParameterTaskbar.width;
    this.height = ParameterTaskbar.height;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - ParameterTaskbar.botMargin;
    this.speed = ParameterTaskbar.speed;
    this.color = ParameterTaskbar.color;
    this.isleft = false;
    this.isright = false;
    this.moveLeft = function () {
        if (this.isleft) {
            this.x -= this.speed;
        }
    };

    this.moveRight = function () {
        if (this.isright) {
            this.x += this.speed;
        }

    };

    this.movetaskBar = function () {
        this.moveLeft();
        this.moveRight();
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > canvas.width - this.width) {
            this.x = canvas.width - this.width;
        }
    };

    this.touchBall = function (ball) {
        if (ball.x + ball.radius > this.x && ball.x + ball.radius < this.x + this.width
            && ball.y +ball.radius> this.y && ball.y-ball.radius < this.y + this.height) {
            ball.dy = -ball.dy;


        }
    };
    this.resetTaskbar = function () {
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - ParameterTaskbar.botMargin;
    }
    this.draw = function (context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };

}