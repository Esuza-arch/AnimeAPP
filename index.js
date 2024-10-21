document.addEventListener("DOMContentLoaded", () =>{
  const apiURL = "https://kitsu.io/api/edge/anime?filter[text]="
  const animeContainer = document.getElemenetById("anime-container");
  const searchInput = document.getElementById("searchInput");
  const ratingFilter = document.getElementById("ratingFilter");
  const themeToggle = document.getElementById("theme-toggle");
  const favoritesList = document.getElementById("favorites-list");
  let favorites = [];


  searchInput.addEventListener("keyup", () => {
    const query = serchInput.value;
    if (query) {
      fetch()
    }
  })
})