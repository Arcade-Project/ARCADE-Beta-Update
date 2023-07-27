const markdownContent = document.querySelector(".markdown-content");

fetch("/test.md")
  .then((response) => response.text())
  .then((markdown) => {
    const html = marked(markdown);
    markdownContent.innerHTML = html;
  });
