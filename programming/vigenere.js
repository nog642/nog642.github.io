var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
function allLetters(theString) {
	var isLetter = false;
	for (var i = 0; i < theString.length; i++) {
		isLetter = false;
		for (var j = 0; j < alphabet.length; j++) {
			if (theString.substring(i, (i + 1)) === alphabet[j]) {
				isLetter = true;
			}
		}
		if (!isLetter) {
			theString = theString.substring(0, i) + theString.substring((i + 1), theString.length);
		}
	}
	return theString;
}
function getFullKey(plaintext, key) {
	var fullkey = '';
	var keyPlacement = -1;
	var keyPick = 0;
	for (var i = 0; i < plaintext.length; i++) {
		keyPlacement++;
		for (var j = 0; j < alphabet.length; j++) {
			if (plaintext.substring(i, (i + 1)) === alphabet[j]) {
				keyPick = keyPlacement % key.length;
				fullkey += key.substring(keyPick, (keyPick + 1));
			}
		}
		if ((i + 1) !== fullkey.length) {
			fullkey += plaintext.substring(i, (i + 1));
			keyPlacement--;
		}
	}
	return fullkey;
}
function getCaesar(fullkey) {
	var caesar = [];
	for (var i = 0; i < fullkey.length; i++) {
		for (var j = 0; j < alphabet.length; j++) {
			if (fullkey.substring(i, (i + 1)) === alphabet[j]) {
				caesar[caesar.length] = j;
			}
		}
		if ((i + 1) !== caesar.length) {
			caesar[caesar.length] = fullkey.substring(i, (i + 1));
		}
	}
	return caesar;
}
function getLetters(plaintext) {
	var letters = [];
	for (var i = 0; i < plaintext.length; i++) {
		for (var j = 1; j <= alphabet.length; j++) {
			if (plaintext.substring(i, (i + 1)) === alphabet[j - 1]) {
				letters[letters.length] = j;
			}
		}
		if ((i + 1) !== letters.length) {
			letters[letters.length] = plaintext.substring(i, (i + 1));
		}
	}
	return letters;
}
function getAnswer(newAnswer) {
	var answer = '';
	for (var i = 0; i < newAnswer.length; i++) {
		for (var j = 0; j < alphabet.length; j++) {
			if (newAnswer[i] === (j + 1)) {
				answer += alphabet[j];
			}
		}
		if ((i + 1) !== answer.length) {
			answer += newAnswer[i];
		}
	}
	return answer;
}
function encrypt() {
    var plaintext = document.forms.decipher.plaintextInput.value.toLowerCase();
	var key = document.forms.decipher.keyInput.value.toLowerCase();
	key = allLetters(key);
	var fullkey = getFullKey(plaintext, key);
	var caesar = getCaesar(fullkey);
	var letters = getLetters(plaintext);
	var newAnswer = [];
	for (var i = 0; i < letters.length; i++) {
		if (typeof(letters[i]) === 'number') {
			newAnswer[newAnswer.length] = letters[i] + caesar[i];
		} else {
			newAnswer[newAnswer.length] = letters[i];
		}
		if (newAnswer[i] > 26) {
			newAnswer[i] -= 26;
		}
	}
	var answer = getAnswer(newAnswer);
	document.forms.decipher.answerArea.value = answer;
}
function decrypt() {
    var plaintext = document.forms.cipher.plaintextInput.value.toLowerCase();
	var key = document.forms.cipher.keyInput.value.toLowerCase();
	key = allLetters(key);
	var fullkey = getFullKey(plaintext, key);
	var caesar = getCaesar(fullkey);
	var letters = [];
	for (var i = 0; i < plaintext.length; i++) {
		for (var j = 1; j <= alphabet.length; j++) {
			if (plaintext.substring(i, (i + 1)) === alphabet[j - 1]) {
				letters[letters.length] = j;
			}
		}
		if ((i + 1) !== letters.length) {
			letters[letters.length] = plaintext.substring(i, (i + 1));
		}
	}
	var newAnswer = [];
	for (var i = 0; i < letters.length; i++) {
		if (typeof(letters[i]) === 'number') {
			newAnswer[newAnswer.length] = letters[i] - caesar[i];
			if (newAnswer[i] < 1) {
				newAnswer[i] += 26;
			}
		} else {
			newAnswer[newAnswer.length] = letters[i];
		}
	}
	var answer = getAnswer(newAnswer);
	document.forms.cipher.answerArea.value = answer;
}