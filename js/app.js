// --------------------------------------------------------------------
// ---------------------------- Fonction ------------------------------
// --------------------------------------------------------------------

const markdownContent = document.querySelector(".markdown-content");
const md = (d) => {
  fetch(d)
    .then((response) => response.text())
    .then((markdown) => {
      const html = marked.parse(markdown);
      markdownContent.innerHTML = html;

      addBlankTargetToLinks();

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
};
// --------------------------------------------
const reloadFromServer = () => {
  location.reload(true);
};
// --------------------------------------------
const addBlankTargetToLinks = () => {
  const container = document.querySelector(".markdown-content");

  const links = container.querySelectorAll("a");

  links.forEach((link) => {
    if (link.getAttribute("target") !== "_parent") {
      link.setAttribute("target", "_blank");
    }
  });
};
// --------------------------------------------
const toggleMarkdownView = (action) => {
  if (action === "show") {
    mdContent.style.display = "none";
    summary.style.display = "block";
    summary.style.margin = "10px";
    summary.style.width = "100%";
    hButton.style.display = "none";
    hButtonClose.style.display = "block";
  } else if (action === "hide") {
    mdContent.style.display = "block";
    summary.style.display = "none";
    summary.style.margin = "10px 0 10px 10px";
    summary.style.width = "unset";
    hButton.style.display = "block";
    hButtonClose.style.display = "none";
  }
};

// --------------------------------------------------------------------
// ------------------------- Hamburger Menu ---------------------------
// --------------------------------------------------------------------

const hButton = document.querySelector(".hButton");
const hButtonClose = document.querySelector(".hButtonClose");
const summary = document.querySelector(".summary");
const mdContent = document.querySelector(".contents");

hButton.addEventListener("click", () => {
  toggleMarkdownView("show");
});
hButtonClose.addEventListener("click", () => {
  toggleMarkdownView("hide");
});

// --------------------------------------------------------------------
// ----------------------------- Folder -------------------------------
// --------------------------------------------------------------------
const titleFolder = document.querySelectorAll(".titleFolder");

titleFolder.forEach((title) => {
  title.addEventListener("click", () => {
    const parentFolder = title.parentElement;
    const subFolder = parentFolder.querySelector(".subFolder");

    parentFolder.classList.toggle("active");
    titleFolder.forEach((title) => {
      title.classList.remove("titleActive");
    });
    title.classList.add("titleActive");
    if (subFolder.style.display === "flex") {
      subFolder.style.display = "none";
    } else {
      subFolder.style.display = "flex";
    }
  });
});
md("/data/welcome.md");
const welcome = document.querySelector("#summary h1");
welcome.addEventListener("click", () => {
  if (window.innerWidth <= 780) {
    toggleMarkdownView("hide");
  }
  md("/data/welcome.md");
});
const subFolders = document.querySelectorAll(".subFolder div");

subFolders.forEach((subFolder) => {
  subFolder.addEventListener("click", () => {
    subFolders.forEach((subFolder) => {
      subFolder.classList.remove("subFolderActive");
    });
    subFolder.classList.add("subFolderActive");

    if (window.innerWidth <= 780) {
      toggleMarkdownView("hide");
    }

    const content = subFolder.textContent.toLowerCase();
    const p1 = subFolder.parentElement;
    const p2 = p1.parentElement;
    const title = p2
      .querySelector(".titleFolder")
      .textContent.trim()
      .toLowerCase();
    let data = `/data/${title}/${content}.md`;
    md(data);
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 780) {
    window.addEventListener("resize", function checkWidth() {
      if (window.innerWidth >= 780) {
        reloadFromServer();
        window.removeEventListener("resize", checkWidth);
      }
    });
  }
});
