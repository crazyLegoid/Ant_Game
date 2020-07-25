class Tree{

    constructor(x, y, width, height){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/tree1.png");

    }

    display(){

        imageMode(CENTER);
        fill(255);
        rect(this.x, this.y, 50, 50);
        image(this.image, this.x, this.y, this.width, this.height);

    }

}