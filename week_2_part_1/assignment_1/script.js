const headerText = document.querySelector(".banner-text");
const closeButton = document.querySelector(".close");
const small = document.querySelector(".small");
const headerButton = document.querySelector(".header-btn");
const bottomButton = document.querySelector(".bottom-text");
const moreBox = document.querySelector(".more-sec-box");

headerText.addEventListener("click", () => {
  headerText.textContent = "Have a Good Time!";
});

closeButton.addEventListener("click", () => {
  small.style.display = "none";
});

headerButton.addEventListener("click", () => {
  small.style.display = "block";
});

bottomButton.addEventListener("click", () => {
  moreBox.style.display = "block";
  //if is not working here//
  //   if (moreBox.style.display === "block") {
  //     moreBox.style.display === "none";
  //   } else if (moreBox.style.display === "none") {
  // moreBox.style.display = "block";
  //   }
});
