const gambar = document.getElementById("awal");
const video = document.getElementById("video");

let sudah = false;

async function jumpscare() {
    if (sudah) return;
    sudah = true;

    // Fullscreen
    if (document.documentElement.requestFullscreen) {
        try {
            await document.documentElement.requestFullscreen();
        } catch (e) {}
    }

    gambar.style.display = "none";
    video.style.display = "block";

    video.volume = 1;
    video.muted = false;
    video.play();

    // Fullscreen video untuk HP
    if (video.requestFullscreen) {
        video.requestFullscreen().catch(() => {});
    }

    if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
    }
}

["click","touchstart","mousedown","keydown"].forEach(e=>{
    document.addEventListener(e,jumpscare,{once:true});
});