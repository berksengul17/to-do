import "../styles/sidebar.css";
import Accordion from "../functions/accordion";

import inboxImage from "../images/inbox.svg";
import todayImage from "../images/today.svg";
import upcomingImage from "../images/upcoming.svg";
import arrowImage from "../images/right-arrow.svg";

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

  const detailsSummary = document.createElement("summary");
  detailsSummary.textContent = "Projects";

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projects");

  const defaultProject = document.createElement("a");
  defaultProject.textContent = "Personal";
  defaultProject.setAttribute("href", "#");

  projectContainer.appendChild(defaultProject);

  projectDetails.appendChild(detailsSummary);
  projectDetails.appendChild(projectContainer);

  // Sidebar children

  sidebar.appendChild(inboxLink);
  sidebar.appendChild(todayLink);
  sidebar.appendChild(upcomingLink);
  sidebar.appendChild(projectDetails);

  content.appendChild(sidebar);

  // After all DOM elements are created, dd accordion effect
  new Accordion(projectDetails);
};

export default loadSidebar;
