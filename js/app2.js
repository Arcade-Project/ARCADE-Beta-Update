const md = (d) => {
  const markdownContent = document.querySelector(".markdown-content");

  fetch(d)
    .then((response) => response.text())
    .then((markdown) => {
      const html = marked.parse(markdown);
      markdownContent.innerHTML = html;
    });
};

md("/data/welcome.md");
