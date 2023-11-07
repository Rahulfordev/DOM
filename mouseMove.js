let cursor_pointer_tracking = document.getElementById(
  "cursor_pointer_tracking"
);
let X = document.getElementById("x-coursor");
let Y = document.getElementById("y-coursor");

// ** client use korle full body er sapekhe x,y er value change korbe
// cursor_pointer_tracking.addEventListener("mousemove", function (e) {
//   X.innerText = "Client X" + " = " + e.clientX + " , ";
//   Y.innerText = "Client Y" + " = " + e.clientY;
// });

// ** offset use korle je div ke addEventListener korechi sei div er sapekhe x,y er value change korbe
cursor_pointer_tracking.addEventListener("mousemove", function (e) {
  X.innerText = "Client X" + " = " + e.offsetX + " , ";
  Y.innerText = "Client Y" + " = " + e.offsetY;
});
