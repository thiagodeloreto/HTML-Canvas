window.onload = function(){

    const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    let cnv = document.querySelector("canvas");
    let ctx = cnv.getContext("2d");
    const spriteSheet = new Image();
    spriteSheet.src = "img/img.png";
    const scene = new Image();
    scene.src = "img/scene.png";
    const personagem = new Sprite(spriteSheet);

    window.addEventListener("keydown", apertarSeta);
    window.addEventListener("keyup", soltarSeta);

    function apertarSeta(event){
        switch (event.keyCode) {
            case RIGHT:
                personagem.mvRight = true;
                personagem.mvLeft = false;
                personagem.mvUp = false;
                personagem.mvDown = false;
                break;
            case LEFT:
                personagem.mvRight = false;
                personagem.mvLeft = true;
                personagem.mvUp = false;
                personagem.mvDown = false;
                break;
            case UP:
                personagem.mvRight = false;
                personagem.mvLeft = false;
                personagem.mvUp = true;
                personagem.mvDown = false;
                break;
            case DOWN:
                personagem.mvRight = false;
                personagem.mvLeft = false;
                personagem.mvUp = false;
                personagem.mvDown = true;
                break;
        }
    }

    function soltarSeta(event){
        switch (event.keyCode) {
            case RIGHT:
                personagem.mvRight = false;
                break;
            case LEFT:
                personagem.mvLeft = false;
                break;
            case UP:
                personagem.mvUp = false;
                break;
            case DOWN:
                personagem.mvDown = false;
                break;
        }
    }

    spriteSheet.onload = () => {
        init();
    }

    function init(){
        personagem.posX = 150;
        personagem.posY = 150;
        loop();
    }

    function update(){
       personagem.move();
    }

    function draw(){
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        ctx.drawImage(scene, 0, 0, scene.width, scene.height, 0,
            0, cnv.width, cnv.height);
        personagem.draw(ctx);
    }


    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        draw();
    }
}