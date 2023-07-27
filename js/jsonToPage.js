fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    const data = json;

    const linkGrid = document.querySelector("link-grid");
    const title = document.createElement("h1");
    title.textContent = data.streaming[0].title;
    linkGrid.appendChild(title);
    const onlineCtn = document.createElement("ul");
    onlineCtn.classList.add("onlineCtn");
    linkGrid.appendChild(onlineCtn);

    for (let i = 0; i < 2; i++) {
      const newSpan = document.createElement("div");
      newSpan.textContent = data.streaming[0].content[i].title;
      onlineCtn.appendChild(newSpan);

      data.streaming[0].content[i].links.forEach((item) => {
        const newLi = document.createElement("li");
        onlineCtn.appendChild(newLi);
        const newA = document.createElement("a");
        newA.textContent = item.name;
        newA.setAttribute("target", "_blank");
        newA.setAttribute("href", item.link);
        newLi.appendChild(newA);
      });
    }

    if (data.streaming[0].info) {
      const infoB = document.querySelector("info-b");
      const infoDi = document.createElement("div");
      infoDi.id = "info";
      infoB.appendChild(infoDi);

      const infoImg = document.createElement("img");
      infoImg.setAttribute("src", "../../assets/svg/system/info.svg");
      infoImg.setAttribute("alt", "information icon");
      infoDi.appendChild(infoImg);

      const infoDiT = document.createElement("div");
      infoDiT.classList.add("info-title");
      infoDiT.textContent = "Info";
      infoDi.appendChild(infoDiT);

      const close = document.createElement("close");
      close.textContent = "✘";
      infoDiT.appendChild(close);

      const infoTxt = document.createElement("div");
      infoTxt.id = "text";
      infoTxt.textContent = data.streaming[0].info;
      infoB.appendChild(infoTxt);
    }
  });
{
  /* <div id="text" style="display: none;">You don't have to pay to access the sites. Some use fake players and fraudulent redirects due to
            their
            free
            hosting. Use an ad blocker to remedy. <a target="_blank" href="#">ad block link</a>
            <br>
            <br>
            These sites are illegal so you are entirely responsible for their use.
        </div> */
}
