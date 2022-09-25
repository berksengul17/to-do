import "../styles/inbox.css";

function loadInbox() {
  const content = document.querySelector("#content");
  const inboxContainer = document.createElement("div");
  inboxContainer.classList.add("inbox-container");

  const inboxTitle = document.createElement("h1");
  inboxTitle.textContent = "Inbox";

  const line = document.createElement("div");
  line.classList.add("line");

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");

  inboxContainer.appendChild(inboxTitle);
  inboxContainer.appendChild(line);
  inboxContainer.appendChild(taskContainer);

  content.appendChild(inboxContainer);
}

export default loadInbox;
