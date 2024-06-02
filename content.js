const anchor = document.createElement("a");
anchor.classList.add("redirect-anchor");
anchor.textContent = "Read this article for FREE ➦";
const currentTabUrl = window.location.href;
anchor.href = `https://freedium.cfd/${currentTabUrl}`;

const article = document.querySelector("article");
article.insertAdjacentElement("afterend", anchor);
