import "../styles/header.css";

function loadHeader() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const labelSpan = document.createElement("span");

  checkbox.setAttribute("type", "checkbox");
  checkbox.id = "sidebar-toggle";
  checkbox.classList.add("sidebar-toggle");

  label.setAttribute("for", "sidebar-toggle");
  label.classList.add("sidebar-toggle-label");

  label.appendChild(labelSpan);

  header.appendChild(checkbox);
  header.appendChild(label);

  content.appendChild(header);
}

export default loadHeader;
