


function loadContent(page) {
    const content = document.getElementById('content');
    if (page === 'home') {
        content.innerHTML = `
             <div class="heading">
            <h1>DISCOVER YOUR DREAM DESTINATION</h1>
        </div>
        <div class="about">
            <h3>Our travel website offers a curated collection of destinations, travel tips, and personalized itineraries. Whether you're seeking a relaxing beach getaway or an exciting city exploration, we've got you covered. Start planning your dream vacation today!</h3>
        </div>
        <div class="booknow">
            <button type="button">BOOK NOW</button>
        </div>
         </div>
        </div>   `;
    } else if (page === 'about') {
        content.innerHTML = `    
         <div class="heading-1">
            <h1>ABOUT US</h1>
        </div>
        <div class="about-us">
            <h3>TravelBloom is your trusted partner in crafting unforgettable travel experiences. We're dedicated to helping you discover the world, one adventure at a time. Whether you're dreaming of a tropical paradise, a bustling metropolis, or a serene countryside retreat, we're here to assist you every step of the way.

Our team of travel enthusiasts is passionate about curating personalized itineraries that cater to your unique desires. From budget-friendly options to luxury escapes, we'll work closely with you to plan the perfect trip. Explore our diverse collection of destinations, find inspiration for your next adventure, and let us help you create memories that will last a lifetime.</h3>
        </div>
        <div class="team">
            <h1>Our Team</h1>
        </div>
        <div class="team-container">
                <div class="team-member">
            <h2>John Doe</h2>
            <p class="designation">CEO</p>
            <p class="description">Visionary leader committed to delivering growth and innovation.</p>
            <div class="contact-icon">
                <a href="mailto:johndoe@example.com"><i class="fas fa-envelope"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
                <div class="team-member">
            <h2>Jane Smith</h2>
            <p class="designation">Team Lead</p>
            <p class="description">Dynamic leader driving teamwork and project success.</p>
            <div class="contact-icon">
                <a href="mailto:janesmith@example.com"><i class="fas fa-envelope"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
                <div class="team-member">
            <h2>Michael Johnson</h2>
            <p class="designation">Delivery Head</p>
            <p class="description">Ensuring timely project deliveries with precision and quality.</p>
            <div class="contact-icon">
                <a href="mailto:michaeljohnson@example.com"><i class="fas fa-envelope"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
        </div>

          `;
    } else if (page === 'contact') {
        content.innerHTML = `
                     <div class="contact-us">
            <h1>CONTACT US</h1>
        </div>
            <div class="contact-form">
        
        <form action="#" method="post">
            <label class="input-label" for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required>

            <label class="input-label" for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required>

            <label class="input-label" for="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </div>`;
    } 
    }



let jsonData = null;

       // Fetch the JSON data once
       fetch('travel_recommendation_api.json')
           .then(response => response.json())
           .then(data => {
               jsonData = data; // Store the JSON data
           })
           .catch(error => console.error('Error loading JSON:', error));

       // Add event listener to the search button
       document.getElementById('searchButton').addEventListener('click', filterResults);

       // Function to filter results based on search input
       function filterResults() {
           const searchValue = document.getElementById('searchBox').value.toLowerCase();
           const resultContainer = document.getElementById('resultContainer');
           let html = '';

           if (!jsonData) {
               resultContainer.innerHTML = 'Loading data...';
               return;
           }

           if (searchValue.includes('country')) {
               html += displayCountries(jsonData.countries);
           } 
           if (searchValue.includes('temple')) {
               html += displayTemples(jsonData.temples);
           } 
           if (searchValue.includes('beach')) {
               html += displayBeaches(jsonData.beaches);
           }

           // Show no result message if no matches found
           if (!html) {
               html = '<p>No matching results found.</p>';
           }

           resultContainer.innerHTML = html;
       }

       // Function to display countries
function displayCountries(countries) {
    let html = '<div class="result-section country-section"><h2>Countries</h2>';
    countries.forEach(country => {
        html += `<div class="country">
                    <h3>${country.name}</h3>`;
        country.cities.forEach(city => {
            html += `<div class="city">
                        <p class="city-name"><strong>${city.name}</strong></p>
                        <p><img src="${city.imageUrl}" alt="${city.name}" class="city-image"></p>
                        <p class="city-description">${city.description}</p>
                    </div>`;
        });
        html += '</div>';
    });
    html += '</div>';
    return html;
}

// Function to display temples
function displayTemples(temples) {
    let html = '<div class="result-section temple-section"><h2>Temples</h2>';
    temples.forEach(temple => {
        html += `<div class="temple">
                    <p class="temple-name"><strong>${temple.name}</strong></p>
                    <p><img src="${temple.imageUrl}" alt="${temple.name}" class="temple-image"></p>
                    <p class="temple-description">${temple.description}</p>
                </div>`;
    });
    html += '</div>';
    return html;
}

// Function to display beaches
function displayBeaches(beaches) {
    let html = '<div class="result-section beach-section"><h2>Beaches</h2>';
    beaches.forEach(beach => {
        html += `<div class="beach">
                    <p class="beach-name"><strong>${beach.name}</strong></p>
                    <p><img src="${beach.imageUrl}" alt="${beach.name}" class="beach-image"></p>
                    <p class="beach-description">${beach.description}</p>
                </div>`;
    });
    html += '</div>';
    return html;
}
       document.getElementById('searchButton').addEventListener('click', filterResults);



function clearResults() {
    location.reload(); // This reloads the page, effectively clearing all results and resetting the form
}



