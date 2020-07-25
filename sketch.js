var player;
var ground;
var canvasX, canvasY;
var bg1;
var gif;
var seed1, seed2, seed3;
var score = 0;
var tree1, tree2, tree3;
var stage = 2;
var Btree;
var fruit1;
var basket;
var gameState = false;

var buttonL, buttonR;

function preload() {

    //bg = loadImage("images/Bg1.png");

}

function setup() {

    canvasX = 800;
    canvasY = 400;
    createCanvas(canvasX, canvasY);
    player = new Player(200, 0);
    ground = new Ground(canvasX / 2, 390, canvasX, 200);
    seed1 = new Seed(canvasX / 2, 360);
    seed2 = new Seed(canvasX / 2 - 300, 360);
    seed3 = new Seed(canvasX / 2 + 200, 360);

    tree1 = new Tree(canvasX / 2, 210, 820 / 3, 1082 / 3)
    tree2 = new Tree(canvasX / 3, 220, 820 / 4, 1082 / 4)
    tree3 = new Tree(canvasX, 200, 820 / 4, 1082 / 4)
    Btree = new Tree(canvasX / 2, canvasY - 500, 1000, 1020)
    fruit1 = new Fruit(300, 10, 50, 50, 0.1);

    basket = new Basket(400, 370, 70, 40)
    // buttonL = new Button(40, 350, 100);
    // buttonR = new ButtonR(730, 350, 100);



    gif = createImg("images/ant-t.gif");

}

function draw() {

    background("#00A2E8");
    player.update();
    player.groundC();
    player.move();
    player.stageS();


    ground.display();

    follow();
    movePlayer();

    if (gameState === true) {
        player.x = 20;
        basket.x = displayWidth/2;
        basket.y = 370;

        //console.log("hoi")

        gameState = false;


    }

    if (stage === 1) {

        // buttonL.display();
        // buttonR.display();

        // buttonL.update("left");
        // buttonR.update("right");

        tree3.display();

        tree2.display();

        player.display();

        tree1.display();

        seed1.display();
        seed1.isTouching(player);

        seed2.display();
        seed2.isTouching(player);

        seed3.display();
        seed3.isTouching(player);


    }

    if (stage === 2) {

        // buttonL.display();
        // buttonR.display();

        // buttonL.update("left");
        // buttonR.update("right");

        push()
        fill("red")
        text("Collect 4 fruits to continue!!!!", 500, 80)
        pop()

        Btree.display();

        fruit1.display();
        fruit1.update();
        fruit1.isTouching(basket);
        basket.display();
        basket.update(player);

        if (score >= 10 && gameState === false) {

            text("Congrats!! You have got 10 points!!!", displayWidth / 2, displayHeight / 2);
            text("Touch basket to restart!!", displayWidth / 2, displayHeight / 2 + 40);

            score = 10;

            gameState = true;

        }

    }

    textSize(20)
    text("Your score is " + score, 500, 100);
    text(deviceOrientation, 700, 120);

    //print(deviceOrientation);

}

function keyPressed() {


    if (key === " ") {

        player.Jump();

    }


}

function follow() {

    push()
    imageMode(CENTER)
    gifX = player.x - 20;
    gifY = player.y - 50;
    gifW = player.width;
    gifH = player.height;

    gif.position(gifX, gifY);
    pop()

}

// function mouseClicked(){

//     buttonL.update();
//     buttonR.update();

// }

function movePlayer() {

    const dx = constrain(rotationY, -7, 7);
    player.x += dx;

}

function mouseClicked(){

    basket.clicked();

}