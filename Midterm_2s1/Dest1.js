// Dest1.js

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Paris Data
        const parisData = data.destinations.find(dest => dest.name === "Paris");

        // Set the text for the backdrop
        document.getElementById("paris-text-1").textContent = parisData.Coverdescription;

        // Set the additional description text
        document.getElementById("paris-text-2").textContent = parisData.description[0]; // First description paragraph

        // Second Section: Experience Parisian Culture
        document.getElementById("paris-img-2").src = `./images/${parisData.images[1].url.split('/').pop()}`;
        document.getElementById("paris-img-2").alt = parisData.images[1].description;
        document.getElementById("paris-text-3").textContent = parisData.description[1]; // Second description paragraph

        // Third Section: Discover Parisian Cuisine
        document.getElementById("paris-img-3").src = `./images/${parisData.images[2].url.split('/').pop()}`;
        document.getElementById("paris-img-3").alt = parisData.images[2].description;
        document.getElementById("paris-text-4").textContent = parisData.description[2]; // Third description paragraph
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
