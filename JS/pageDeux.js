function onMysteryButtonClick() {
    var elm = document.getElementById("thingy");

    if (elm.classList.contains("animation")) {
        elm.classList.remove("animation");
    } else {
        elm.classList.remove("no-animation");
        elm.classList.add("animation");
    }
}
