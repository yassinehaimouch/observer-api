const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const target = entry.target;
    const box = entry.borderBoxSize[0];
    if (box.blockSize < 150 && box.inlineSize < 150) {
      target.style.borderRadius = "100%";
    } else {
      target.style.borderRadius = "unset";
    }
  }
});

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  observer.observe(box);
});
