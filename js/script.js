// heart button functionality
let heartCount = 0;
const heartButtons = document.getElementsByClassName("heart-btn");
for (const btn of heartButtons) {
  btn.addEventListener("click", function () {
    heartCount += 1;
    document.getElementById("heart-cnt").innerText = heartCount;
  });
}
