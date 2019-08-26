let Ball = function () {
    this.x = canvas.width / 2;
    this.radius = 5;
    this.y = canvas.height - 60 - this.radius;
    this.dx = Math.floor(Math.random()*5+1);
    this.dy = Math.floor(Math.random()*5+1);
    this.color = 'red';
    this.live = 3;
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

    this.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };

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
        this.y = canvas.height - 60 - this.radius;
        this.dx = Math.floor(Math.random()*5+1);
        this.dy = Math.floor(Math.random()*5+1);
    };

    this.showLive=function (context) {
        context.font="20px Arial";
        context.fillStyle="orange";
        context.fillText("Live: "+this.getlive(),400,20)
    }
    this.showgameOver=function (context) {
        if(this.getlive()<=0)
        {
            context.font="40px Arial";
            context.fillStyle="red";
            context.textAlign="center";
            context.fillText("GAME OVER!",canvas.width/2,canvas.height/2);
        }
    }
};

