const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navLinks = $$(".nav-link");
const songFavs = $$(".song-fav");
var click = 0;
navLinks.forEach(function (item) {
  item.onclick = (event) => {
    event.preventDefault();
    $(".nav-link.active").classList.remove("active");
    console.log(item);
    item.classList.add("active");
  };
});

songFavs.forEach(function (item) {
  item.onclick = (event) => {
    if (click % 2 === 0) {
      item.style.color = "red";
    } else {
      item.style.color = "#ccc";
    }
    click++;
  };
});

// songFav.onmouseup = (event) => {
//   songFav.style.color = "#ccc";
// };
