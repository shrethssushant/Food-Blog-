const keywordMap = {
    // Meals
    "Veg Combo Meal": "../html/recipe_Meals/recipe_Veg_Combo_meal.html", 
    "Kavya Ricebowl": "../html/recipe_Meals/recipe_Kavya_Ricebowl.html",
    "Non-Veg Combo Meal": "../html/recipe_Meals/recipe_Non_Veg_combo_meal.html", 
    "Egg Fried Rice": "../html/recipe_Meals/recipe_Egg_fry_rice.html", 
    "Chicken Fried Rice": "../html/recipe_Meals/recipe_Chicken_fry_rice.html",
    "Veg fry rice": "../html/recipe_Meals/recipe_Veg_fry_rice.html", 
    "Chicken Noodles": "../html/recipe_Meals/recipe_Noodles_Chicken.html", 
    "Veg Noodles": "../html/recipe_Meals/recipe_Noodles_Veg.html", 
    "Popcorn Ricebowl": "../html/recipe_Meals/recipe_Popcorn_ricebowl.html", 

    // Light Bites
    "Kavya Aloo": "../html/recipe_Light_Bites/recipe_Kavya_Aloo.html", 
    "Popcorn Chicken": "../html/recipe_Light_Bites/recipe_Pop_corn_chicken.html", 
    "Sausage Chilly": "../html/recipe_Light_Bites/recipe_Sausage_chilly.html", 
    "French Fries": "../html/recipe_Light_Bites/recipe_French_Fries.html", 
    "Chips Chilly": "../html/recipe_Light_Bites/recipe_Chips_chilly.html", 
    "Chicken Chilly": "../html/recipe_Light_Bites/recipe_Chicken_chilly.html", 
    "Bolognese Pasta Chicken": "../html/recipe_Light_Bites/recipe_Bolognese_pasta_chicken.html", 
    "Alfredo Creamy Chicken": "../html/recipe_Light_Bites/recipe_Alfredo_Creamy_Chicken.html", 
    "Alfredo Creamy Veg": "../html/recipe_Light_Bites/recipe_Alfredo_Creamy_Veg.html", 

    // Drinks
    "Americano": "../html/recipe_drinks/recipe_Americano.html",
    "Cafe Latte": "../html/recipe_drinks/recipe_Cafe_latte.html",
    "Cafe Mocha": "../html/recipe_drinks/recipe_Cafe_mocha.html",
    "Cappuccino": "../html/recipe_drinks/recipe_Cappuccino.html",
    "Hot Chocolate": "../html/recipe_drinks/recipe_hot_chocolate.html",
    "Lemonade": "../html/recipe_drinks/recipe_Lemonade.html",
    "Mocha Madeness": "../html/recipe_drinks/recipe_Mocha_madness.html",
    "Peach Ice Tea": "../html/recipe_drinks/recipe_Peach_ice_tea.html",
    "Virgin Mojito": "../html/recipe_drinks/recipe_Virgin_mojito.html",

    // Momo
    "Chicken Steam Momo": "../html/recipe_momo/recipe_momo_steam_chicken.html",
    "Buff Steam Momo": "../html/recipe_momo/recipe_momo_steam_buff.html",
    "Veg Steam Momo": "../html/recipe_momo/recipe_momo_steam_veg.html",
    "Chicken Kothey Momo": "../html/recipe_momo/recipe_Kothey_chicken.html",
    "Buff Kothey Momo": "../html/recipe_momo/recipe_Kothey_buff.html",
    "Veg Kothey Momo": "../html/recipe_momo/recipe_Kothey_veg.html",
    "Chicken Jhol Momo": "../html/recipe_momo/recpe_Jhol_Chicken.html", // Corrected
    "Buff Jhol Momo": "../html/recipe_momo/recpe_Jhol_Buff.html",
    "Veg Jhol Momo": "../html/recipe_momo/recpe_Jhol_veg.html",
};

// Get the search bar and suggestions container elements
const searchBar = document.getElementById('search-bar');
const suggestionsContainer = document.getElementById('suggestions');

// Function to show suggestions based on input
function showSuggestions(input) {
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions
    const suggestions = Object.keys(keywordMap).filter(keyword => 
        keyword.toLowerCase().startsWith(input.toLowerCase()) // Filter keywords that start with the input
    );

    if (suggestions.length > 0) {
        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = suggestion;
            suggestionItem.onclick = () => selectSuggestion(suggestion);
            suggestionsContainer.appendChild(suggestionItem);
        });
        suggestionsContainer.style.display = 'block'; // Show suggestions
    } else {
        suggestionsContainer.style.display = 'none'; // Hide if no suggestions
    }
}

// Function to handle suggestion selection
function selectSuggestion(suggestion) {
    const url = keywordMap[suggestion];
    if (url) {
    searchBar.value = suggestion; // Set the input value to the selected suggestion
    suggestionsContainer.style.display = 'none'; // Hide suggestions
    window.location.href = url;
    }
}

// Add an event listener for the 'input' event
searchBar.addEventListener('input', function() {
    const input = searchBar.value; // Get the input value
    showSuggestions(input); // Show suggestions based on input
});

// Add an event listener for the 'keypress' event
searchBar.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const input = searchBar.value; // Get the input value
        const url = keywordMap[input]; // Get the corresponding URL

        if (url) {
            window.location.href = url; // Redirect to the URL
        } else {
            alert("No matching recipe found."); // Alert if no match
        }
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', function(event) {
    if (!searchBar.contains(event.target) && !suggestionsContainer.contains(event.target)) {
        suggestionsContainer.style.display = 'none'; // Hide suggestions
    }
});