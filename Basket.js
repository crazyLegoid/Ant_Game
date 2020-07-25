class Basket {

    constructor(x, y, width, height) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = 0;
        this.counter = 4;
        this.image = loadImage("images/Basket.png");

    }

    display() {

        if (this.health === 0) {

            imageMode(CENTER);
            // fill(255);
            // rect(this.x, this.y, this.width, this.height);
            image(this.image, this.x, this.y, this.width, this.height);

        }

    }

    update(body) {

        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height) {
            // console.log("Yes");

            //this.health = 1;
            this.x = body.x - 10;
            this.y = body.y - 30;

        }

        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height && score === 10) {
            // console.log("Yes");

            //this.health = 1;
            this.x = body.x - 10;
            this.y = body.y - 30;
            score = 0;

        }

    }

    clicked(){

        if(gameState === true){

            player.x = 20;
            basket.x = displayWidth/2;
            basket.y = 370;
            score = 0;

        }

    }

}