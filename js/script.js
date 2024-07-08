let menuOpen = document.querySelector(".menu-bar-icon");
let menuClose = document.querySelector(".menu-close");
let body = document.querySelector(".body");
let menu = document.querySelector(".query-menu-bar");
let listProductHTML = document.querySelector(".list-products");

menuOpen.addEventListener("click", () => {
  menu.classList.add("menu-open");
  body.classList.add("menu-body");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("menu-open");
  body.classList.remove("menu-body");
});

//fetching products

let products = [];
let carts = [];

let addDataToHTML = () => {
  listProductHTML.innerHTML = "";
  if (products.length > 0) {
    products.forEach((el) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.dataset.id = el.id;

      //image
      let image = document.createElement("img");
      image.src = el.image1;
      image.classList.add("image");

      newProduct.innerHTML = `
      
      
      <h4>${el.name}</h4>
      <p>Product Code: ${el.productId}</p>
      <h3>BDT 2,150</h3>`;

      newProduct.insertBefore(image, newProduct.firstChild);
      listProductHTML.appendChild(newProduct);

      //event listener
      image.addEventListener("mouseover", function () {
        // alert("sd");
        image.src = el.image2;
      });
      image.addEventListener("mouseout", function () {
        image.src = el.image1;
      });
    });
  }
};

const initApp = () => {
  //get fetch data from json
  fetch("product.json")
    .then((res) => res.json())
    .then((data) => {
      products = data;
      console.log(products);
      addDataToHTML();

      // addDataToHTML();

      //get cart from memotry
      // if (localStorage.getItem("cart")) {
      //   carts = JSON.parse(localStorage.getItem("cart"));
      //   addCartToHTML();
      // }
    });
};
initApp();

let image = document.querySelector(".image");
let product = document.querySelector(".product");

//Now, we need to add an Event Listener to listen when the image gets mouse over.

image.addEventListener("mouseover", function () {
  // alert("sd");
  image.src = "img/products/p-2.jpg";
});
image.addEventListener("mouseout", function () {
  image.src = "img/products/p-1.jpg";
});
