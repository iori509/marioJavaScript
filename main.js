let mario = document.querySelector("#mario");

let bkgPositionX = 0;
let bkgPositionY = 0;

let y = 0;
let left = 0;

let speed = 15;
/*
	width : 200px
	height : 276px

	200 / 4 = 50
	276 / 4 = 69
*/
function animation(){
	bkgPositionX += 50;

	if( bkgPositionX >= 200 ){
		bkgPositionX = 0;
	}

	mario.style.backgroundPosition = bkgPositionX + "px " + bkgPositionY + "px";
}


function rotate(){
	bkgPositionY += 69;

	if( bkgPositionY >= 276 ){
		bkgPositionY = 0;
	}

	console.log( bkgPositionY );
}

/*
	mario.style.left
	mario.style.x
*/

function keyboard( e ){

	if( e.keyCode == 37 ){ //gauche
		bkgPositionY = -69;
		//x--
		left -= speed;
		mario.style.left = left + "px";
	}

	if( e.keyCode == 38 ){ // haut
		bkgPositionY = -207;
		//y--
		y -= speed;
		mario.style.top = y + "px";
	}

	if( e.keyCode == 39 ){ // droite
		bkgPositionY = -138;
		//x++
		left += speed;
		mario.style.left = left + "px";
	}

	if( e.keyCode == 40 ){ // bas
		bkgPositionY = 0;
		//y++
		mario.style.top = y + "px";
		y += speed;
	}
}

setInterval( animation, 250 );

mario.addEventListener("click", rotate );

document.addEventListener("keydown", keyboard);
