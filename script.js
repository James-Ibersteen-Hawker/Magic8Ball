"use strict";

window.onload = function construct() {
  let BODY = document.getElementsByTagName("BODY")[0];
  let respArr = [
    ["text", "img"],
    ["text", "img"],
    ["text", "img"],
    ["text", "img"],
    ["text", "img"],
    ["text", "img"],
    ["text", "img"],
    ["text", "img"],
    ["text", "img"],
  ];
  for (let i = 0; i < respArr.length; i++) {
    respArr[i] = new Response(respArr[i][0], respArr[i][1]);
  }
  let divCont = document.createElement("div");
  divCont.id = "magic-8-ball";
  divCont.classList.add("text-center", "container-fluid", "my-auto");
  let h1 = document.createElement("h1");
  h1.textContent = greet();
  let divResp = document.createElement("div");
  divResp = "Ask a Question!";
  divCont.append(h1);
  BODY.insertAdjacentElement("afterbegin", divCont);
};
class Response {
  text;
  img;
  constructor(text, img) {
    this.text = text;
    this.img = img;
  }
  clear() {
    let responses = document.querySelectorAll("#response");
    for (let i = 0; i < responses.length; i++) {
      responses[i].remove();
    }
  }
  make() {
    this.clear();
    let response = document.createElement("div");
    response.id = "response";
    let image = `<img src=${this.img} class="img-fluid" class="response-img">`;
    let message = document.createElement("p");
    message.textContent = this.text;
    response.append(image);
    response.append(message);
    return response;
  }
}
function shakeMagic8Ball() {
  let eightball = prompt("Plase ask a question!");
  let randomNumber = Math.floor(Math.random() * 8);
  console.log(eightball);
  if (eightball) {
    switch (randomNumber) {
      case 7:
        eightball = "It is certain";
        break;
      case 6:
        eightball = "It is decidedly so";
        break;
      case 5:
        eightball = "Reply hazy try again";
        break;
      case 4:
        eightball = "Cannot predict now";
        break;
      case 3:
        eightball = "Do not count on it";
        break;
      case 2:
        eightball = "My sources say no";
        break;
      case 1:
        eightball = "Outlook not so good";
        break;
      case 0:
        eightball = "Signs point to yes";
        break;
    }
    console.log(eightball);
  } else {
    shakeMagic8Ball();
  }
}

function greet() {
  return "Hello";
}
