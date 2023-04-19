class Sprite {
    constructor(img) {
        //Atributos 
        this.srcX = 0;
        this.srcY = 0;

        this.width = 24;
        this.height = 32;

        this.posX = 0;
        this.posY = 0;

        this.img = img;

        this.mvRight = false;
        this.mvLeft = false;
        this.mvUp = false;
        this.mvDown = false;

        this.speed = 5; 

        this.countAnimacao = 0;
    }
    
    //Métodos
    draw(ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX,
            this.posY, this.width, this.height);
            this.animation();
    }

    move(){
        if(this.mvRight){
            this.posX += this.speed;
            this.srcY = this.height * 3; 
        }else if(this.mvLeft){
            this.posX -= this.speed;
            this.srcY = this.height * 2; 
        }else if(this.mvUp){
            this.posY -= this.speed;
            this.srcY = this.height * 1;
        }else if(this.mvDown){
            this.posY += this.speed;
            this.srcY = this.height * 0;
        }
    }

    animation(){
        if(this.mvRight || this.mvLeft || this.mvUp || this.mvDown){
            this.countAnimacao++;
            if(this.countAnimacao >= 40){
                this.countAnimacao = 0;
            }
        }
        this.srcX = Math.floor(this.countAnimacao / 5) * this.width;
    }
}