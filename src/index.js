import "./styles/common.css";
import reset from "./functions/reset.js";
import sidebar from "./pages/sidebar.js";
import header from "./pages/header.js";
import inbox from "./pages/inbox.js";
import today from "./pages/today.js";
import upcoming from "./pages/upcoming.js";

// Initial call
header();
sidebar();
inbox();

const inboxLink = document.querySelector(".inbox-link");
const todayLink = document.querySelector(".today-link");
const upcomingLink = document.querySelector(".upcoming-link");

inboxLink.addEventListener("click", () => {
  reset();
  inbox();
  inboxLink.classList.add("active");
});

todayLink.addEventListener("click", () => {
  reset();
  today();
  todayLink.classList.add("active");
});

upcomingLinkaddEventListener("click", () => {
  reset();
  upcoming();
  upcomingLink.classList.add("active");
});
