class Button {

    constructor(x, y, r, id){

        this.x = x;
        this.y = y;
        this.r = r;
        this.id = id;
        this.image = loadImage("images/left.png");

    }

    display(){

        imageMode(CENTER);
        fill(255);
        ellipse(this.x, this.y, this.r);
        image(this.image, this.x, this.y, this.r, this.r)

    }

    update(){

        player.x -= 20;

    }

}