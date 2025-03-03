// Seeded car data
const cars = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        price: 25000,
        mileage: 15000,
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Well-maintained Toyota Camry with excellent fuel efficiency.',
        features: ['Bluetooth', 'Backup Camera', 'Lane Departure Warning']
    },
    {
        id: 2,
        make: 'Honda',
        model: 'CR-V',
        year: 2021,
        price: 27500,
        mileage: 22000,
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Spacious SUV perfect for family trips.',
        features: ['AWD', 'Sunroof', 'Apple CarPlay']
    },
    {
        id: 3,
        make: 'BMW',
        model: '3 Series',
        year: 2023,
        price: 45000,
        mileage: 5000,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Luxury sedan with premium features.',
        features: ['Leather Seats', 'Navigation', 'Premium Sound']
    },
    {
        id: 4,
        make: 'Tesla',
        model: 'Model 3',
        year: 2022,
        price: 52000,
        mileage: 12000,
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'All-electric vehicle with cutting-edge technology.',
        features: ['Autopilot', 'Glass Roof', 'Premium Interior']
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
                <img src="${car.image}" class="card-img-top" alt="${car.make} ${car.model}">
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

// Function to load car details
function loadCarDetails() {
    const carDetailsContainer = document.getElementById('carDetails');
    if (carDetailsContainer) {
        const carId = parseInt(getUrlParameter('id'));
        const car = cars.find(c => c.id === carId);
        
        if (car) {
            carDetailsContainer.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="${car.image}" class="img-fluid rounded" alt="${car.make} ${car.model}">
                    </div>
                    <div class="col-md-6">
                        <h2>${car.year} ${car.make} ${car.model}</h2>
                        <p class="car-price">${formatPrice(car.price)}</p>
                        <p><strong>Mileage:</strong> ${car.mileage.toLocaleString()} miles</p>
                        <p>${car.description}</p>
                        <h4>Features:</h4>
                        <ul>
                            ${car.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        <button class="btn btn-primary btn-lg mt-3">Contact Dealer</button>
                    </div>
                </div>
            `;
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