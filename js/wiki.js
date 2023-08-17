const hButton = document.querySelector(".hButton");
const summary = document.querySelector(".summary");
const mdContent = document.querySelector(".contents");

let isContentVisible = true;

hButton.addEventListener("click", () => {
  if (isContentVisible) {
    mdContent.style.display = "none";
    summary.style.display = "block";
    summary.style.margin = "10px";
  } else {
    mdContent.style.display = "block";
    summary.style.display = "none";
    summary.style.margin = "10px 0 10px 10px";
  }

  isContentVisible = !isContentVisible; // Inverser l'état
});
