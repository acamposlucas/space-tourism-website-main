import data from "../data.json";
const crew = data.crew;

const buttons = document.querySelectorAll("ul button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    clearActiveClasses();
    clearElementAttributes();
    button.classList.add("active");
    setAccessibilityAttr(index);
    handleUpdateCrew(index);
  });
});

function setAccessibilityAttr(index) {
  const article = document.querySelector("article");
  buttons[index].setAttribute("aria-selected", true);
  article.setAttribute("tabindex", index);
  article.setAttribute("aria-labelledby", `tab-${index}`);
}

function handleUpdateCrew(index) {
  const image = document.getElementById("image");
  const role = document.getElementById("role");
  const name = document.getElementById("name");
  const bio = document.getElementById("bio");

  image.src = `${crew[index].images.webp}`;
  role.innerText = `${crew[index].role}`;
  name.innerText = `${crew[index].name}`;
  bio.innerText = `${crew[index].bio}`;
}

function clearActiveClasses() {
  buttons.forEach((button) => button.classList.remove("active"));
}

function clearElementAttributes() {
  buttons.forEach((button) => button.setAttribute("aria-selected", false));
}
