import data from "../data.json";
const selectors = document.querySelectorAll(".selector");
const technologies = data.technology;

console.log(window.innerHeight);

selectors.forEach((selector, index) => {
  selector.addEventListener("click", () => {
    // clearActiveClasses();
    clearAriaSelectedAttr();
    handleUpdateDestination(index);
    handleDestinationAttributes(index);
  });
});

// function clearActiveClasses() {
//   selectors.forEach((selector) => selector.classList.remove("active"));
// }

function clearAriaSelectedAttr() {
  selectors.forEach((selector) => {
    selector.firstElementChild.setAttribute("aria-selected", false);
  });
}

function handleUpdateDestination(index) {
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const img = document.querySelector(".img-wrapper");

  console.log(img);

  window.innerHeight <= 1440
    ? (img.style.backgroundImage = `url('${technologies[index].images.landscape}')`)
    : (img.style.backgroundImage = `url('${technologies[index].images.portrait}')`);

  name.innerText = `${technologies[index].name}`;
  description.innerText = `${technologies[index].description}`;
}

function handleDestinationAttributes(index) {
  const article = document.getElementById("tabpanel");
  selectors[index].firstElementChild.setAttribute("aria-selected", true);
  article.setAttribute("tabindex", index);
  article.setAttribute("aria-labelledby", `tab-${index}`);
}
