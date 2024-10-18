function searchAnime(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    const animeCards = document.querySelectorAll('.anime-card');

    animeCards.forEach(card => {
        const animeName = card.getAttribute('data-name').toLowerCase();
        if (animeName.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function myFunction() {
    let element = document.body;
    element.classList.toggle("darkmode");
}

let favorites = [];

function addToFavorites(animeName) {
    if (!favorites.includes(animeName)) {
        favorites.push(animeName);
        updateFavoritesUI();
    } else {
        alert(animeName + "is already in your favorites!");
    }
}

function updateFavoritesUI() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';

    favorites.forEach(anime => {
        const li = document.createElement('li');
        li.textContent = anime;
        favoritesList.appendChild(li);
    });
}

fetchData();

function fetchData() {
    const pokemonName = document.getElementById("pokenName")?.value?.toLowerCase();
    if (!pokemonName) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
            return response.json();
        })
        .then(data => {
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        })
        .catch(error => console.error(error));
}