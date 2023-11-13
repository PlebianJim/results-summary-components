// Creates variables to store json data in.
// links the variable to the value stored in each index position [0] within the "score" section in the json
// updates the DOM by grabbing the element with the named ID and then passing it the value that is stored in the json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const reactionScore = data[0].score;
    const memoryScore = data[1].score;
    const verbalScore = data[2].score;
    const visualScore = data[3].score;
    const resultScore = data[0].score + data[1].score + data[2].score + data[3].score;
    const resultScoreAverage = Math.floor(resultScore / 4);

    document.getElementById("reaction-score").textContent = reactionScore;
    document.getElementById("memory-score").textContent = memoryScore;
    document.getElementById("verbal-score").textContent = verbalScore;
    document.getElementById("visual-score").textContent = visualScore;
    document.getElementById("result-score").textContent = resultScoreAverage;
  });
