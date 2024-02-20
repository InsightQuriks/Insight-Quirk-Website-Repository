// Arrays of words, colors, and fonts to choose from
const words = ["Productivity", "Creativity", "Innovation", "Efficiency", "Success", "Inspiration"];
const colors = ["#007BFF", "#FF5733", "#33FF57", "#FF33D1", "#33FFFC", "#FFAA33"];
const fonts = ["Helvetica, Arial, sans-serif", "Verdana, Geneva, sans-serif", "Georgia, serif", "Times New Roman, serif", "Courier New, monospace", "Tahoma, Geneva, sans-serif"];

// Get the h1 element with the class "center"
const h1Element = document.getElementById("dynamicWord");

// Function to change the word, font color, and font style
function changeWordAndStyle() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

    h1Element.textContent = words[randomIndex];
    h1Element.style.color = randomColor;
    h1Element.style.fontFamily = randomFont;
}

// Call the changeWordAndStyle function every 5 seconds (5000 milliseconds)
setInterval(changeWordAndStyle, 3000);

// Initial word change and style
changeWordAndStyle();
