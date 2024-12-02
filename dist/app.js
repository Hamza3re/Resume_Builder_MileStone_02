// src/app.ts
var _a;
// Function to fetch form data
function getFormData() {
    var _a;
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var workExperience = document.getElementById("workexp").value;
    var academics = document.getElementById("academics").value;
    var objective = document.getElementById("objective").value;
    var skills = document.getElementById("skills").value;
    var projects = document.getElementById("projects").value;
    var achievements = document.getElementById("achievements").value;
    var profilePicture = (_a = document.getElementById("profilePicture").files) === null || _a === void 0 ? void 0 : _a[0];
    return { name: name, title: title, workExperience: workExperience, academics: academics, objective: objective, skills: skills, projects: projects, achievements: achievements, profilePicture: profilePicture };
}
// Function to display resume preview
function previewResume() {
    var data = getFormData();
    var previewSection = document.createElement("div");
    previewSection.innerHTML = "\n      <h3>".concat(data.name, "</h3>\n      <h4>").concat(data.title, "</h4>\n      <p><strong>Objective:</strong> ").concat(data.objective, "</p>\n      <p><strong>Work Experience:</strong> ").concat(data.workExperience, "</p>\n      <p><strong>Academic Details:</strong> ").concat(data.academics, "</p>\n      <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n      <p><strong>Projects:</strong> ").concat(data.projects, "</p>\n      <p><strong>Achievements:</strong> ").concat(data.achievements, "</p>\n    ");
    if (data.profilePicture) {
        var img = document.createElement("img");
        img.src = URL.createObjectURL(data.profilePicture);
        img.alt = "Profile Picture";
        img.style.width = "150px";
        img.style.height = "150px";
        previewSection.appendChild(img);
    }
    document.body.appendChild(previewSection);
}
// Attach event listener
(_a = document.getElementById("previewBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", previewResume);
// // Import necessary library for PDF generation
// import jsPDF from 'jspdf';
// // Grabbing DOM Elements
// const form = document.getElementById('resumeForm') as HTMLFormElement;
// const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
// const previewButton = document.getElementById('previewBtn') as HTMLButtonElement;
// const outputSection = document.getElementById('output') as HTMLDivElement;
// let isPreviewMode = false;
// let profilePictureURL: string = '';
// // Profile Picture Handler
// profilePictureInput.addEventListener('change', (event) => {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (file) {
//         if (file.size > 1024 * 1024) {
//             alert('The file size exceeds 1 MB. Please upload a smaller image.');
//             profilePictureInput.value = ''; // Reset input
//             return;
//         }
//         const reader = new FileReader();
//         reader.onload = () => {
//             profilePictureURL = reader.result as string;
//         };
//         reader.readAsDataURL(file);
//     }
// });
// // Function to Generate Static Preview
// const generateStaticPreview = () => {
//     const formData = new FormData(form);
//     const name = formData.get('name')?.toString() || '';
//     const title = formData.get('title')?.toString() || '';
//     const workExp = formData.get('workexp')?.toString() || '';
//     const academics = formData.get('academics')?.toString() || '';
//     const objective = formData.get('objective')?.toString() || '';
//     const skills = formData.get('skills')?.toString() || '';
//     const projects = formData.get('projects')?.toString() || '';
//     const achievements = formData.get('achievements')?.toString() || '';
//     const contact = formData.get('contact')?.toString() || '';
//     // Static Resume Output
//     outputSection.innerHTML = `
//         <div id="resumePreview">
//             <h2>${name}</h2>
//             <h3>${title}</h3>
//             ${profilePictureURL ? `<img id="profilePicturePreview" src="${profilePictureURL}" alt="Profile Picture" />` : ''}
//             <p><strong>Objective:</strong> ${objective}</p>
//             <p><strong>Work Experience:</strong> ${workExp}</p>
//             <p><strong>Academic Details:</strong> ${academics}</p>
//             <p><strong>Skills:</strong> ${skills}</p>
//             <p><strong>Projects:</strong> ${projects}</p>
//             <p><strong>Achievements:</strong> ${achievements}</p>
//             <p><strong>Contact:</strong> ${contact}</p>
//         </div>
//         <button id="downloadPdfBtn">Download PDF</button>
//     `;
//     // Attach Download Event Listener
//     const downloadPdfBtn = document.getElementById('downloadPdfBtn') as HTMLButtonElement;
//     downloadPdfBtn.addEventListener('click', downloadPDF);
// };
// // Function to Download Resume as PDF
// const downloadPDF = () => {
//     const resumePreview = document.getElementById('resumePreview');
//     if (!resumePreview) {
//         alert('No resume preview available.');
//         return;
//     }
//     const pdf = new jsPDF();
//     pdf.html(resumePreview, {
//         callback: (doc) => {
//             doc.save('resume.pdf');
//         },
//         x: 10,
//         y: 10,
//         width: 180,
//     });
// };
// // Toggle Between Form and Preview
// const togglePreviewMode = () => {
//     if (isPreviewMode) {
//         // Show form and hide preview
//         form.style.display = 'block';
//         outputSection.style.display = 'none';
//         previewButton.textContent = 'Preview Resume';
//     } else {
//         // Show preview and hide form
//         generateStaticPreview();
//         form.style.display = 'none';
//         outputSection.style.display = 'block';
//         previewButton.textContent = 'Edit Resume';
//     }
//     isPreviewMode = !isPreviewMode;
// };
// // Attach Event Listeners
// previewButton.addEventListener('click', togglePreviewMode);
