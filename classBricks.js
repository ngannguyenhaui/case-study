let Bricks = function () {
    this.offsetX = 25;
    this.offsetY = 50;
    this.margin = 25;
    this.width = 70;
    this.height = 15;
    this.totalRow = 5;
    this.totalCol = 5;
    this.arrbrick = [];
    this.score = 0;
    this.x;
    this.y;
    this.isbroken = false;
    this.color = 'black';
    this.setX = function (x) {
        this.x = this.offsetX + x * (this.margin + this.width);
    };

    this.getX = function () {
        return this.x;
    };

    this.getStatusbrick = function () {
        return this.isbroken;
    };

    this.setStatusbrick = function (status) {
        this.isbroken = status;
    };

    this.setY = function (y) {
        this.y = this.offsetY + y * (this.margin + this.height);
    };

    this.getY = function () {
        return this.y;
    };

    this.getScore = function () {
        return this.score;
    };

    this.setScore = function (score) {
        this.score += score;
    };

    this.draw = function (context, x, y) {
        context.beginPath();
        context.rect(x, y, this.width, this.height);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();

    };
    this.showScore=function (context) {
        context.font="20px Arial";
        context.fillStyle="orange";
        context.fillText("Score: "+this.getScore(),10,20);
    }

    this.showWin=function (context) {
            context.font="40px Arial";
            context.fillStyle="red";
            context.textAlign="center";
            context.fillText("YOU WIN ",canvas.width/2,canvas.height/2);
    }

};