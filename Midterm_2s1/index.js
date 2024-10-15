// index.js

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Assign cover descriptions and cover images to each destination
        document.getElementById("paris-description").textContent = data.destinations[0].Coverdescription;
        document.getElementById("bali-description").textContent = data.destinations[1].Coverdescription;
        document.getElementById("newyork-description").textContent = data.destinations[2].Coverdescription;

        // Update cover images in the cards
        document.querySelector("#paris .card-img-top").src = `./images/${data.destinations[0].CoverImage}`;
        document.querySelector("#bali .card-img-top").src = `./images/${data.destinations[1].CoverImage}`;
        document.querySelector("#newyork .card-img-top").src = `./images/${data.destinations[2].CoverImage}`;
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
