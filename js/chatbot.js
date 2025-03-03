// Chatbot responses
const botResponses = {
    greetings: [
        "Hello! How can I help you today?",
        "Hi there! Welcome to CarListing. What can I assist you with?",
        "Welcome! I'm here to help you find your perfect car."
    ],
    
    carSearch: [
        "I can help you search for cars. What's your preferred make or model?",
        "Would you like to search by price range, make, or model?",
        "I can show you our available inventory. What type of car are you looking for?"
    ],
    
    pricing: [
        "Our cars range from $20,000 to $100,000. What's your budget?",
        "We have options for every budget. How much would you like to spend?",
        "I can help you find cars within your price range. What's your maximum budget?"
    ],
    
    selling: [
        "To sell your car, you'll need to create a dealer account. Would you like to sign up?",
        "I can guide you through the process of listing your car. First, you'll need to register.",
        "Selling your car is easy! Just sign up as a dealer and create your listing."
    ],
    
    financing: [
        "We offer various financing options. Would you like to learn more?",
        "Our financing partners offer competitive rates. Shall I provide more details?",
        "We can help you get approved for financing. Would you like to apply?"
    ],
    
    default: [
        "I'm not sure I understand. Could you please rephrase that?",
        "I didn't quite catch that. Could you be more specific?",
        "I'm still learning. Could you try asking in a different way?"
    ]
};

// Keywords for matching responses
const keywords = {
    greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    carSearch: ['find', 'search', 'looking for', 'available', 'inventory'],
    pricing: ['price', 'cost', 'budget', 'expensive', 'cheap'],
    selling: ['sell', 'list', 'selling', 'listing'],
    financing: ['finance', 'loan', 'credit', 'payment', 'financing']
};

// Function to get random response from array
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to find matching category based on keywords
function findMatchingCategory(message) {
    message = message.toLowerCase();
    
    for (let category in keywords) {
        if (keywords[category].some(keyword => message.includes(keyword))) {
            return category;
        }
    }
    return 'default';
}

// Function to add message to chat
function addMessage(message, isUser = false) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to handle user input
function handleUserInput(message) {
    addMessage(message, true);
    
    // Simulate typing delay
    setTimeout(() => {
        const category = findMatchingCategory(message);
        const response = getRandomResponse(botResponses[category]);
        addMessage(response);
    }, 500);
}

// Function to send message
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message) {
        handleUserInput(message);
        userInput.value = '';
    }
}

// Function to toggle chat visibility
function toggleChat() {
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.querySelector('.chat-input');
    
    if (chatBody.style.display === 'none') {
        chatBody.style.display = 'block';
        chatInput.style.display = 'flex';
    } else {
        chatBody.style.display = 'none';
        chatInput.style.display = 'none';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add initial greeting
    setTimeout(() => {
        addMessage(getRandomResponse(botResponses.greetings));
    }, 1000);
    
    // Handle enter key in input
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}); 