const categoriesList = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const categoriesItems = item.querySelectorAll("li");
    console.log(`Category: ${categoryName}`);
    console.log(`Number of items: ${categoriesItems.length}`);
});