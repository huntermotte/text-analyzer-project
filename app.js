$('#analyzer').submit(function(event) {
	event.preventDefault();
	var userInput = event.target.userText.value;
	wordCount(userInput);
	uniqueWordCount(userInput);
	avgWordLength(userInput);
})

function wordCount(userInput) {
	$('.text-report').show()
	var result = userInput.split(" ").length;
	$('.wordCountResult').html(result)
}

function uniqueWordCount(words) {
	var wordAppearances = {};
	for (var i = 0; i < words.length; i++) {
		if (words[i] in wordAppearances) {
			wordAppearances[words[i]] = 1
		} 
		else {
			wordAppearances[words[i]]++;
		}
	}
		var uniqueWordCount = 0;
		for (var i in wordAppearances)
		if (wordAppearances[i] == 1) {
			uniqueWordCount++
		}
			$('.uniqueCount').html(uniqueWordCount)
		}

	function avgWordLength(userInput) {
		var wordCount = userInput.split(" ").length;
		var words = userInput.split(" ");
		var wordAvg = 0
		for (var i = 0; i < wordCount; i++) {
			wordAvg += words[i].length;
		}
		var result3 = wordAvg / wordCount;
		$('.avgLength').html(result3)
	}