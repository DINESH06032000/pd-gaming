
var game_data = document.getElementById("game_data");
var game_navbar = document.getElementById("game_navbar");


fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const games = data.games;
    games.map((e) => {
      const setupIcons = e.game_setup.map((a) => `<i class="${a}"></i>`).join('');
      game_data.innerHTML += `
        <div class="card col-lg-3 col-md-4 col-12 img-box" id="abc" style="width: 18rem;">
          <img src="${e.game_img}" class="card-img-top" alt="${e.game_name}">
          <div class="cta" id="buy">
            <a href="${e.game_learnmore}" target="_blank">Learn More</a>
          </div>
          <div class="cta1" id="buy">
            <a href="${e.game_link}" target="_blank">Play</a>
          </div>
          <div class="card-body">
            <p class="card-text">${e.game_name}</p>
            <p>${e.game_arena}<span class="icon">${setupIcons}</span></p>
          </div>
        </div>`;

      game_navbar.innerHTML += `
      <div class="col-lg-3 col-md-3 col-sm-4 col-4">
        <div class=" p-2">
        <div class="row offcanvasrow">
          <div class="col-lg-4">
            <a href="${e.game_link}"><img class="offcanvasimage"
                src="${e.game_img}" alt=""></a>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12">${e.game_name}</div>
              <div class="col-lg-12">${setupIcons}</div>
            </div>
          </div>
          </div>
        </div>
      </div>`;
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });

function d() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      game_data.innerHTML = " "
      game_navbar.innerHTML = " "

      const games = data.games;
      games.map((e) => {
        const setupIcons = e.game_setup.map((a) => `<i class="${a}"></i>`).join('');
        game_data.innerHTML += `
        <div class="card col-lg-3 col-md-4 col-12 img-box" style="width: 18rem;">
          <img src="${e.game_img}" class="card-img-top" alt="${e.game_name}">
          <div class="cta" id="buy">
            <a href="${e.game_learnmore}" target="_blank">Learn More</a>
          </div>
          <div class="cta1" id="buy">
            <a href="${e.game_link}" target="_blank">Play</a>
          </div>
          <div class="card-body">
            <p class="card-text">${e.game_name}</p>
            <p>${e.game_arena}<span class="icon">${setupIcons}</span></p>
          </div>
        </div>`;

        game_navbar.innerHTML += `
      <div class="col-lg-3 col-md-3 col-sm-4 col-4">
        <div class=" p-2">
        <div class="row offcanvasrow">
          <div class="col-lg-4">
            <a href="${e.game_link}"><img class="offcanvasimage"
                src="${e.game_img}" alt=""></a>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12">${e.game_name}</div>
              <div class="col-lg-12">${setupIcons}</div>
            </div>
          </div>
          </div>
        </div>
      </div>`;
      });
    })
}
function c(names1) {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      game_data.innerHTML = " "
      game_navbar.innerHTML = " "
      const games = data.games;
      games.map((e) => {
        const game_data1 = e.game_type;
        game_data1.map((dat) => {
          if (dat === names1) {
            console.log(dat);
            const setupIcons = e.game_setup.map((ab) => `<i class="${ab}"></i>`).join('');
            game_data.innerHTML += `
        <div class="card col-lg-3 col-md-4 col-12 img-box" style="width: 18rem;">
          <img src="${e.game_img}" class="card-img-top" alt="${e.game_name}">
          <div class="cta" id="buy">
            <a href="${e.game_learnmore}" target="_blank">Learn More</a>
          </div>
          <div class="cta1" id="buy">
            <a href="${e.game_link}" target="_blank">Play</a>
          </div>
          <div class="card-body">
            <p class="card-text">${e.game_name}</p>
            <p>${e.game_arena}<span class="icon">${setupIcons}</span></p>
          </div>
        </div>`;
        game_navbar.innerHTML += `
        <div class="col-lg-3 col-md-3 col-sm-4 col-4">
          <div class=" p-2">
          <div class="row offcanvasrow">
            <div class="col-lg-4">
              <a href="${e.game_link}"><img class="offcanvasimage"
                  src="${e.game_img}" alt=""></a>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-12">${e.game_name}</div>
                <div class="col-lg-12">${setupIcons}</div>
              </div>
            </div>
            </div>
          </div>
        </div>`;
          }
        })

      })
    }
    )
}
