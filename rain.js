const container = document.getElementById("photoRain");
const photos = [
    "img/lopee.png",
    "img/lopeee.png",
    "img/lopee.png",
    "img/lopeee.png"
];

let rain = setInterval(() => {
    const img = document.createElement("img");
    img.src = photos[Math.floor(Math.random() * photos.length)];
    img.className = "rain-photo";

    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.animationDuration = 1.2 + Math.random() * 1 + "s";
    img.style.width = 30 + Math.random() * 40 + "px";
    img.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(img);

    setTimeout(() => img.remove(), 2500);
}, 120); // cepat

// berhenti setelah 4 detik
setTimeout(() => {
    clearInterval(rain);
}, 4000);