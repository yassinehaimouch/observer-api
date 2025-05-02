const list = document.getElementById("content");
const SUPPORTED_ELEMENTS = new Set(["/h1", "/h2", "/h3"]);

const getHeading = (node) => {
  let element;
  if (node.textContent.startsWith("/h1")) {
    element = document.createElement("h1");
  } else if (node.textContent.startsWith("/h2")) {
    element = document.createElement("h2");
  } else if (node.textContent.startsWith("/h3")) {
    element = document.createElement("h3");
  } else {
    return node;
  }

  element.textContent = node.textContent.slice(3);
  element.setAttribute("contenteditable", "true");
  element.textContent =
    element.textContent === "" ? "Heading!" : element.textContent;
  return element;
};

let observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const { target, type } = mutation;
    if (type === "characterData") {
      const prefix = Array.from(SUPPORTED_ELEMENTS).find((el) =>
        target.textContent.startsWith(el)
      );
      if (prefix) {
        const element = getHeading(target);
        target.replaceWith(element);
        element.focus();
      }
    }
  });
});
observer.observe(list, {
  characterData: true,
  subtree: true,
});
