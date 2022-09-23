import "../styles/sidebar.css";
import Accordion from "../functions/accordion";

import inboxImage from "../images/inbox.svg";
import todayImage from "../images/today.svg";
import upcomingImage from "../images/upcoming.svg";

const loadSidebar = () => {
  const content = document.querySelector("#content");

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  // Links

  const inboxLink = document.createElement("a");
  const todayLink = document.createElement("a");
  const upcomingLink = document.createElement("a");

  const inbox = document.createElement("span");
  const today = document.createElement("span");
  const upcoming = document.createElement("span");

  const inboxImg = new Image();
  const todayImg = new Image();
  const upcomingImg = new Image();

  inbox.textContent = "Inbox";
  today.textContent = "Today";
  upcoming.textContent = "Upcoming";

  inboxImg.src = inboxImage;
  todayImg.src = todayImage;
  upcomingImg.src = upcomingImage;

  inboxLink.classList.add("sidebar-item");
  todayLink.classList.add("sidebar-item");
  upcomingLink.classList.add("sidebar-item");

  inboxLink.classList.add("inbox-link");
  todayLink.classList.add("today-link");
  upcomingLink.classList.add("upcoming-link");

  inboxLink.appendChild(inboxImg);
  inboxLink.appendChild(inbox);
  todayLink.appendChild(todayImg);
  todayLink.appendChild(today);
  upcomingLink.appendChild(upcomingImg);
  upcomingLink.appendChild(upcoming);

  // Projects

  const projectDetails = document.createElement("details");
  projectDetails.classList.add("project-details");
  projectDetails.classList.add("sidebar-item");

  const detailsSummary = document.createElement("summary");
  detailsSummary.textContent = "Projects";

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projects");

  const defaultProject = document.createElement("a");
  defaultProject.textContent = "Personal";

  projectContainer.appendChild(defaultProject);

  projectDetails.appendChild(detailsSummary);
  projectDetails.appendChild(projectContainer);

  // Add icon

  const addTodoContainer = document.createElement("div");
  addTodoContainer.classList.add("add-todo-container");

  const addTodoButton = document.createElement("button");
  addTodoButton.setAttribute("type", "button");
  addTodoButton.classList.add("add-todo-button");
  addTodoButton.textContent = "+";

  const addTodoText = document.createElement("p");
  addTodoText.textContent = "Add to-do";

  addTodoContainer.appendChild(addTodoText);
  addTodoContainer.appendChild(addTodoButton);

  // Sidebar children

  sidebar.appendChild(inboxLink);
  sidebar.appendChild(todayLink);
  sidebar.appendChild(upcomingLink);
  sidebar.appendChild(projectDetails);
  sidebar.appendChild(addTodoContainer);

  content.appendChild(sidebar);

  // After all DOM elements are created, dd accordion effect
  new Accordion(projectDetails);
};

export default loadSidebar;
