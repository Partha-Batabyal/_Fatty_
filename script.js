let take = (e) => document.querySelector(e);

let change_theme = take(".change > input");
let change = take(".change");
let left = take("#left");
let right = take("#right");
let color_toggler = take(".box3_color>.container>.toggle>input");
let left_a_all = document.querySelectorAll(".left_a");

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
//add hover active

left_a_all.forEach((e) => {
  e.addEventListener("click", () => {
    left_a_all.forEach((item) => {
      item.classList.remove("hover_active");
    });
    e.classList.toggle("hover_active");
  });
});

const isInViewport = (elem) => {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleScroll = () => {
  left_a_all.forEach((link) => {
    const sectionId = link.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);

    if (isInViewport(section)) {
      left_a_all.forEach((link) => link.classList.remove("hover_active"));
      link.classList.add("hover_active");
    }
  });
};

document.addEventListener("scroll", handleScroll);

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
