let take = (e) => document.querySelector(e);
let change_theme = take(".change > input");
let change = take(".change");
let left = take("#left");
let right = take("#right");

let color_toggler = take(".box3_color>.container>.toggle>input");


// Make it full screen first

window.addEventListener("DOMContentLoaded", () => {
  change_theme.checked = false;
  left.style.width = "0";
  right.style.marginLeft = "0";
  right.style.width = "100%";
  change.style.marginLeft = "4%";
});
change_theme.checked = true;



change_theme.addEventListener("change", () => {
  if (change_theme.checked === false) {
    left.style.width = "0";
    right.style.marginLeft = "0";
    right.style.width = "100%";
    change.style.marginLeft = "4%";
    typed.reset();
    typed.stop();
  } else {
    left.style.width = "20%";
    right.style.marginLeft = "20%";
    right.style.width = "80%";
    change.style.marginLeft = "-1.3%";
    typed1();

  }
});

color_toggler.addEventListener("change", () => {
  if (color_toggler.checked == false) {
    console.log("hello");
    document.body.classList.toggle("mycolor");
  } else {
    console.log("huu");
    document.body.classList.toggle("mycolor");
  }
});





// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });
