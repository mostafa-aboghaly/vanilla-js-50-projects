const jokeEl = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");
generateJokes();
btn.addEventListener("click", generateJokes);

async function generateJokes() {
  const configuration = {
    headers: {
      accept: "application/json",
    },
  };
  const response = await fetch("https://icanhazdadjoke.com", configuration);
  const data = await response.json();
  jokeEl.innerText = data.joke;
}
