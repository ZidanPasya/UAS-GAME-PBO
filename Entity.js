class Entity{
    constructor(height, width, x, y){
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }

    attack(){

    }
    moveRight(){
        if(keyIsDown(68)){
            this.x += 1
        }
    }
    moveLeft(){
        if(keyIsDown(65)){
            this.x -= 1
        }
    }
    moveDown(){
        if(keyIsDown(87)){
            this.y += 1
        }
    }
    moveUp(){
        if(keyIsDown(87)){
            this.x += 1
        }
    }
}