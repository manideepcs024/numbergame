var numOne = document.getElementById('first-number');
var numTwo = document.getElementById('second-number');
var numThird = document.getElementById('third-number');
var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');
var chosenumber = document.getElementById('chosenumber');
var mynumber = document.getElementById('mynumber');
var selectNumber = document.getElementById('selectNumber');
var score = document.getElementById('score');
var gameStarted = false;
var nums;
let scoreval = 0;
let chosenNumber;

function randomNumbers() {
	var arr = [];
	while (arr.length < 3) {
		var r = Math.floor(Math.random() * 9) + 0;
		if (arr.indexOf(r) === -1) arr.push(r);
	}
	return arr;
}
function clearall() {
	numOne.innerHTML = '';
	numTwo.innerHTML = '';
	numThird.innerHTML = '';
	mynumber.innerHTML = '';
}
function insertNumbers() {
	let randomNumb = randomNumbers();
	numOne.innerHTML = randomNumb[0];
	numTwo.innerHTML = randomNumb[1];
	numThird.innerHTML = randomNumb[2];
}
function checkNumber(e) {
	chosenNumber = e.target.innerHTML;
	if (!gameStarted)
		mynumber.innerHTML = chosenNumber;
}
function selecNumberCheck(e) {
	let sel = e.target.innerHTML;
	if (sel == chosenNumber) {
		scoreval = scoreval + 4
		setScore(scoreval);
	} else {
		scoreval = scoreval - 3;
		setScore(scoreval);
	}

}
function setScore(val) {
	score.innerHTML = val;
}
function startGame() {
	if (!chosenNumber) {
		alert('select Number');
		return;
	}
	nums = setInterval(insertNumbers, 2000);
	setScore(0);
	gameStarted = true;

}
function stopGame() {
	clearInterval(nums);
	clearall();
	gameStarted = false;
	chosenNumber = null;
}

startBtn.addEventListener('click', startGame);
stopBtn.addEventListener('click', stopGame);
chosenumber.addEventListener('click', checkNumber);
selectNumber.addEventListener('click', selecNumberCheck);




