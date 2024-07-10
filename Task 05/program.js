// Get the elements
const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');
const counter3 = document.getElementById('counter3');

// Set the target numbers
let target1 = 8;
let target2 = 150;
let target3 = 90;

// Set the current numbers
let current1 = 0;
let current2 = 0;
let current3 = 0;

// Function to update the counters
function updateCounters() {
  // Update counter 1
  if (current1 < target1) {
    current1++;
    counter1.textContent = current1.toLocaleString();
  }

  // Update counter 2
  if (current2 < target2) {
    current2++;
    counter2.textContent = current2.toLocaleString();
  }

  // Update counter 3
  if (current3 < target3) {
    current3++;
    counter3.textContent = current3.toLocaleString();
  }

  // Call the function again if any of the counters are still updating
  if (current1 < target1 || current2 < target2 || current3 < target3) {
    setTimeout(updateCounters, 30); // adjust the speed of the animation here
  }
}


// Start the animation
updateCounters();

