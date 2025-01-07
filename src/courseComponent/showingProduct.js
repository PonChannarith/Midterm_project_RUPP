const menuWrapper = document.querySelector(".menu-wrapper");
export const showingProduct = (arrProduct) => {
  const displayProduct = arrProduct
    .map((p) => {
      // button level
      let buttonHtml;
      if (p.level === "basicLevel") {
        buttonHtml = '<button class="btn-Basic">Basic</button>';
      } else if (p.level === "mediumLevel") {
        buttonHtml = '<button class="btn-Medium">Medium</button>';
      } else if (p.level === "advancedLevel") {
        buttonHtml = '<button class="btn-Advanced">Advanced</button>';
      }
      // hear
      const HeartHtml =
        p.heart === "regular"
          ? '<i class="fa-regular fa-heart"></i>'
          : '<i class="fa-solid fa-heart"></i>';

      // starIcon
      const ratingValue = parseFloat(p.rating.split("/")[0]);
      const fullStars = Math.floor(ratingValue);
      const halfStars = ratingValue % 1 !== 0 ? 1 : 0;
      const emptyStars = 5 - fullStars - halfStars;

      const starsHtml = `
          ${'<i class="fa-solid fa-star"></i>'.repeat(fullStars)}
          ${'<i class="fa-solid fa-star-half-stroke"></i>'.repeat(halfStars)}
          ${'<i class="fa-regular fa-star"></i>'.repeat(emptyStars)}
        `;

      return `<article class="card" data-aos="zoom-in" data-aos-duration="1500">
          <img src="${p.imgSrc}" alt="${p.category}" class="img" />
          <div class="container-desc">
            <div class="button-i">
              ${buttonHtml}
              <span>${HeartHtml}</span>
            </div>
            <h3 class="card-heading">${p.title}</h3>
            <p>${p.description}</p>
            <div class="icon-star">
              ${starsHtml}
              <span class="rate">${p.rating}</span>
            </div>
            <div class="icon">
              <div class="icon-clock">
                <i class="fa-regular fa-clock"></i><span>${p.time}</span>
              </div>
              <div class="icon-calendar">
                <i class="fa-regular fa-calendar-days"></i>
                <span>${p.lectures}</span>
              </div>
            </div>
          </div>
        </article>`;
    })
    .join("");
  menuWrapper.innerHTML = displayProduct;
};
