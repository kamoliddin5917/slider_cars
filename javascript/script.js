window.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const cardChild = document.querySelector(".card__child");
  const imgs = document.querySelectorAll(".card__img");
  const btnPrev = document.querySelector(".btn--prev");
  const btnNext = document.querySelector(".btn--next");
  const numberCheng = document.querySelector(".numbers__cheng");
  const numberSum = document.querySelector(".numbers__sum");
  const width = window.getComputedStyle(card).width;

  const slider = document.querySelector(".slider");
  const newUl = document.createElement("ul");

  newUl.classList.add("slider__ul");

  const listsDot = [];

  let offset = 0;
  let slideIndex = 1;

  imgs.forEach((img, i) => {
    const newLi = document.createElement("li");
    newLi.dataset.id = i + 1;
    newLi.classList.add("slider__list");
    newUl.appendChild(newLi);

    listsDot.push(newLi);
  });

  slider.append(newUl);

  listsDot[slideIndex - 1].style.opacity = 1;

  cardChild.style.width = imgs.length * 100 + "%";

  imgs.forEach((img) => {
    img.style.width = width;
  });

  if (imgs.length < 10) {
    numberCheng.textContent = `0${slideIndex}`;
    numberSum.textContent = `0${imgs.length}`;
  } else {
    numberCheng.textContent = slideIndex;
    numberSum.textContent = imgs.length;
  }

  btnNext.addEventListener("click", () => {
    if (offset == +width.slice(0, width.length - 2) * (imgs.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    cardChild.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == imgs.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (imgs.length < 10) {
      numberCheng.textContent = `0${slideIndex}`;
    } else {
      numberCheng.textContent = slideIndex;
    }

    for (let i = 0; i < listsDot.length; i++) {
      listsDot[i].style.opacity = 0.5;
    }
    listsDot[slideIndex - 1].style.opacity = 1;
  });

  btnPrev.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (imgs.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    cardChild.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = imgs.length;
    } else {
      slideIndex--;
    }

    if (imgs.length < 10) {
      numberCheng.textContent = `0${slideIndex}`;
    } else {
      numberCheng.textContent = slideIndex;
    }

    for (let i = 0; i < listsDot.length; i++) {
      listsDot[i].style.opacity = 0.5;
    }
    listsDot[slideIndex - 1].style.opacity = 1;
  });

  listsDot.forEach((dot) => {
    dot.addEventListener("click", (event) => {
      const datasetId = event.target.dataset.id;
      slideIndex = datasetId;

      offset = +width.slice(0, width.length - 2) * (datasetId - 1);

      cardChild.style.transform = `translateX(-${offset}px)`;

      for (let i = 0; i < listsDot.length; i++) {
        listsDot[i].style.opacity = 0.5;
      }
      listsDot[slideIndex - 1].style.opacity = 1;

      if (imgs.length < 10) {
        numberCheng.textContent = `0${slideIndex}`;
      } else {
        numberCheng.textContent = slideIndex;
      }
    });
  });

  const interval = setInterval(function () {
    if (offset == +width.slice(0, width.length - 2) * (imgs.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    cardChild.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == imgs.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (imgs.length < 10) {
      numberCheng.textContent = `0${slideIndex}`;
    } else {
      numberCheng.textContent = slideIndex;
    }

    for (let i = 0; i < listsDot.length; i++) {
      listsDot[i].style.opacity = 0.5;
    }
    listsDot[slideIndex - 1].style.opacity = 1;

    imgs.forEach((img) => {
      img.style.opacity = 0.7;
      img.style.transition = "all .5s";
    });
    setTimeout(function () {
      imgs.forEach((img) => {
        img.style.opacity = 1;
      });
    }, 500);
  }, 2000);
});
