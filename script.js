import { courseProduct } from "./src/courseComponent/courseProduct.js";
import { showingProduct } from "./src/courseComponent/showingProduct.js";

// const menuWrapper = document.querySelector(".menu-wrapper");
const allBtn = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click", (e) => {
  const btnId = e.target.dataset.id;
  if (btnId) {
    allBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    const displayMenu = courseProduct.filter((item) => item.category === btnId);
    if (btnId === "all") {
      showingProduct(courseProduct);
    } else {
      showingProduct(displayMenu);
    }
  }
});

window.addEventListener("DOMContentLoaded", () => {
  showingProduct(courseProduct);
});
