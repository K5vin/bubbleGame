const counterDisplay = document.querySelector("h2");
let count = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 100 + 200 + "px";

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 30 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  let plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * plusMinus * 100 + "%");

  setTimeout(() => {
    bubble.remove();
  }, 8000);

  bubble.addEventListener("click", () => {
    bubble.remove();
    count++;
    mainCount.textContent = count;
  });
};

setInterval(() => {
  bubbleMaker();
}, 4000);
