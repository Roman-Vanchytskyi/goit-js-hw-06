const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

for (let i = 0; i < allCategories.length; i += 1) {
  const categoryTitle = allCategories[i].firstElementChild.textContent;
  const elementsNumber = allCategories[i].lastElementChild.children.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsNumber}`);
}
