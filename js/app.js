const titleFolder = document.querySelectorAll(".titleFolder");

titleFolder.forEach((title) => {
  title.addEventListener("click", () => {
    const parentFolder = title.parentElement;
    const subFolder = parentFolder.querySelector(".subFolder");

    parentFolder.classList.toggle("active");

    if (subFolder.style.display === "flex") {
      subFolder.style.display = "none";
    } else {
      subFolder.style.display = "flex";
    }
  });
});

const markdownContent = document.querySelector(".markdown-content");
let data = "/data";
data += "/informatics/osint.md";

fetch(data)
  .then((response) => response.text())
  .then((markdown) => {
    const html = marked(markdown);
    markdownContent.innerHTML = html;
  });

const expandable = markdownContent.querySelector(".expandable");
console.log(expandable);
