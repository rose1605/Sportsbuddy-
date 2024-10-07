// Firebase config and initialization (see firebaseConfig.js)
import { registerUser, loginUser, addSportsEvent, searchEvents } from './firebaseConfig.js';

// Register User
function registerUser() {
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  registerUser(email, password);
}

// Login User
function loginUser() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  loginUser(email, password);
}

// Add Sports Event
function addSportsEvent() {
  const eventDetails = {
    name: document.getElementById('event-name').value,
    category: document.getElementById('event-category').value,
    city: document.getElementById('event-city').value,
    area: document.getElementById('event-area').value,
    time: document.getElementById('event-time').value
  };
  addSportsEvent(eventDetails);
}

// Search Events
function searchEvents() {
  const city = document.getElementById('search-city').value;
  const category = document.getElementById('search-category').value;
  searchEvents(city, category);
}
