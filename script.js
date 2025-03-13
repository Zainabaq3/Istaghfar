document.addEventListener("DOMContentLoaded", function() {
    let count = 0; // Initialize counter

    // Select elements
    const incrementButton = document.getElementById("incrementButton");
    const decrementButton = document.getElementById("decrementButton");
    const counterDisplay = document.getElementById("counterDisplay");

    function updateCounterDisplay() {
        counterDisplay.innerText = `لقد استغفرت ${count} مرة`;
    }

    // Debugging: Log button elements to ensure they exist
    console.log("Checking elements:", incrementButton, decrementButton, counterDisplay);

    if (incrementButton && decrementButton && counterDisplay) {
        incrementButton.addEventListener("click", function() {
            count++;
            updateCounterDisplay();
            console.log(`Increment clicked, count: ${count}`);
        });

        decrementButton.addEventListener("click", function() {
            count = 0;
            updateCounterDisplay();
            console.log("Reset clicked, count reset to 0");
        });

        updateCounterDisplay(); // Initial display update
    } else {
        console.error("Error: One or more elements not found! Check HTML IDs.");
    }
});
