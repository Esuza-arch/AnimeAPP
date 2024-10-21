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
      fetch(`${apiUrl}${query}`)
      .then(response => response.json())
      .then(data => displayAnime(data.data))
      .catch(error => console.error("Error fetching data:", error));
    } else {
      animeContainer.innerHTML = "";
    }
  })
});

rating.addEventListener("change", () => {
  const ratingValue = parseFloat(ratingFilter.value) * 10;
  const animeCards = document.querySelectorAll(".anime-card");

  animeCards.forEach(card => {
    const rating = parseFloat(card.getAttribute("data-rating"));
    if (rating >= ratingValue || !ratingValue) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});

function displayAnime(animeList) {
  
}