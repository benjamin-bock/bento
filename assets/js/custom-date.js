function setCustomDate() {
    const dateElement = document.getElementById('custom-date');
    if (dateElement) {
        const date = new Date();
        const options = { 
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        };
        dateElement.textContent = date.toLocaleDateString('fr-FR', options);
    }
}

// Exécuter immédiatement et toutes les secondes
setCustomDate();
setInterval(setCustomDate, 1000); 