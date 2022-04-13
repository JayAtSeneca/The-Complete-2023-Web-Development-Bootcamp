// window.addEventListener("load", load);

// function load() {
//   let btn = document.getElementById("button1");
//   btn.addEventListener("click", (e) => {
//     console.log("button 1 clicked");
//     return;
//   });

//   let btn2 = document.getElementById("button2");
//   btn2.addEventListener("click", (e) => {
//     console.log("button 2 clicked");
//     return;
//   });

//   let btn3 = document.getElementById("button3");
//   btn3.addEventListener("click", (e) => {
//     console.log("button 3 clicked");
//     return;
//   });
// }

// function forBtn1(e) {
//   selectedCategory = category;
//   document.getElementById("selected-category").innerText =
//     selectedCategory.name;
//   const newTBody = document.createElement("tbody");
//   products
//     .filter((product) => {
//       return (
//         product.category.indexOf(selectedCategory.id) >= 0 &&
//         !product.discontinued
//       );
//     })
//     .forEach((product) => {
//       const e = document.createElement("tr");
//       const name = document.createElement("td");
//       name.innerText = product.name;
//       const description = document.createElement("td");
//       description.innerText = product.description;
//       const price = document.createElement("td");
//       price.innerText = `$${product.price / 100}`;

//       e.appendChild(name);
//       e.appendChild(description);
//       e.appendChild(price);
//       newTBody.appendChild(e);
//     });
//   document.getElementById("category-products").replaceWith(newTBody);
//   newTBody.setAttribute("id", "category-products");
// }
const { products, categories } = window;

let selectedCategory = {};

categories.forEach((category) => {
  const e = document.createElement("button");
  e.innerText = category.name;
  e.setAttribute("style", "margin: 0 .25rem;");
  e.addEventListener("click", () => {
    selectedCategory = category;
    document.getElementById("selected-category").innerText = selectedCategory.name;
    const newTBody = document.createElement("tbody");
    products
      .filter((product) => {
        return product.category.indexOf(selectedCategory.id) >= 0 && !product.discontinued;
      })
      .forEach((product) => {
        const e = document.createElement("tr");
        const name = document.createElement("td");
        name.innerText = product.name;
        const description = document.createElement("td");
        description.innerText = product.description;
        const price = document.createElement("td");
        price.innerText = `$${product.price / 100}`;

        e.appendChild(name);
        e.appendChild(description);
        e.appendChild(price);
        newTBody.appendChild(e);
      });
    document.getElementById("category-products").replaceWith(newTBody);
    newTBody.setAttribute("id", "category-products");
  });
  document.getElementById("menu").appendChild(e);
});


products.forEach((product) => {
    const e = document.createElement("tr");
    const name = document.createElement("td");
    name.innerText = product.name;
    const description = document.createElement("td");
    description.innerText = product.description;
    const price = document.createElement("td");
    price.innerText = `$${(product.price / 100).toLocaleString("en-ca")}`;
  
    e.appendChild(name);
    e.appendChild(description);
    e.appendChild(price);
  
    document.getElementById("category-products").appendChild(e);
  });
  