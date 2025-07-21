import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);

const test = document.createElement("p");
test.innerText = "Test paragraph";
test.style = "color: white";

document.body.appendChild(test);

console.log(greeting);