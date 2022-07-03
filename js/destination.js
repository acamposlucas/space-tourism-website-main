import data from "../data.json";
const selectors = document.querySelectorAll(".selector");
const destinations = data.destinations;

selectors.forEach((selector, index) => {
  selector.addEventListener("click", () => {
    clearActiveClasses();
    selector.classList.add("active");
    handleUpdateDestination(index);
  });
});

function clearActiveClasses() {
  selectors.forEach((selector) => selector.classList.remove("active"));
}

function handleUpdateDestination(index) {
  const image = document.getElementById("image");
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const distance = document.getElementById("distance");
  const travel = document.getElementById("travel");

  image.src = `${destinations[index].images.png}`;
  name.innerText = `${destinations[index].name}`;
  description.innerText = `${destinations[index].description}`;
  distance.innerText = `${destinations[index].distance}`;
  travel.innerText = `${destinations[index].travel}`;
}
