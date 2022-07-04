var x = localStorage.getItem('count');

if (x == null){
localStorage.setItem('count','0');}

function contador(){
	var aux = localStorage.getItem('count');
	aux = parseInt(aux);
	aux ++;
	localStorage.setItem('count',aux);
}