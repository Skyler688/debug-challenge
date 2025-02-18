// make sure these match the HTML element names for the ID then class.
let input = document.querySelector("#name");
let display = document.querySelector(".display");

// This code should be working
input.addEventListener("input", function () {
  const name = input.value;
  display.textContent = name;
});

// added to clear input and .display
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    input.value = "";
    display.textContent = "";
  }
});

// missing function?
function simpleMath(a, b) {
  return a + b;
}

// you should see 5 in the output of your console
console.log(simpleMath(2, 3));
