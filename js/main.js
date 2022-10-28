//! REQUESTS
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://rickandmortyapi.com/api/character");
// xhr.send();
// console.log(xhr);
// xhr.onload = function () {
//   console.log(JSON.parse(xhr.response));
// };

// //!fetch()
// fetch("https://rickandmortyapi.com/api/character")
//   .then(result => result.json()) // метод который позволет получить данные с responce
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//jsonplaceholder сайт с бесплатными api

//!==================================================mini project========================================================
function render(count = 50) {
  let container = document.querySelector(".container");
  container.innerHTML = "";
  fetch(`https://meme-api.herokuapp.com/gimme/${count}`) //promise
    .then(result => result.json()) //promise
    .then(data =>
      data.memes.forEach(item => {
        container.innerHTML += `<div class="card" style="width: 18rem">
      <img
        src="${item.url}"
        class="card-img-top meme-img"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Author: ${item.author}</h5>
        <a href="${item.postLink}" target = "_blank" class="btn btn-primary">DetailL</a>
      </div>
    </div>`;
      })
    );
}
render();

let updatePageBtn = document.querySelector("#update-btn");
updatePageBtn.addEventListener("click", () => {
  render();
});

let selectCount = document.querySelectorAll(".dropdown-item");
selectCount.forEach(item => {
  item.addEventListener("click", e => {
    render(e.target.innerText);
  });
});
