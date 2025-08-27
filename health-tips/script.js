// ----------------------
// Part 1: Variables & Conditionals
// ----------------------
function checkAge() {
  let age = document.getElementById("ageInput").value; // variable
  let message = "";

  // conditional statement
  if (age < 18) {
    message = "Focus on proper sleep and balanced diet!";
  } else if (age <= 40) {
    message = "Stay active and manage stress well.";
  } else {
    message = "Regular check-ups are important. Stay hydrated!";
  }

  // DOM update
  const ageMessage = document.getElementById("ageMessage");
  ageMessage.textContent = message;

  // Optional: add subtle highlight effect
  ageMessage.classList.add("highlight");
  setTimeout(() => ageMessage.classList.remove("highlight"), 1500);
}

// ----------------------
// Part 2: Functions
// ----------------------
// Function 1: Calculate daily water intake
function calculateWater() {
  let weight = document.getElementById("weightInput").value;
  if (!weight || weight <= 0) {
    alert("Please enter a valid weight.");
    return;
  }

  let intake = weight * 35; // 35ml per kg body weight
  const waterResult = document.getElementById("waterResult");
  waterResult.textContent = "You need about " + intake + " ml of water daily.";

  // Highlight result
  waterResult.classList.add("highlight");
  setTimeout(() => waterResult.classList.remove("highlight"), 1500);
}

// Function 2: Reusable function to create list items
function addListItem(parentId, text) {
  let li = document.createElement("li");
  li.textContent = text;
  document.getElementById(parentId).appendChild(li);
}

// ----------------------
// Part 3: Loops
// ----------------------
// Example 1: Exercise countdown using for loop
function startCountdown() {
  const countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = ""; // clear list
  for (let i = 5; i >= 1; i--) {
    addListItem("countdownList", "Do exercise rep: " + i);
  }
}

// Example 2: Loop through an array of nursing tips
const nursingTips = [
  "Wash hands before patient care.",
  "Check vital signs regularly.",
  "Encourage patient hydration.",
  "Document accurately and timely."
];

// ----------------------
// Part 4: DOM Manipulation
// ----------------------
// Example 1: Show tips dynamically with highlight toggle
function showTips() {
  const tipsList = document.getElementById("tipsList");
  tipsList.innerHTML = ""; // clear old tips

  nursingTips.forEach((tip) => {
    addListItem("tipsList", tip);
  });

  // Highlight the list briefly
  tipsList.classList.add("highlight");
  setTimeout(() => tipsList.classList.remove("highlight"), 1500);
}

// Example 2: Toggle highlight class manually
function toggleHighlight() {
  const tipsList = document.getElementById("tipsList"); // target the tips list
  tipsList.classList.toggle("highlight"); // toggle highlight class
}

// Example 3: Event-driven interaction already handled by button clicks
