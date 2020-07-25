class Seed{

    constructor(x,y){

        this.x = x;
        this.y = y;
        this.width = 15;
        this.height = 20;
        this.health = 0;
        this.bool = true;

    }

    display(){

        if (this.health === 0) {
            
            fill(255);
            rect(this.x, this.y, this.width, this.height);

        }
    }

    isTouching(body){

        if (body.x > this.x - this.width
            && body.x < this.x + this.width
            && body.y > this.y - this.height
            && body.y < this.y + this.height && this.bool === true) {
         
            this.health = 1;

            if(this.health === 1){

                score++;
                this.bool = false;

            }
            
        }

    }

}