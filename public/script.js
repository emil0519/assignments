//API

// Pic function

let i = 0;
function getPic(url) {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => data.data.map((data) => data.picture))
    .then((data) => addPic(data));
}

// Words

function getWords(url) {
  return fetch(url)
    .then((words) => words.json())
    .then((words) => words.data.map((words) => words.story));
}

function addPic(data) {
  let dotList = document.querySelector(".dot-list");

  for (let x = 0; x <= data.length - 1; x++) {
    if (x === 0) {
      dotList.insertAdjacentHTML(
        "beforeend",
        `<li><img src="img/dot-1.png" class="dot0 click dot" onmouseover="goldDot(this)" onmouseout="blackDot(this)"> </li>
        `
      );
    } else {
      dotList.insertAdjacentHTML(
        "beforeend",
        `<li><img src="img/dot-2.png" class="dot${x} click dot" onmouseover="goldDot(this)" onmouseout="blackDot(this)"> </li>
      `
      );
    }
  }

  return data;
}

function updatePic(data, words) {
  let dotLists = document.querySelectorAll(".dot");
  let pause = false;
  let i = 1;
  let startTimer = null;

  function animate() {
    for (times = 0; times <= 2; times++) {
      document.getElementsByClassName("dot")[times].src = "img/dot-2.png";
    }

    if (pause) return;

    i == data.length ? (i = 0) : "";
    const words2 = words[i].split(/\r?\n/);
    document.getElementsByClassName("banner-img")[0].src = `${data[i]}`;
    document.getElementsByClassName(
      "banner-words"
    )[0].innerHTML = `<p>${words2[0]}<br>${words2[1]}<br>${words2[2]}<br><span id="special-word">${words2[3]}</span></p>`;
    document.querySelector(`.dot${i}`).src = "img/dot-1.png";
    i++;
  }

  function intervalManager(stop, animate, time) {
    if (stop) {
      clearInterval(startTimer);
    } else {
      startTimer = setInterval(animate, time);
    }
  }
  intervalManager(false, animate, 5000);
  //for start
  // intervalManager(false, animate, 1000)
  //for terminate
  // intervalManager(true)

  for (let b = 0; b <= dotLists.length - 1; b++) {
    dotLists[b].addEventListener("click", () => {
      isClick = true;
      blackDot(dot, isClick, b);
      document.querySelector(`.dot${b}`).src = "img/dot-1.png";
      for (times = 0; times <= 2; times++) {
        document.getElementsByClassName("dot")[times].src = "img/dot-2.png";
      }
      i = b;
      const words2 = words[i].split(/\r?\n/);
      document.getElementsByClassName("banner-img")[0].src = `${data[i]}`;
      document.getElementsByClassName(
        "banner-words"
      )[0].innerHTML = `<p>${words2[0]}<br>${words2[1]}<br>${words2[2]}<br><span id="special-word">${words2[3]}</span></p>`;

      intervalManager(true);
      // setTimeout(
      //   () => (document.querySelector(`.dot${i}`).src = "img/dot-1.png"),
      //   5000
      // );
      i += 1;

      intervalManager(false, animate, 5000);
    });
  }

  const banner = document.querySelector(".banner");

  banner.addEventListener("mouseover", () => {
    pause = true;
  });
  banner.addEventListener("mouseout", () => {
    pause = false;
  });
}

const url = "https://api.appworks-school.tw/api/1.0/marketing/campaigns";
Promise.all([getPic(url), getWords(url)]).then((res) => {
  const [data, words] = res;
  // const data = res[0];
  // const words = res[1];
  updatePic(data, words);
});

// Mouseover event

let dot = document.querySelector(".dot");

function goldDot(dot) {
  dot.setAttribute("src", "img/dot-1.png");
}

function blackDot(dot, isClick) {
  if (isClick == true) {
    return;
  } else {
    dot.setAttribute("src", "img/dot-1.png");
  }
}

//Button event

let blackCart = document.querySelector(".black-cart");
let blackProfile = document.querySelector(".black-profile");

function gold(blackCart) {
  blackCart.setAttribute("src", "img/gold-cart.png");
}

function black(blackCart) {
  blackCart.setAttribute("src", "img/black-cart.png");
}

function goldPro(blackCart) {
  blackCart.setAttribute("src", "img/gold-profile.png");
}

function blackPro(blackCart) {
  blackCart.setAttribute("src", "img/black-profile.png");
}

//Get product list

fetch("https://api.appworks-school.tw/api/1.0/products/all")
  .then((data) => data.json())
  .then((data) => saveProductData(data));

function saveProductData(data) {
  let tempProductData = data;
  let productData = tempProductData.data;
  renderProduct(productData);
}

let contentSection = document.querySelector(".main-content");
contentSection.innerText = "Loading";

function renderProduct(productData) {
  let productTitle = "";
  for (let a = 0; a < productData.length; a++) {
    let colorList = "";
    let c = -30;
    for (let b = 0; b < productData[a].colors.length; b++) {
      if (productData[a].colors.length > 0) {
        c += 30;
      }
      colorList += `<div class="tiny-color click" style="background: #${productData[a].colors[b].code}; margin:0 ${c}px; border: 0.5px solid black" ></div>`;
    }
    productTitle += `<div class="content-${a + 1}">

    <img src="${productData[a].main_image}" class="content-img click">
    <span class="break"></span>
    <div class="content-color">
    ${colorList}
    </div>
    <p class="content-words">${productData[a].title}<br>
    TWD.${productData[a].price}
     <p>
    </div>`;
    let contentSection = document.querySelector(".main-content");
    contentSection.innerHTML = productTitle;
  }
}
