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