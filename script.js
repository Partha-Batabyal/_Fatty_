let take = (e) => document.querySelector(e);
let change_theme = take(".change > input");
let change = take(".change");
let left = take("#left");
let right = take("#right");

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
  if (change_theme.checked == false) {
    left.style.width = "0";
    right.style.marginLeft = "0";
    right.style.width = "100%";
    change.style.marginLeft = "4%";
  } else {
    left.style.width = "20%";
    right.style.marginLeft = "20%";
    right.style.width = "80%";
    change.style.marginLeft = "-1.3%";
  }
});

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
