document.querySelector('.rule-btn').onclick = function(){
	document.querySelector('.rule-bar').classList.add('show')
}
document.querySelector('.close').onclick = function(){
	document.querySelector('.rule-bar').classList.remove('show')
}
document.addEventListener('click',(e) => {
	if(e.target.classList.contains('control')){}
	else if(e.target.className != 'rule-bar' && e.target.className != 'rule-btn'){
		document.querySelector('.rule-bar').classList.remove('show')
	}
})
document.querySelectorAll('.selections div').forEach(a=>{
	a.addEventListener('click',function(){
		document.querySelector('.choose').classList.add('hide')
		document.querySelector('.result').classList.remove('hide')
	})
})
let divs = document.querySelectorAll('.house-choose .results div');
	randomnum = Math.floor(Math.random() * divs.length)
divs[randomnum].classList.remove('hide')
let divs2 = document.querySelectorAll('.selections div')
divs2.forEach((a,b) => {
	a.addEventListener('click',function(){
		let array = document.querySelectorAll('.you-choose .results div');
		array[b].classList.remove('hide');
		if(b - randomnum == 0){
			document.querySelector('.who-win .draw').classList.remove('hide')
	}else if(b - randomnum == 1 || b - randomnum == -2){
			document.querySelector('.who-win .win').classList.remove('hide')
			document.querySelector('.you-choose .pulse').classList.remove('hide')
			document.querySelector('.num').innerText = parseInt(document.querySelector('.num').innerText) + 1
		}else{
			document.querySelector('.who-win .lose').classList.remove('hide')
			document.querySelector('.house-choose .pulse').classList.remove('hide')
		}
	})
})
document.querySelectorAll('.play-again').forEach(r =>{
	r.addEventListener('click',function(){
	let pulse = document.querySelectorAll('.pulse')
	pulse.forEach(a =>{
	a.classList.add('hide')
	document.querySelectorAll('.results div').forEach(a => {
		a.classList.add('hide')
	})
	document.querySelector('.choose').classList.remove('hide')
		document.querySelector('.result').classList.add('hide')
		document.querySelectorAll('.who-win div').forEach(a =>{
			a.classList.add('hide')
		})
	divs[randomnum].classList.remove('hide')
})
})
})