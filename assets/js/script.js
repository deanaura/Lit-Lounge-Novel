// dropdown for genre-list
const dropdownBtnGenre = document.getElementById("drop-text-genre");
const spanGenre = document.getElementById("span-genre");
const iconGenre = document.getElementById("icon-genre");
const genreList = document.getElementById("genre-list");
const genreListItems = document.querySelectorAll(".genre-list-item");

dropdownBtnGenre.onclick = function () {
    if (genreList.classList.contains("show")) {
        iconGenre.style.rotate = "0deg";
    } else {
        iconGenre.style.rotate = "-180deg";
    }
    genreList.classList.toggle("show");
}

window.onclick = function (e) {
    if (
        e.target.id !== "drop-text-genre" &&
        e.target.id !== "span-genre" &&
        e.target.id !== "icon-genre"
    ) {
        genreList.classList.remove("show");
        iconGenre.style.rotate = "0deg";
    }
}

for (itemGenre of genreListItems) {
    itemGenre.onclick = function (e) {
        spanGenre.innerText = e.target.innerText;
    }
}