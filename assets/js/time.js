// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

function displayClock() {
   
}

// S'assurer que le code s'exécute après le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    displayClock();
    setInterval(displayClock, 1000);
});
