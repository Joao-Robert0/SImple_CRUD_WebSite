const count = {
	init : function(){
		var i = localStorage.getItem('count');
		if(i == null)
			localStorage.setItem('count','0');
		document.querySelector("#contador").innerHTML = localStorage.getItem('count');
	},
	add : function(){
		count.init();
		var aux = localStorage.getItem('count');
		aux = parseInt(aux);
		aux ++;
		localStorage.setItem('count',aux);
		document.querySelector("#contador").innerHTML = localStorage.getItem('count');
	},
	minus : function(){
		count.init();
		var aux = localStorage.getItem('count');
		aux = parseInt(aux);
		aux --;
		localStorage.setItem('count',aux);
		document.querySelector("#contador").innerHTML = localStorage.getItem('count');
	},

	reset : function(){
		localStorage.setItem('count','0');
		document.querySelector("#contador").innerHTML = localStorage.getItem('count');
	},
}

window.onload= count.init;
document.querySelector("#add_button").addEventListener("click",count.add);
document.querySelector("#minus_button").addEventListener("click",count.minus);
document.querySelector("#reset_button").addEventListener("click",count.reset);