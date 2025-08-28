// All count variables
let heartCount = 0;
let copyCount = 0;
let callHistory = [];
// Number of buttons
const numOfCopyButtons = 9;
const numOfCallButtons = 9;
// heart button functionality
const heartButtons = document.getElementsByClassName("heart-btn");
for (const btn of heartButtons) {
  btn.addEventListener("click", function () {
    heartCount++;
    document.getElementById("heart-cnt").innerText = heartCount;
  });
}

// copy button functionality

function copyTextAndIncrement(x) {
  document
    .getElementById("copy-btn" + x)
    .addEventListener("click", function () {
      copyCount++;
      const text = document.getElementById("textToCopy" + x).innerText;
      // Copy it to the clipboard
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Text copied: " + text);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });

      document.getElementById("copy-cnt").innerText = copyCount;
    });
}

for (let i = 1; i <= numOfCopyButtons; i++) {
  copyTextAndIncrement(i);
}

// call button functionality
function callService(x) {
  document.getElementById("call-btn" + x).addEventListener("click", function () {
    const service = document.getElementById("service" + x).innerText;
    const number = document.getElementById("textToCopy" + x).innerText;
    let availableCoins = parseInt(document.getElementById("coin-cnt").innerText);
    if (availableCoins < 20) {
      alert("Insufficient coins to make a call.");
      return;
    }
    alert("📞 Calling " + service + " at " + number);
    availableCoins -= 20;
    document.getElementById("coin-cnt").innerText = availableCoins;
    callHistory.push({ service: service, number: number , time: new Date().toLocaleTimeString()});
  });
}
for (let i = 1; i <= numOfCallButtons; i++) {
  callService(i);
  console.log(callHistory);
}