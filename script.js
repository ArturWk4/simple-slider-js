let imageSize = 512;
let shiftAmount = 0;
let shiftInterval;

function shiftRight () {
	let row = document.getElementById('row');
	if(shiftAmount == -(imageSize*4)) {
		shiftAmount = 0;
	} else {
		shiftAmount -= imageSize;
	}
	row.style.left = shiftAmount + 'px';
}

function shiftLeft () {
	let row = document.getElementById('row');
	if(shiftAmount == 0) {
		shiftAmount = -imageSize*4;
	} else {
		shiftAmount += imageSize;
	}
	row.style.left = shiftAmount + 'px';
}

function shiftOn() {
	shiftInterval = setInterval(shiftRight, 2200);
	document.getElementById('on').style.display = 'none';
	document.getElementById('off').style.display = 'block';
}

function shiftOff() {
	clearInterval(shiftInterval);
	document.getElementById('off').style.display = 'none';
	document.getElementById('on').style.display = 'block';
}


document.getElementById('button-right').addEventListener('click', shiftRight);
document.getElementById('button-left').addEventListener('click', shiftLeft);
document.getElementById('on').addEventListener('click', shiftOn);
document.getElementById('off').addEventListener('click', shiftOff);
