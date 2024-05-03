const userInput = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output");

userInput.addEventListener("input", () => {
    const handleInput = userInput.value.trim();
  userOutput.textContent = handleInput || 'Anonymous';
});


