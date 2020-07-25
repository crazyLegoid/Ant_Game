class Player{

    constructor(x, y){

        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.yspeed = 0;
        this.grav = 0.1;
        this.upForce = -10;
        this.image = createImage("images/ant.gif");

    }

    display(){

        fill(255);
        rect(this.x, this.y, this.width, this.height);

        push()
        imageMode(CENTER);
        pop();

    }

    update(){

        this.yspeed += this.grav;
        this.y += this.yspeed;

    }

    groundC(){

        if(this.y > 355){

            this.y = 355;

        }

    }

    move(){

        if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {

            this.x -= 5;
            
        }
    
        if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    
            this.x += 7;
    
        }
    
    }

    Jump(){

        this.yspeed += this.upForce;

    }

    stageS(){

        if(basket.counter){

            if(this.x > canvasX){

                this.x = canvasX;
    
            }
    
            if(this.x < 0){
    
                    this.x = 0;

            }
    

        }
        
    }

}

