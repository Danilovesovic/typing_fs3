var textArr = ["Danas je divan dan", "Sutra je cetvrtak", "Vikend je blizu !"],
	startBtn = document.getElementById('startBtn'),
	textRow = document.querySelector('#textRow'),
	pl1Area = document.querySelector('#pl1Area'),
	pl2Area = document.querySelector('#pl2Area'),
	pl3Area = document.querySelector('#pl3Area'),
	pl4Area = document.querySelector('#pl4Area'),
	pl1Btn = document.querySelector('#pl1Btn'),
	pl2Btn = document.querySelector('#pl2Btn'),
	pl3Btn = document.querySelector('#pl3Btn'),
	pl4Btn = document.querySelector('#pl4Btn'),
	mainDisplay = document.querySelector('#mainDisplay'),
	trueText = "",
	finish = 0;

startBtn.addEventListener('click', startClock);


function startClock() {
	console.log(this);
	var time = 5;
	var loop = setInterval(() => {
		time--;
		if (time != 0) {
			startBtn.innerHTML = time;
		} else {
			clearInterval(loop); // 
			this.style.display = "none";
			startGame();
		}
	}, 1000)
}


function startGame() {
	randomizeText();
	textRow.style.display = "block";
	pl1Area.focus();
	bot1Start();
	bot2Start();
	bot3Start();
	playerStart();
}

function randomizeText() {
	var rand = Math.floor(Math.random() * textArr.length);
	trueText = textArr[rand];
	mainDisplay.innerHTML = trueText;

}

function bot1Start() {
	var copyText = trueText.split("");

	function yyy() {
		let rand = Math.floor(Math.random() * (500 - 30) + 30);
		pl2Area.value += copyText.shift();
		if (copyText.length != 0) {
			setTimeout(yyy, rand)
		} else {
			finish++;
			pl2Btn.innerHTML = "Possition : " + finish;
			pl2Btn.className = "btn btn-success form-control";
		}

	}
	yyy();


}

function bot2Start() {
	var copyText = trueText.split("");

	var loop = setInterval(function() {
		if (copyText.length != 0) {
			pl3Area.value += copyText.shift();
		} else {
			finish++;
			pl3Btn.innerHTML = "Possition : " + finish;
			pl3Btn.className = "btn btn-success form-control";
			clearInterval(loop)
		}
	}, 400)
}

function bot3Start() {
	var copyText = trueText.split("");

	var loop = setInterval(function() {
		if (copyText.length != 0) {
			pl4Area.value += copyText.shift();
		} else {
			finish++;
			pl4Btn.innerHTML = "Possition : " + finish;
			pl4Btn.className = "btn btn-success form-control";
			clearInterval(loop)
		}
	}, 500)
}

function playerStart() {
	pl1Area.addEventListener('keyup', function(e) {
		if (e.keyCode == 13) {
			if (this.value.trim() == trueText) {
				finish++;
				pl1Btn.innerHTML = "Possition : " + finish;
				pl1Btn.className = "btn btn-success form-control";
			} else {
				pl1Btn.innerHTML = "Wrong text";

				pl1Btn.className = "btn btn-danger form-control";
			}
		}
	})
}