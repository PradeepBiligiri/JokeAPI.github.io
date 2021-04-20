//Misc Joke
function miscJokes() {
  const jokes = fetch("https://v2.jokeapi.dev/joke/Miscellaneous")
    .then((response) => response.json())
    .then((data) => {
      if (data.type == "single") {
        console.log(data, data.joke);

        let element = document.getElementById("joke");
        let Joke = data.joke;
        element.innerHTML = Joke;
      } else if (data.type == "twopart") {
        console.log(data, data.setup, data.delivery);
        element = document.getElementById("joke");
        Joke = `<p> Question: ${data.setup}....</p>
      <p>Answer is - ${data.delivery}</p>`;
        element.innerHTML = Joke;
      }
    });
}

// let button = document
//   .querySelector(".get")
//   .addEventListener("click", displayJoke);

//Programming Jokes
function programJoke() {
  const jokes = fetch("https://v2.jokeapi.dev/joke/Programming")
    .then((response) => response.json())
    .then((data) => {
      let element = document.getElementById("joke");
      if (data.type == "single") {
        console.log(data, data.joke);

        let Joke = data.joke;
        element.innerHTML = Joke;
      } else if (data.type == "twopart") {
        console.log(data, data.setup, data.delivery);

        Joke = `<p> Question: ${data.setup}....</p>
      <p>Answer is - ${data.delivery}</p>`;
        element.innerHTML = Joke;
      }
    });
}

//Dark  Jokes
function darkJoke() {
  const jokes = fetch("https://v2.jokeapi.dev/joke/Dark")
    .then((response) => response.json())
    .then((data) => {
      let element = document.getElementById("joke");
      if (data.type == "single") {
        console.log(data, data.joke);

        let Joke = data.joke;
        element.innerHTML = Joke;
      } else if (data.type == "twopart") {
        console.log(data, data.setup, data.delivery);

        Joke = `<p> Question: ${data.setup}....</p>
      <p>Answer is - ${data.delivery}</p>`;
        element.innerHTML = Joke;
      }
    });
}

//Pun Jokes
function punJoke() {
  const jokes = fetch("https://v2.jokeapi.dev/joke/Pun")
    .then((response) => response.json())
    .then((data) => {
      let element = document.getElementById("joke");
      if (data.type == "single") {
        console.log(data, data.joke);

        let Joke = data.joke;
        element.innerHTML = Joke;
      } else if (data.type == "twopart") {
        console.log(data, data.setup, data.delivery);

        Joke = `<p> Question: ${data.setup}....</p>
      <p>Answer is - ${data.delivery}</p>`;
        element.innerHTML = Joke;
      }
    });
}

//Chirstmans Jokes
function chrisJoke() {
  const jokes = fetch("https://v2.jokeapi.dev/joke/Christmas")
    .then((response) => response.json())
    .then((data) => {
      console.log(data, data.setup, data.delivery);

      let element = document.getElementById("joke");
      let Joke = `<p> Question: ${data.setup}....</p>
      <p>Answer is - ${data.delivery}</p>`;
      element.innerHTML = Joke;
    });
}
let program = document
  .querySelector(".program")
  .addEventListener("click", programJoke);

let misc = document.querySelector(".misc").addEventListener("click", miscJokes);

let dark = document.querySelector(".dark").addEventListener("click", darkJoke);

let pun = document.querySelector(".pun").addEventListener("click", punJoke);

let spooky = document
  .querySelector(".spooky")
  .addEventListener("click", spookyJoke);

let chris = document
  .querySelector(".chris")
  .addEventListener("click", chrisJoke);

//Spooky Jokes
function spookyJoke() {
  const jokes = fetch("https://v2.jokeapi.dev/joke/Spooky")
    .then((response) => response.json())
    .then((data) => {
      console.log(data, data.setup, data.delivery);

      let element = document.getElementById("joke");
      let Joke = `<p> Question: ${data.setup}....</p>
      <p>Answer is - ${data.delivery}</p>`;
      element.innerHTML = Joke;
    });
}
