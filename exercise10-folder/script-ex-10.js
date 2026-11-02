const button = document.getElementById("recommendationbutton");
const message = document.getElementById("recommendation");

button.addEventListener("click", function() {
    button.textContent = "Not feeling it? Click again for another recommendation!";
    
    const recommendations = [
        "Mexican cuisine is a great choice! Try tacos or tortas.",
        "Italian pasta is a delicious option! Try some spaghetti or fettuccine.",
        "Indian curry is a flavorful choice! Try chicken tikka masala or paneer butter masala.",
        "Fast food is always a quick and tasty option! Try a burger or fries.",
        "Japanese sushi is a fresh and healthy choice! Try some nigiri or maki rolls.",
        "Mediterranean cuisine is a light and healthy option! Try some hummus or falafel.",
        "Chinese stir-fry is a quick and easy choice! Try some chicken or beef with vegetables.",
        "Pizza is a classic comfort food! Try a Margherita or pepperoni pizza.",
    ];

    const randomIndex = Math.floor(Math.random() * recommendations.length);
    message.textContent = recommendations[randomIndex];

});