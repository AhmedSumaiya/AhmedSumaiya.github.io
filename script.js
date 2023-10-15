// Get the button element by its ID
const changeColorButton = document.getElementById('change-color-button');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color when the button is clicked
function changeBackgroundColor() {
    // Get a random color
    const randomColor = getRandomColor();

    // Set the background color of the body to the random color
    document.body.style.backgroundColor = randomColor;
}

// Attach the changeBackgroundColor function to the button's click event
changeColorButton.addEventListener('click', changeBackgroundColor);
