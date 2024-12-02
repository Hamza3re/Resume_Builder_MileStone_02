// src/app.ts

// Interface to define resume data structure
interface ResumeData {
  name: string;
  title: string;
  workExperience: string;
  academics: string;
  objective: string;
  skills: string;
  projects: string;
  achievements: string;
  profilePicture?: File;
}

// Function to fetch form data
function getFormData(): ResumeData {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const title = (document.getElementById("title") as HTMLInputElement).value;
  const workExperience = (document.getElementById("workexp") as HTMLTextAreaElement).value;
  const academics = (document.getElementById("academics") as HTMLTextAreaElement).value;
  const objective = (document.getElementById("objective") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  const projects = (document.getElementById("projects") as HTMLTextAreaElement).value;
  const achievements = (document.getElementById("achievements") as HTMLTextAreaElement).value;
  const profilePicture = (document.getElementById("profilePicture") as HTMLInputElement).files?.[0];

  return { name, title, workExperience, academics, objective, skills, projects, achievements, profilePicture };
}

// Function to display resume preview
function previewResume() {
  const data = getFormData();

  const previewSection = document.createElement("div");
  previewSection.innerHTML = `
      <h3>${data.name}</h3>
      <h4>${data.title}</h4>
      <p><strong>Objective:</strong> ${data.objective}</p>
      <p><strong>Work Experience:</strong> ${data.workExperience}</p>
      <p><strong>Academic Details:</strong> ${data.academics}</p>
      <p><strong>Skills:</strong> ${data.skills}</p>
      <p><strong>Projects:</strong> ${data.projects}</p>
      <p><strong>Achievements:</strong> ${data.achievements}</p>
    `;

  if (data.profilePicture) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(data.profilePicture);
    img.alt = "Profile Picture";
    img.style.width = "150px";
    img.style.height = "150px";
    previewSection.appendChild(img);
  }

  document.body.appendChild(previewSection);
}

// Attach event listener
document.getElementById("previewBtn")?.addEventListener("click", previewResume);
