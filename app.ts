// Get references to DOM elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const output = document.getElementById('output') as HTMLDivElement;
const previewBtn = document.getElementById('previewBtn') as HTMLButtonElement;
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

let isPreview = false;
let profilePictureURL = "";

// Handle profile picture upload
profilePictureInput.addEventListener("change", (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profilePictureURL = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
});

// Collect form data and generate resume preview
function generateResume() {
    const formData = new FormData(form);
    const name = formData.get("name")?.toString() || "";
    const title = formData.get("title")?.toString() || "";
    const workexp = formData.get("workexp")?.toString() || "";
    const academics = formData.get("academics")?.toString() || "";
    const objective = formData.get("objective")?.toString() || "";
    const skills = formData.get("skills")?.toString() || "";
    const projects = formData.get("projects")?.toString() || "";
    const achievements = formData.get("achievements")?.toString() || "";
    const contact = formData.get("contact")?.toString() || "";

    output.innerHTML = `
        <img src="${profilePictureURL}" alt="Profile Picture" />
        <h2>${name}</h2>
        <h3>${title}</h3>
        <p><strong>Objective:</strong> ${objective}</p>
        <h4>Work Experience</h4>
        <p>${workexp}</p>
        <h4>Academic Details</h4>
        <p>${academics}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Projects</h4>
        <p>${projects}</p>
        <h4>Achievements</h4>
        <p>${achievements}</p>
        <h4>Contact</h4>
        <p>${contact}</p>
    `;
}

// Toggle between preview and edit mode
previewBtn.addEventListener("click", () => {
    if (isPreview) {
        form.style.display = "block";
        output.style.display = "none";
        previewBtn.textContent = "Preview or Edit";
    } else {
        generateResume();
        form.style.display = "none";
        output.style.display = "block";
        previewBtn.textContent = "Edit";
    }
    isPreview = !isPreview;
});
