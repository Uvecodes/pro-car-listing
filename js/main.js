// Seeded car data
const cars = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        price: 25000,
        mileage: 15000,
        images: [
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        ],
        description: 'Well-maintained Toyota Camry with excellent fuel efficiency.',
        features: ['Bluetooth', 'Backup Camera', 'Lane Departure Warning', 'Adaptive Cruise Control', 'Keyless Entry', 'Push Button Start', 'Apple CarPlay', 'Android Auto']
    },
    {
        id: 2,
        make: 'Honda',
        model: 'CR-V',
        year: 2021,
        price: 27500,
        mileage: 22000,
        images: [
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        ],
        description: 'Spacious SUV perfect for family trips.',
        features: ['AWD', 'Sunroof', 'Apple CarPlay', 'Honda Sensing', 'Leather Seats', 'Heated Seats', 'Power Liftgate', 'Roof Rails', 'Remote Start']
    },
    {
        id: 3,
        make: 'BMW',
        model: '3 Series',
        year: 2023,
        price: 45000,
        mileage: 5000,
        images: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        ],
        description: 'Luxury sedan with premium features.',
        features: ['Leather Seats', 'Navigation', 'Premium Sound', 'Heads-up Display', 'Parking Assistant', 'Wireless Charging', 'BMW iDrive', 'Sport Package', 'Ambient Lighting', 'M Sport Brakes']
    },
    {
        id: 4,
        make: 'Tesla',
        model: 'Model 3',
        year: 2022,
        price: 52000,
        mileage: 12000,
        images: [
            'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1561580125-028ee3bd62eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
        ],
        description: 'All-electric vehicle with cutting-edge technology.',
        features: ['Autopilot', 'Glass Roof', 'Premium Interior', 'Full Self-Driving Capability', 'Supercharging', 'Premium Audio', 'Smart Air Suspension', 'Premium Connectivity', 'Sentry Mode', 'Dog Mode']
    }
];

// Function to format price
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

// Function to create car cards
function createCarCard(car) {
    return `
        <div class="col-md-3 col-sm-6">
            <div class="card car-card">
                <img src="${car.images[0]}" class="card-img-top" alt="${car.make} ${car.model}">
                <div class="card-body">
                    <h5 class="card-title">${car.year} ${car.make} ${car.model}</h5>
                    <p class="car-price">${formatPrice(car.price)}</p>
                    <p class="card-text">Mileage: ${car.mileage.toLocaleString()} miles</p>
                    <a href="car-details.html?id=${car.id}" class="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
    `;
}

// Function to load cars
function loadCars() {
    const carList = document.getElementById('carList');
    if (carList) {
        carList.innerHTML = cars.map(car => createCarCard(car)).join('');
    }
}

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to switch main image when thumbnail is clicked
function switchMainImage(thumbnail) {
    // Update main image
    const mainImage = document.getElementById('mainCarImage');
    mainImage.src = thumbnail.src;
    
    // Update active state of thumbnails
    const thumbnails = document.querySelectorAll('.car-thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Function to load car details
function loadCarDetails() {
    const carDetailsContainer = document.getElementById('carDetails');
    if (carDetailsContainer) {
        const carId = parseInt(getUrlParameter('id'));
        const car = cars.find(c => c.id === carId);
        
        if (car) {
            // Create the image gallery HTML
            const imageGalleryHtml = `
                <div class="col-md-7">
                    <!-- Main Image -->
                    <div class="main-image-container mb-3">
                        <img id="mainCarImage" src="${car.images[0]}" class="img-fluid rounded" alt="${car.make} ${car.model}">
                    </div>
                    <!-- Thumbnail Carousel -->
                    <div class="thumbnail-carousel">
                        <div class="row g-2">
                            ${car.images.map((image, index) => `
                                <div class="col-3">
                                    <img src="${image}" 
                                         class="img-thumbnail car-thumbnail ${index === 0 ? 'active' : ''}" 
                                         alt="${car.make} ${car.model} View ${index + 1}" 
                                         onclick="switchMainImage(this)">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <h2 id="carTitle">${car.year} ${car.make} ${car.model}</h2>
                    <div class="price-tag mb-3">
                        <h3 id="carPrice" class="text-primary">${formatPrice(car.price)}</h3>
                    </div>
                    <div class="car-specs">
                        <p><i class="fas fa-calendar me-2"></i><span id="carYear">${car.year}</span></p>
                        <p><i class="fas fa-tachometer-alt me-2"></i><span id="carMileage">${car.mileage.toLocaleString()} miles</span></p>
                        <p><i class="fas fa-gas-pump me-2"></i><span id="carFuel">Gasoline</span></p>
                        <p><i class="fas fa-cog me-2"></i><span id="carTransmission">Automatic</span></p>
                    </div>
                    <div class="car-description mt-4">
                        <h4>Description</h4>
                        <p id="carDescription">${car.description}</p>
                    </div>
                    <div class="car-features">
                        <h4>Key Features</h4>
                        <ul>
                            ${car.features.map(feature => `
                                <li><i class="fas fa-check-circle"></i>${feature}</li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="action-buttons mt-4">
                        <button class="btn btn-primary me-2"><i class="fas fa-envelope me-2"></i>Contact Seller</button>
                        <button class="btn btn-outline-primary"><i class="fas fa-heart me-2"></i>Save Car</button>
                    </div>
                </div>
            `;
            
            carDetailsContainer.innerHTML = `<div class="row">${imageGalleryHtml}</div>`;
        } else {
            carDetailsContainer.innerHTML = '<div class="alert alert-danger">Car not found</div>';
        }
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadCars();
    loadCarDetails();
});

// Search functionality
const searchInput = document.querySelector('input[type="text"]');
if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCars = cars.filter(car => 
            car.make.toLowerCase().includes(searchTerm) ||
            car.model.toLowerCase().includes(searchTerm) ||
            car.year.toString().includes(searchTerm)
        );
        
        const carList = document.getElementById('carList');
        carList.innerHTML = filteredCars.map(car => createCarCard(car)).join('');
    });
} 