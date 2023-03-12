const cardTemplate = ` <div class="card">
<img class="avatar" src="avatar.png" alt="avatar" />
<div>
  <h3 class="name">Szczechi</h3>
  <p class="job">QA Tester</p>
</div>
</div>`;

const wrapper = document.querySelector(".app-container");

const main = () => {
  wrapper.innerHTML = cardTemplate;
};

main();
