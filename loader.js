let main = document.querySelector("#main");
let loader = document.querySelector(".main_body_loader");
main.style.display = "none";

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
  }, 4000);
});
