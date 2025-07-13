const keywordMap = {
    // Meals::::----
    // path is ../html/<subfolder>/<recipe>
    "Veg Combo Meal": "../recipe_Meals/recipe_Veg_Combo_meal.html", 
    "Kavya Ricebowl": "../recipe_Meals/recipe_Kavya_Ricebowl.html",
    "Non-Veg Combo Meal": "../recipe_Meals/recipe_Non_Veg_combo_meal.html", 
    "Egg Fried Rice": "../recipe_Meals/recipe_Egg_fry_rice.html", 
    "Chicken Fried Rice": "../recipe_Meals/recipe_Chicken_fry_rice.html",
    "Veg fry rice":"../recipe_Meals/recipe_Veg_fry_rice.html", 
    "Chicken Noodles": "../recipe_Meals/recipe_Noodles_Chicken.html", 
    "Veg Noodles": "../recipe_Meals/recipe_Noodles_Veg.html", 
    "Popcorn Ricebowl": "../recipe_Meals/recipe_Popcorn_ricebowl.html", 

   //light bites
    "Kavya Aloo": "../recipe_Light_Bites/recipe_Kavya_Aloo.html", 
    "Popcorn Chicken": "../recipe_Light_Bites/recipe_Pop_corn_chicken.html", 
    "Sausage Chilly": "../recipe_Light_Bites/recipe_Sausage_chilly.html", 
    "French Fries": "../recipe_Light_Bites/recipe_French_Fries.html", 
    "Chips Chilly": "../recipe_Light_Bites/recipe_Chips_chilly.html", 
    "Chicken Chilly": "../recipe_Light_Bites/recipe_Chicken_chilly.html", 
    "Bolognese Pasta Chicken": "../recipe_Light_Bites/recipe_Bolognese_pasta_chicken.html", 
    "Alfredo Creamy Chicken": "../recipe_Light_Bites/recipe_Alfredo_Creamy_Chicken.html", 
    "Alfredo Creamy Veg": "../recipe_Light_Bites/recipe_Alfredo_Creamy_Veg.html", 

    //Drinks::::----
        "Americano": "../recipe_drinks/recipe_Americano.html",
        "Cafe Latte": "../recipe_drinks/recipe_Cafe_latte.html",
        "Cafe Mocha": "../recipe_drinks/recipe_Cafe_mocha.html",
        "Cappuccino": "../recipe_drinks/recipe_Cappuccino.html",
        "Hot Chocolate": "../recipe_drinks/recipe_hot_choclate.html",
        "Lemonade": "../recipe_drinks/recipe_Lemonade.html",
        "Mocha Madeness": "../recipe_drinks/recipe_Mocha_madness.html",
        "Peach Ice Tea": "../recipe_drinks/recipe_Peach_ice_tea.html",
        "Virgin Mojito": "../recipe_drinks/recipe_Virgin_mojito.html",

    //momo
    "Chicken Steam Momo":"../recipe_momo/recipe_momo_steam_chicken.html",
    "Buff Steam Momo":"../recipe_momo/recipe_momo_steam_buff.html",
    "Veg Steam Momo":"../recipe_momo/recipe_momo_steam_veg.html",
    "Chicken Kothey Momo":"../recipe_momo/recipe_Kothey_chicken.html",
    "Buff Kothey Momo":"../recipe_momo/recipe_Kothey_buff.html",
    "Veg Kothey Momo":"../recipe_momo/recipe_Kothey_veg.html",
    "Chicken jhol Momo":"../recipe_momo/recpe_Jhol_Chicken.html", //doesnot work
    "Buff jhol Momo":"../recipe_momo/recpe_Jhol_Buff.html",
    "Veg jhol Momo":"../recipe_momo/recpe_Jhol_veg.html",


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
            alert("No matching website found."); // Alert if no match
        }
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', function(event) {
    if (!searchBar.contains(event.target)) {
        suggestionsContainer.style.display = 'none'; // Hide suggestions
    }
});