let Taskbar = function () {
    this.width = 50;
    this.height = 10;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 50;
    this.speed = 5;
    this.color = 'blue';
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
        if (ball.x + ball.radius >= this.x && ball.x + ball.radius <= this.x + this.width
            && ball.y + ball.radius > this.y && ball.y + ball.radius < this.y + this.height) {
            ball.dy = -ball.dy;

        }
    };
    this.resetTaskbar = function () {
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - 50;
    }
    this.draw = function (context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };

}