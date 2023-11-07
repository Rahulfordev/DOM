// ** New Element Add using JS DOM
// use getElementById
let addElement = document.getElementById("add-element");
cursor_pointer_tracking.addEventListener("click", function () {
  let p = document.createElement("p");
  p.setAttribute("class", "newclass");
  p.innerText = "this is new p tag, created by JS DOM";
  addElement.appendChild(p);
});

// use function
