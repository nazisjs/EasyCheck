const stepData = {
    1: [
        "Visual inspection - checking for corrosion, cracks, leaks and damage",
        "Pressure Testing (Hydrostatic Test)",
        "Non-Destructive Testing (NDT)",
        "Functional Testing"
    ],
    2: [
        "Inspect power cable",
        "Verify calibration status",
        "Test backup battery"
    ],
    3: [
        "Check fluid levels",
        "Inspect mechanical parts",
        "Ensure labels are legible"
    ],
    4: [
        "Review safety mechanisms",
        "Run diagnostic program",
        "Check network connection"
    ]
};

let currentStep = 1;
const totalSteps = 4;

function loadCheckboxes() {
    const container = document.getElementById("checks-container");
    container.innerHTML = "";

    stepData[currentStep].forEach((text, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
      <input type="checkbox" class="check" onchange="checkAllBoxes()">
      ${text}
    `;
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    });

    // Reset button states
    document.getElementById("completeBtn").disabled = true;
    document.getElementById("nextBtn").disabled = true;
    document.getElementById("prevBtn").disabled = currentStep === 1;
}

function checkAllBoxes() {
    const boxes = document.querySelectorAll(".check");
    const allChecked = Array.from(boxes).every(box => box.checked);
    document.getElementById("completeBtn").disabled = !allChecked;
}

function completeStep() {
    const circle = document.getElementById(`circle${currentStep}`);
    circle.classList.add("done");
    circle.innerHTML = "✓";
    document.getElementById("nextBtn").disabled = false;
    document.getElementById("completeBtn").disabled = true;
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        loadCheckboxes();
    } else if (currentStep === totalSteps) {
        // Redirect to report.html instead of hiding
        window.location.href = reportUrl;

        // Optional fade-out
        container.classList.add("hide");
        setTimeout(() => {
            container.style.display = "none";
        }, 100);
    }
}


function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        loadCheckboxes();
    }
}

window.onload = loadCheckboxes;

function closeCheckPanel() {
    const container = document.querySelector(".container");
    container.classList.add("hide");

    // Optional: remove from layout after fade-out
    setTimeout(() => {
        container.style.display = "none";
    }, 100);
}








// Simulated check results (this should ideally come from memory, storage, or backend)
const reportData = [
    {
        title: "Security System Check",
        description: "All systems are operating correctly",
        status: "passed"
    },
    {
        title: "Technical Condition of Equipment",
        description: "Bearing wear detected",
        status: "failed"
    },
    {
        title: "Sensor Calibration",
        description: "Calibration completed successfully",
        status: "passed"
    }
];

// When report.html loads
if (document.getElementById("reportCards")) {
    const reportCardsContainer = document.getElementById("reportCards");
    let hasFailure = false;

    reportData.forEach(item => {
        const card = document.createElement("div");
        card.className = `report-card ${item.status}`;

        const left = document.createElement("div");
        left.innerHTML = `<div class="title">${item.title}</div>
                      <div class="desc">${item.description}</div>`;

        const right = document.createElement("div");
        right.className = `status-badge ${item.status}`;
        right.textContent = item.status;

        if (item.status === "failed") hasFailure = true;

        card.appendChild(left);
        card.appendChild(right);
        reportCardsContainer.appendChild(card);
    });

    const overall = document.getElementById("overallResult");
    overall.textContent = hasFailure ? "Attention Required" : "All Clear";
}

