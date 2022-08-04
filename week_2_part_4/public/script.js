const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", change);

function change() {
  let input = document.querySelector(".num").value;
  if (isNaN(input) == false && input.length !== 0) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      let response = xhr.responseText;
      result.innerText = response;
    };
    xhr.open("GET", `http://localhost:3000/getData?number=${input}`);
    xhr.send();
  } else if (isNaN(input) == true) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      let response = xhr.responseText;
      result.innerText = response;
    };
    xhr.open("GET", `http://localhost:3000/getData?number=xyz`);
    xhr.send();
  } else {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      let response = xhr.responseText;
      result.innerText = response;
    };
    xhr.open("GET", `http://localhost:3000/getData`);
    xhr.send();
  }
}
