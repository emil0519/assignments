const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", change);

function change() {
  let input = document.querySelector(".num").value;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    let response = xhr.responseText;
    result.innerText = response;
  };
  xhr.open("GET", `http://localhost:3000/getData?number=${input}`);
  xhr.send();
}
