const audio1 = new Audio("login_dj.ogg");
let song= () => {
    audio1.play().catch((error) => {
      console.error("Failed to play audio:", error);
    });
    setTimeout(() => {

        audio1.pause();
        audio1.currentTime = 0;

    },4000)
};
// color change
const audio2 = new Audio("color_change.ogg");
let song1 = () => {
    audio2.play().catch((error) => {
      console.error("Failed to play audio:", error);
    });
    setTimeout(() => {
        audio2.pause();
        audio2.currentTime = 0;
    },4000)
}
document.querySelector(".box3_color>.container>.toggle>input").addEventListener("change", () => {

    song1();


});
// click a
const audio3 = new Audio("click_sound.ogg");
let song2 = () => {
    audio3.play().catch((error) => {
      console.error("Failed to play audio:", error);
    });
    setTimeout(() => {
        audio3.pause();
        audio3.currentTime = 0;
    },4000)
}
let left_a_click = document.querySelectorAll(".left_a");
left_a_click.forEach((item) => {
    item.addEventListener("click", () => {
        song2();
    })
    
})