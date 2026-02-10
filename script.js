const btn = document.getElementById("scrollBtn");

btn.addEventListener("click", () => {
    document.getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
});
const audio = document.getElementById("loveSound");
audio.volume = 0.4; // lebih lembut

// beberapa browser butuh interaksi user
document.body.addEventListener("click", () => {
    audio.play();
}, { once: true });
const audio = document.getElementById("loveSound");
audio.volume = 0.4; // lebih lembut

// beberapa browser butuh interaksi user
document.body.addEventListener("click", () => {
    audio.play();
}, { once: true });