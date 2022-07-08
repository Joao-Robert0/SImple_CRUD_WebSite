var x = localStorage.getItem('count');

if (x == null){
localStorage.setItem('count','0');}

function plus_cont(){
	var aux = localStorage.getItem('count');
	aux = parseInt(aux);
	aux ++;
	localStorage.setItem('count',aux);
}

function minus_cont(){
	var aux = localStorage.getItem('count');
	aux = parseInt(aux);
	aux --;
	localStorage.setItem('count',aux);
}

function z_cont(){
	localStorage.setItem('count','0');
}