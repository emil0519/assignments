function ajax(url) {
  return fetch(url).then((data) => data.json());
}
function render(data) {
  const response = ""; 
  for (element of data) {
    response += `<ul>
    <li>${element.name}是
    ${element.description}現售
    ${element.price}。</li><br>
    </ul>
    `;
  }
  document.querySelector(".product-list").innerHTML = response;
}

ajax("https://appworks-school.github.io/Remote-Assignment-Data/products").then(
  (data) => render(data)
);
