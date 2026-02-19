fetch("movie.json")
    .then(response => response.json())
    .then(movies => {
        const container = document.getElementById("movieContainer");

        movies.forEach(movie => {
            const card = document.createElement("div");
            card.classList.add("movie-card");

            card.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-title">${movie.title}</div>
            `;

            card.addEventListener("click", () => {
                window.open(movie.link, "_blank");
            });

            container.appendChild(card);
        });
    });
