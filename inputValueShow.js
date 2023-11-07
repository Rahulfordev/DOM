let inputTag = document.getElementById("name");
let p = document.createElement("p");
p.setAttribute("class", "pre");
let str = "";
inputTag.addEventListener("keypress", function (e) {
  if (e.key.toLowerCase() == "enter") {
    p.innerText = e.target.value;
    inputTag.insertAdjacentElement("afterend", p);
  }
  str += e.target.value;
});
