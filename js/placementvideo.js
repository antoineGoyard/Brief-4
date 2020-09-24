var vid = document.getElementById("video");
function removeControls(video) {
    video.removeAttribute('controls');
}
window.onload = removeControls(video);