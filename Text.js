const ParameterTextLive = {
    leftMargin: 400,
    topMargin: 20
};
const ParameterTextScore = {
    marginLeft: 10,
    marginTop: 20
};
let Text = function () {
    this.showLive = function (context, ball) {
        context.font = "20px Arial";
        context.fillStyle = "#CD853F";
        context.fillText("Live: " + ball.getlive(), ParameterTextLive.leftMargin, ParameterTextLive.topMargin);
    };
    this.showgameOver = function (context, ball) {
        if (ball.getlive() <= 0) {
            context.font = "40px Arial";
            context.fillStyle = "red";
            context.textAlign = "center";
            context.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);
        }
    };
    this.showScore = function (context, brick) {
        context.font = "20px Arial";
        context.fillStyle = "#CD853F";
        context.fillText("Score: " + brick.getScore(), ParameterTextScore.marginLeft, ParameterTextScore.marginTop);
    };
    this.showWin = function (context) {
        context.font = "40px Arial";
        context.fillStyle = "red";
        context.textAlign = "center";
        context.fillText("YOU WIN ", canvas.width / 2, canvas.height / 2);
    }
};