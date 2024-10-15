// dest2.js

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Bali Data
        const baliData = data.destinations.find(dest => dest.name === "Bali");

        // Set the text for the backdrop
        document.getElementById("bali-text-1").textContent = baliData.Coverdescription;

        // Set the additional description text
        document.getElementById("bali-text-2").textContent = "Bali, known as the \"Island of the Gods,\" is a tropical paradise renowned for its breathtaking landscapes, vibrant culture, and warm hospitality. From lush rice terraces and serene beaches to active volcanoes and dense jungles, Bali’s natural beauty is captivating. Visitors can explore stunning temples such as Tanah Lot and Uluwatu, which are perched dramatically along the coastline. Bali's iconic sunsets and tranquil surroundings make it a perfect destination for both relaxation and adventure.";

        // Set cultural description text
        document.getElementById("bali-text-3").textContent = "Culturally rich and deeply spiritual, Bali offers a unique glimpse into traditional Indonesian life. The island is home to a rich tapestry of Hindu customs, vibrant festivals, and intricate art forms. Visitors can experience Balinese culture firsthand by attending a traditional dance performance, visiting local art markets, or exploring the artisan villages of Ubud. Bali’s temples, festivals, and rituals are integral to daily life, offering travelers a sense of serenity and a connection to the island’s spiritual roots.";

        // Second Section: Experience Balinese Culture
        document.getElementById("bali-img-2").src = `./images/${baliData.images[1].url.split('/').pop()}`;
        document.getElementById("bali-img-2").alt = baliData.images[1].description;
        document.getElementById("bali-text-4").textContent = baliData.description[1]; // Culture description for the second section

        // Third Section: Relax in Paradise
        document.getElementById("bali-img-3").src = `./images/${baliData.images[2].url.split('/').pop()}`;
        document.getElementById("bali-img-3").alt = baliData.images[2].description;
        document.getElementById("bali-text-5").textContent = baliData.description[2]; // Relaxation description for the third section
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
