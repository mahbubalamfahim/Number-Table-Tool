let numberInput = document.getElementById("numberInput");
let generateButton = document.getElementById("generateButton");
let errorMessage = document.getElementById("errorMessage");
let tableBox = document.getElementById("tableBox");
let tableTitle = document.getElementById("tableTitle");
let tableResult = document.getElementById("tableResult");

generateButton.addEventListener("click", () => {
  if (numberInput.value == "") {
    errorMessage.removeAttribute("hidden");
  } else {
    tableBox.removeAttribute("hidden");
    tableTitle.innerText = "Table of " + numberInput.value;
    for (let i = 1; i < 11; i++) {
      tableResult.innerText +=`${numberInput.value} X ${i}= ${numberInput.value * i}\n`;
    }
  }
});
