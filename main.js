let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let isGameover = false;
let ball = new Ball();
let taskbar = new Taskbar();
let bricks = new Bricks();
let brickarr = [];
let img = new Image();
for (let i = 0; i < bricks.totalRow; i++) {
    brickarr[i] = [];
    for (let j = 0; j < bricks.totalCol; j++) {
        brickarr[i][j] =
            {
                x: bricks.getX(bricks.setX(j)),
                y: bricks.getY(bricks.setY(i)),
                isbroken: bricks.getStatusbrick()
            }


    }
}

function createBrick() {
    for (let i = 0; i < bricks.totalRow; i++) {
        for (let j = 0; j < bricks.totalCol; j++) {
            if (!brickarr[i][j].isbroken) {
                bricks.draw(ctx, brickarr[i][j].x, brickarr[i][j].y);
            }
        }
    }

}


function balltouchbricks() {
    for (let i = 0; i < bricks.totalRow; i++) {
        for (let j = 0; j < bricks.totalCol; j++) {
            if (!brickarr[i][j].isbroken) {

                if (ball.x >= brickarr[i][j].x && ball.x <= brickarr[i][j].x + bricks.width &&
                    ball.y + ball.radius >= brickarr[i][j].y && ball.y - ball.radius <= brickarr[i][j].y + bricks.height) {
                    ball.dy = -ball.dy;
                    bricks.getScore(bricks.setScore(1));
                    brickarr[i][j].isbroken = true;
                }
            }
        }
    }
}

function onKeyup(event) {
    switch (event.which) {
        case 37:
            taskbar.isleft = false;
            break;
        case 39:
            taskbar.isright = false;
            break;
        default:
            break;
    }
}

function onKeydown(event) {
    switch (event.which) {
        case 37:
            taskbar.isleft = true;
            break;
        case 39:
            taskbar.isright = true;
            break;
        default:
            break;
    }
}

document.addEventListener('keyup', onKeyup);
document.addEventListener('keydown', onKeydown);

function checkGameover() {
    if (ball.y > canvas.height - ball.radius) {
        ball.liveBall();
        taskbar.resetTaskbar();
        if (ball.getlive() <= 0) {
            isGameover = true;
            ball.showgameOver(ctx);
        }

    }
}

function playGame() {
    if (!isGameover) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        img.src = "image/totoro.jpeg";
        ctx.drawImage(img, 0, 0, 500, 600);
        ball.draw(ctx);
        taskbar.draw(ctx);
        ball.moveball();
        taskbar.movetaskBar();
        createBrick();
        taskbar.touchBall(ball);
        balltouchbricks();
        bricks.showScore(ctx);
        ball.showLive(ctx);
        bricks.showWin(ctx);
        checkGameover();
        requestAnimationFrame(playGame);
    }

}

