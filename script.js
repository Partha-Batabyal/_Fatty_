document.addEventListener("DOMContentLoaded", () => {
  let take = (e) => document.querySelector(e);

  let change_theme = take(".change > input");
  let change = take(".change");
  let left = take("#left");
  let right = take("#right");
  let color_toggler = take(".box3_color>.container>.toggle>input");
  let left_a_all = document.querySelectorAll(".left_a");

  change_theme.checked = false;
  left.style.width = "0";
  right.style.marginLeft = "0";
  right.style.width = "100%";
  change.style.marginLeft = "4%";

  change_theme.addEventListener("change", () => {
    if (change_theme.checked === false) {
      left.style.width = "0";
      right.style.marginLeft = "0";
      right.style.width = "100%";
      change.style.marginLeft = "4%";
      take(".input_box_left").remove();
      document.querySelector(".line").style.display = "inline-block";
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
      document.body.classList.toggle("mycolor");
    } else {
      document.body.classList.toggle("mycolor");
    }
  });

  left_a_all.forEach((e) => {
    e.addEventListener("click", () => {
      left_a_all.forEach((item) => {
        item.classList.remove("hover_active");
      });
      e.classList.toggle("hover_active");
    });
  });
  let page = document.querySelectorAll(".page");

  window.addEventListener("scroll", () => {
    let top = window.scrollY;
    page.forEach((e) => {
      let offset = e.offsetTop;
      let height = e.offsetHeight;

      let id = e.getAttribute("id");
      if (top >= offset - 37 && top < offset + height - 37) {
        left_a_all.forEach((item) => {
          item.classList.remove("hover_active");
        });
        document.querySelector(`[href="#${id}"]`).classList.add("hover_active");
        console.log(`now you are in${id} page`);
      }
    });
  });

  // document.addEventListener("contextmenu", (e) => {
  //   e.preventDefault();
  // });
});
