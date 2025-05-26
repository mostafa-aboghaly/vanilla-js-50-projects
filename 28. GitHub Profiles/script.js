const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard("No such user profile found!");
    }
  }
}
async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (error) {
    createErrorCard("Problem fetching repos");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    getRepos(user);
    search.value = "";
  }
});
function createUserCard(userData) {
  const HTMLCard = `
    <div class="card">
      <div>
        <img
          class="avatar"
          src="${userData.avatar_url}"
          alt="${userData.name}"
        />
      </div>
      <div class="user-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio ?? ""}</p>
        <ul>
          <li>${userData.followers}<strong>Followers</strong></li>
          <li>${userData.following}<strong>Following</strong></li>
          <li>${userData.public_repos}<strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
  main.innerHTML = HTMLCard;
}
function addReposToCard(userRepos) {
  const reposEl = document.getElementById("repos");
  userRepos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.innerText = repo.name;
    repoEl.target = "_black";
    reposEl.appendChild(repoEl);
  });
}
function createErrorCard(msg) {
  const HTMLCard = `<div class="card"><h1>${msg}</h1></div>`;
  main.innerHTML = HTMLCard;
}
