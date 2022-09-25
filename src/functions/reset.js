function reset() {
  const content = document.querySelector("#content");
  content.style = "";

  let lastChild = content.lastElementChild;

  while (lastChild != content.children[1]) {
    content.removeChild(lastChild);
    lastChild.classList.remove("active");
    lastChild = content.lastElementChild;
  }
}

export default reset;
