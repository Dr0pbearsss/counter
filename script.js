document.addEventListener('DOMContentLoaded', function() {
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');
    const resetButton = document.getElementById('resetButton');
    const countDisplay = document.getElementById('count');
    let count = 0;

    incrementButton.addEventListener('click', function() {
        count++;
        updateDisplay();
    });

    decrementButton.addEventListener('click', function() {
        count--;
        updateDisplay();
    });

    resetButton.addEventListener('click', function() {
        count = 0;
        updateDisplay();
    });

    function updateDisplay() {
        countDisplay.textContent = count;
        countDisplay.style.color = getRandomColor();
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
