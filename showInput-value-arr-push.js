let gadget__item = document.getElementsByName("gadget");
gadget__item = [...gadget__item];
let tech__lists = document.getElementById("tech__lists");

let tech__arr = [];

gadget__item.forEach((item) => {
  item.addEventListener("click", function (e) {
    let value = e.target.value;
    let find__result = tech__arr.findIndex((item) => item === value);
    if (find__result == -1) {
      tech__arr.push(value);
      console.log(tech__arr);
    } else {
      tech__arr.splice(find__result, 1);
    }
    let innerList = "";
    for (let i = 0; i < tech__arr.length; i++) {
      innerList += `<li class="tech--list">${tech__arr[i]}</li>`;
    }
    tech__lists.innerHTML = innerList;
  });
});
