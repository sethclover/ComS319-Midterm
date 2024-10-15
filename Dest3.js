// Dest3.js

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // New York City Data
        const nycData = data.destinations.find(dest => dest.name === "New York City");

        // Set the text for the backdrop
        document.getElementById("nyc-text-1").textContent = nycData.Coverdescription;

        // Set the additional description text
        document.getElementById("nyc-text-2").textContent = nycData.description[0]; // First description paragraph

        // Second Section: Experience the City That Never Sleeps
        document.getElementById("nyc-img-2").src = `./images/${nycData.images[1].url.split('/').pop()}`;
        document.getElementById("nyc-img-2").alt = nycData.images[1].description;
        document.getElementById("nyc-text-3").textContent = nycData.description[1]; // Second description paragraph

        // Third Section: Discover NYC's Iconic Landmarks
        document.getElementById("nyc-img-3").src = `./images/${nycData.images[2].url.split('/').pop()}`;
        document.getElementById("nyc-img-3").alt = nycData.images[2].description;
        document.getElementById("nyc-text-4").textContent = nycData.description[2]; // Third description paragraph
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
