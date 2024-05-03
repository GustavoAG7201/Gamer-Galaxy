    // URL de la API de RAWG
    const apiUrl = 'https://api.rawg.io/api/games?key=2d2ba3d6466049e7bbc159ef7713ab29';

    async function obtenerJuegos() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            // Obtener el contenedor de juegos
            const juegosContainer = document.getElementById('juegos-container');

            juegosContainer.innerHTML = '';

            // Iterar sobre los resultados y crear tarjetas para cada juego
            data.results.forEach(juego => {
                // Crear elementos HTML para cada juego
                const juegoCard = document.createElement('div');
                juegoCard.classList.add('col-lg-4', 'col-md-6', 'mb-4');

                const card = `
                    <div class="card bg-info text-white">
                        <img src="${juego.background_image}" class="card-img-top" alt="${juego.name}">
                        <div class="card-body">
                            <h5 class="card-title">${juego.name}</h5>
                            <p class="card-text">Released: ${juego.released}</p>
                            <p class="card-text">Rating: ${juego.rating}</p>
                            <p class="card-text">ESRB Rating: ${juego.esrb_rating.name}</p>
                        </div>
                    </div>
                `;

                // Agregar la tarjeta al contenedor
                juegoCard.innerHTML = card;
                juegosContainer.appendChild(juegoCard);
            });
        } catch (error) {
            console.log('Error al obtener juegos:', error);
        }
    }

    // Llamar a la función para obtener y mostrar los juegos cuando la página cargue
    document.addEventListener('DOMContentLoaded', obtenerJuegos);


