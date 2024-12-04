"use strict";

window.onload = function startUp() {
  let name = document.getElementById("name");
  let input = prompt("What is your name?");
  if (input != undefined) {
    name.textContent = `Hello, ${input}`;
  } else {
    name.textContent = "Hello!";
  }
};

let respArr = [
  ["Absolutely", "imgs/absolutely.gif"],
  ["Yes", "imgs/yes.gif"],
  ["You can count on it", "imgs/countOnIt.gif.gif"],
  ["Probably", "imgs/probably.gif"],
  ["Probably not", "imgs/probably not.gif"],
  ["No", "imgs/no.gif"],
  ["Not happening", "imgs/oh-that's-not-gonna-happen-brad.gif"],
  ["Not even if you paid me.", "imgs/nopayment.gif"],
];

function shakeMagic8Ball() {
  let eightball = prompt("Plase ask a question!");
  load();
  setTimeout(
    () => {
      let question = eightball;
      let randomNumber = Math.floor(Math.random() * 8);
      if (eightball) {
        switch (randomNumber) {
          case 7:
            eightball = respArr[0];
            break;
          case 6:
            eightball = respArr[1];
            break;
          case 5:
            eightball = respArr[2];
            break;
          case 4:
            eightball = respArr[3];
            break;
          case 3:
            eightball = respArr[4];
            break;
          case 2:
            eightball = respArr[5];
            break;
          case 1:
            eightball = respArr[6];
            break;
          case 0:
            eightball = respArr[7];
            break;
        }
        unload();
        let questionDiv = document.getElementById("response-question");
        questionDiv.textContent = question;
        let text = document.getElementById("response-text");
        text.textContent = eightball[0];
        let image = document.getElementById("image");
        image.src = eightball[1];
      } else {
        shakeMagic8Ball();
      }
    },
    5000,
    eightball
  );
}

function ellipsis(arg) {
  let initial = document.getElementById("loading");
  let text = arg;
  let i = 0;
  setTimeout(
    () => {
      text = text;
      initial.textContent = text;
      i = i + 1;
    },
    500,
    text,
    initial,
    i
  );
  setTimeout(
    () => {
      text = text + ".";
      initial.textContent = text;
      i = i + 1;
    },
    1000,
    text,
    initial,
    i
  );
  setTimeout(
    () => {
      text = text + ".";
      initial.textContent = text;
      i = i + 1;
    },
    1500,
    text,
    initial,
    i
  );
  setTimeout(
    () => {
      text = text + ".";
      initial.textContent = text;
      i = i + 1;
      ellipsis(arg);
    },
    2000,
    text,
    initial,
    i
  );
}

function greet() {
  return "Hello";
}

function load() {
  let heading = document.getElementById("name");
  let image = document.getElementById("image");
  let response = document.getElementById("response-question");
  let text = document.getElementById("response-text");
  let button = document.getElementById("button");
  heading.classList.add("d-none");
  image.classList.add("d-none");
  response.classList.add("d-none");
  text.classList.add("d-none");
  button.classList.add("d-none");
  let loading = document.getElementById("loading");
  loading.classList.remove("d-none");
  document.body.classList.add("darkening");
  ellipsis("Loading");
}

function unload() {
  let heading = document.getElementById("name");
  let image = document.getElementById("image");
  let response = document.getElementById("response-question");
  let text = document.getElementById("response-text");
  let button = document.getElementById("button");
  heading.classList.remove("d-none");
  image.classList.remove("d-none");
  response.classList.remove("d-none");
  text.classList.remove("d-none");
  button.classList.remove("d-none");
  let loading = document.getElementById("loading");
  loading.classList.add("d-none");
  document.body.classList.remove("darkening");
  document.body.classList.add("lighten");
  setTimeout(() => {
    document.body.classList.remove("lighten");
  }, 200);
}
