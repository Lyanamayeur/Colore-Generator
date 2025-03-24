// Sélection des éléments
const colorCode = document.getElementById("color-code");
const toggleBtn = document.getElementById("toggle-btn");

let intervalId; // Stocke l'intervalle
let isRunning = true; // Indique si l'animation tourne

// Fonction pour générer une couleur hexadécimale aléatoire
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Fonction pour mettre à jour la couleur du fond et le texte
function changeColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
}

// Lancer le changement de couleur automatiquement
function startColorChange() {
    intervalId = setInterval(changeColor, 1000);
}

// Arrêter le changement de couleur
function stopColorChange() {
    clearInterval(intervalId);
}

// Toggle pour démarrer ou arrêter l'effet
toggleBtn.addEventListener("click", () => {
    if (isRunning) {
        stopColorChange();
        toggleBtn.textContent = "Start";
    } else {
        startColorChange();
        toggleBtn.textContent = "Stop";
    }
    isRunning = !isRunning;
});

// Démarrer l'animation au chargement
startColorChange();
