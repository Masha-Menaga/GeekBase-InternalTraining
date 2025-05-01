let stop = document.querySelector(".stop");
let container = document.querySelector("#container");
let currentBlock = document.querySelector(".block-move");

function handleStop() {
  currentBlock.style.animationPlayState = "paused";

  const currentRect = currentBlock.getBoundingClientRect();
  // const containerRect = container.getBoundingClientRect();

  // const currentLeft = currentRect.left - container.left;

  // currentBlock.style.left = `${currentLeft}px`;

  const previousBlock = container.children[container.children.length - 2];
  if (previousBlock) {
    const previousRect = previousBlock.getBoundingClientRect();

    const overlap =
      Math.min(currentRect.right, previousRect.right) -
      Math.max(currentRect.left, previousRect.left);
    console.log("Overlap:", overlap);

    if (overlap > 0) {
      currentBlock.style.width = `${Math.max(overlap, currentRect.width)}px`;
    } else {
      alert("Game Over!");

      return;
    }
  }

  let newBlock = document.createElement("div");
  newBlock.classList.add("block", "block-move");

  newBlock.style.width = `${currentRect.width}px`;

  let currentBottom = parseInt(getComputedStyle(currentBlock).bottom);
  newBlock.style.bottom = `${currentBottom + 20}px`;

  container.appendChild(newBlock);
  currentBlock = newBlock;
  currentBlock.style.animationPlayState = "running";
}

stop.addEventListener("click", handleStop);
