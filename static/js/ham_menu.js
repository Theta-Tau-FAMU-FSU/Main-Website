const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

let scrollY = 0;

// Freeze the page at its current position
function lockScroll() {
  scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
}

// Restore normal flow and put the user back where they were
function unlockScroll() {
  const y = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, Math.abs(parseInt(y || "0", 10)));
}

hamMenu.addEventListener("click", () => {
  const isOpen = offScreenMenu.classList.toggle("active");
  hamMenu.classList.toggle("active", isOpen);
  if (isOpen) lockScroll();
  else unlockScroll();
});