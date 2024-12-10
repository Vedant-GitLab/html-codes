// Function to cycle through the lights
let currentLight = 0;
const lights = ['red', 'yellow', 'green'];

function changeLight() {
    // Turn off all lights
    document.getElementById('red').classList.remove('active');
    document.getElementById('yellow').classList.remove('active');
    document.getElementById('green').classList.remove('active');

    // Turn on the current light
    document.getElementById(lights[currentLight]).classList.add('active');

    // Move to the next light in the sequence
    currentLight = (currentLight + 1) % lights.length;
}

// Change the light every 3 seconds (3000ms)
setInterval(changeLight, 3000);

// Initialize the first light (red)
changeLight();
