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

    const summary = document.querySelectorAll("summary");

    summary.forEach((summary) => {
      const svgHTML =
        '<div class="svgCnt"><svg class="arrowSvgSummary" width="14" height="18" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.00195 2L6.00195 6L2.00195 10" stroke="#5c14e1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" /></svg></div>';
      summary.insertAdjacentHTML("beforeend", svgHTML);

      const detailsElements = document.querySelectorAll("details");

      detailsElements.forEach((detailsElement) => {
        const arrowSvgSummary =
          detailsElement.querySelector(".arrowSvgSummary");
        detailsElement.addEventListener("toggle", (details) => {
          if (details.target.open) {
            arrowSvgSummary.style.transform = "rotate(90deg)";
          } else {
            arrowSvgSummary.style.transform = "none";
          }
        });
      });
    });
  });
