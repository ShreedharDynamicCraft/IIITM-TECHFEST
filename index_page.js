document.addEventListener("DOMContentLoaded", function() {
    var specialTextElements = document.body.getElementsByClassName('editable_text');
    var words = ["CODE", "CONQUER","CELEBRATE"];
    var currentWordIndex = 0;
    var currentLetterIndex = 0;

    function updateText(element) {
        element.textContent = words[currentWordIndex].substring(0, currentLetterIndex + 1);
        currentLetterIndex++;

        if (currentLetterIndex > words[currentWordIndex].length) {
            currentLetterIndex = 0;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(function() {
                updateText(element);
            }, 1000);
        } else {
            // Continue showing the letters
            setTimeout(function() {
                updateText(element);
            }, 150);
        }
    }

    // Apply the animation to each element with the class 'editable_text'
    for (var i = 0; i < specialTextElements.length; i++) {
        updateText(specialTextElements[i]);
    }
});
