const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const createIngred = (options) => {
  return options.map((option) => {
    const liElement = document.createElement("li");
    liElement.textContent = option;
    liElement.classList.add("item");
    return liElement;
  });
};
const elements = createIngred(ingredients);
list.append(...elements);
