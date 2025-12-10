const habitInput = document.getElementById("habitInput");
const addHabitBtn = document.getElementById("addHabitBtn");
const habitList = document.getElementById("habitList");

// Add habit (button click)
addHabitBtn.addEventListener("click", addHabit);

// Add habit using ENTER key
habitInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addHabit();
    }
});

function addHabit() {
    const text = habitInput.value.trim();
    if (text === "") return;

    // Create <li>
    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span class="habit-text">${text}</span>
        <button class="delete-btn">Delete</button>
    `;

    habitList.appendChild(li);

    // Clear input
    habitInput.value = "";
    habitInput.focus();

    // Checkbox complete effect
    li.querySelector(".checkbox").addEventListener("change", function() {
        li.querySelector(".habit-text").classList.toggle("completed");
    });

    // Delete button
    li.querySelector(".delete-btn").addEventListener("click", function() {
        li.style.animation = "fadeOut 0.3s forwards";
        setTimeout(() => li.remove(), 250);
    });
}
