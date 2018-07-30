let imageSize = 512;
let shiftAmount = 0;

function buttonShiftLeft () {
	let row = document.getElementById('row');
	if(shiftAmount == -(imageSize*4)) {
		shiftAmount = 0;
	} else {
		shiftAmount -= imageSize;
	}
	row.style.left = shiftAmount + 'px';
}

function buttonShiftRight() {
	let row = document.getElementById('row');
	if(shiftAmount == 0) {
		shiftAmount = -imageSize*4;
	} else {
		shiftAmount += imageSize;
	}
	row.style.left = shiftAmount + 'px';
}

document.getElementById('button-left').addEventListener('click', buttonShiftLeft);
document.getElementById('button-right').addEventListener('click', buttonShiftRight);