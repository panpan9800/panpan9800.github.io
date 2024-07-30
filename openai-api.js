const API_KEY = "YOUR_OPENAI_API_KEY";

const MIN_CHAR = 0;
let promptSpan charSpan;

getStylesheet();

document.addEventListener("DOMContentLoaded", function() {

    promptSpan = document.getElementById("prompt");
    promptSpan.addEventListener("input", countCharacters);

    charSpan = document.getElementById("charCount");
    charSpan.innerText = MIN_CHAR.toString();

    const enginesList = document.getElementById("engines");
    const OPENAI_API_ENGINE = "OPENAI_API_ENGINE";
    enginesList.addEventListener('change',(Event)=> {
        let currentEngine = Event.target.value;
        localStorage.setItem(OPENAI_API_ENGINE, currentEngine);
    });
    if (localStorage.getItem(OPENAI_API_ENGINE)) {
        enginesList.value = localStorage.getItem(OPENAI_API_ENGINE);

    }

    typeSentence(":) Hello, how can I help you?", promptSpan, '', false, 100).then(afterTyping => promptSpan.innerHTML = "")
});


/* Function for counting numbers of characters in "promptSpan" */
function countCharacters(){
    const MAX_COUNTER = 280;

    let numEntered = promptSpan.innerText.length.toString();
    
}