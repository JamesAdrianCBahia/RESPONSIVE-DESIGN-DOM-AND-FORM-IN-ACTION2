const studentForm = document.getElementById("student_form");
const studentName = document.getElementById("student_name");
const program = document.getElementById("program");
const studentContainer = document.getElementById("student_container");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = studentName.value;
    const studentProgram = program.value;

    const studentCard = document.createElement("div");
    studentCard.classList.add("student-card");

    const nameElement = document.createElement("h3");
    nameElement.textContent = name;

    const programElement = document.createElement("p");
    programElement.textContent = "Program: " + studentProgram;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.addEventListener("click", function() {
        studentCard.remove();
    });

    studentCard.appendChild(nameElement);
    studentCard.appendChild(programElement);
    studentCard.appendChild(removeButton);

    studentContainer.appendChild(studentCard);
    
    studentForm.reset();
});