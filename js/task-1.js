const categoriesHeadings = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${categoriesHeadings.length}`);
categoriesHeadings.forEach(el => {
  const categoryHeading = el.querySelector("h2");
  const categoryItems = el.querySelectorAll("li");
  console.log(`Category: ${categoryHeading.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
})
