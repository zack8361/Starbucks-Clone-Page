//
//
//
//
//
//
//
//MAIN HEADER - SEARCH
const serachEl = document.querySelector(".search");
const searchInputEl = serachEl.querySelector("input");

serachEl.addEventListener("click", function () {
  if (!searchInputEl.classList.contains("toggle")) {
    searchInputEl.focus();
    searchInputEl.classList.add("toggle");
  } else {
    searchInputEl.blur();
    searchInputEl.classList.remove("toggle");
  }
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});
