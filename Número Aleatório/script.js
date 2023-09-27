function generateRandomNumber() {
    
    document.getElementById("randomNumber").innerHTML = Math.floor(Math.random() * 100);
}

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        generateRandomNumber();
    }
});