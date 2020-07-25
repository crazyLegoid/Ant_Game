class Fruit{

    constructor(x, y, width, height, grav) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.grav = grav;
        this.velY = 0;
        this.upForce = -9.8;
        this.health = 0;
        this.image = loadImage("images/Apple.png");

    }

    display() {

        if(this.health === 0 || this.health === 1){ 

            imageMode(CENTER);
            // fill("#7b9095");
            // rect(this.x, this.y, this.width, this.height);
            image(this.image, this.x, this.y, this.width, this.height);
            
        }

    }


    update() {

        this.velY += this.grav;
        this.y += this.velY;
        
        if (this.y > 335) {
            
            //this.velY += this.upForce;
            this.y = 10;
            this.x = random(200, 800);
            this.velY = 1;

        }
        //console.log(this);
        //i++;     

    }

    isTouching(body) {

        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height) {
            // console.log("Yes");
            
            //body.x = 10;

            this.health = 1;

            this.y = 10;
            this.x = random(200, 800);
            this.velY = 1;

            body.counter++;

            score++;

        }

    }

}