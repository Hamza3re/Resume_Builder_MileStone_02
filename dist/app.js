var _a;

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

(_a = document.getElementById("previewBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", previewResume);

