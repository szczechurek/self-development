const input = document.querySelector(".search-bar");

const button = document.querySelector(".button");

const wrapper = document.querySelector(".app-container");

const main = () => {
  wrapper.innerHTML = cardTemplate;
};

const createCard = (text) => {
  const cardTemplate = ` <div class="card">
  <img class="avatar" src="avatar.png" alt="avatar" />
  <div>
    <h3 class="name">Szczechi</h3>
    <p class="job">${text}</p>
  </div>
  </div>`;
  wrapper.innerHTML = cardTemplate;
};

let text = "";

input.addEventListener("input", (event) => {
  text = event.target.value;
  console.log(text);
});

button.addEventListener("click", (event) => {
  createCard(text);
  console.log(event.target);
});
