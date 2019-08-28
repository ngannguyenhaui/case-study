const ParameterBall = {
    radius: 5,
    live: 3,
    dxBall: 3,
    dyBall: 3,
    heightBall: 60,
    color: 'red'
};
const ParameterTextLive = {
    leftMargin: 400,
    topMargin: 20
};
let Ball = function () {
    this.x = canvas.width / 2;//toa do theo truc X
    this.radius = ParameterBall.radius;//ban kinh
    this.y = canvas.height - ParameterBall.heightBall - this.radius;//toa do theo truc Y
    this.dx = ParameterBall.dxBall;//delta x
    this.dy = ParameterBall.dyBall;//delta y
    this.color = ParameterBall.color;
    this.live = ParameterBall.live;
    this.moveX = function () {
        this.x -= this.dx;
    };

    this.moveY = function () {
        this.y -= this.dy;
    };

    this.moveball = function () {
        this.moveX();
        this.moveY();
        if (this.x < this.radius || this.x > canvas.width - this.radius) {
            this.dx = -this.dx;
        }
        if (this.y < this.radius) {
            this.dy = -this.dy;
        }
    };
//ve hinh tron
    this.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };
//so luot choi
    this.liveBall = function () {
        if (this.y + this.radius > canvas.height) {
            this.live--;
            this.resetBall();
        }
    };
    this.getlive = function () {
        return this.live;
    }
    this.resetBall = function () {
        this.x = canvas.width / 2;
        this.y = canvas.height - ParameterBall.heightBall - this.radius;
        this.dx = ParameterBall.dxBall;
        this.dy = ParameterBall.dyBall;
    };

    this.showLive = function (context) {
        context.font = "20px Arial";
        context.fillStyle = "orange";
        context.fillText("Live: " + this.getlive(), ParameterTextLive.leftMargin, ParameterTextLive.topMargin);
    }
    this.showgameOver = function (context) {
        if (this.getlive() <= 0) {
            context.font = "40px Arial";
            context.fillStyle = "red";
            context.textAlign = "center";
            context.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);
        }
    }
};

