// ==========================================
// CLOUDHIRE - CLOUD JOB PORTAL
// ==========================================


// ==========================================
// JOB DATA
// ==========================================

let jobs = [

    {
        title: "Java Developer",
        company: "TechNova Solutions",
        location: "Chennai",
        type: "Full Time",
        salary: "₹4 - ₹7 LPA",
        skills: ["Java", "Spring Boot", "SQL"]
    },

    {
        title: "Frontend Developer",
        company: "CloudWorks",
        location: "Remote",
        type: "Internship",
        salary: "₹15,000 / month",
        skills: ["HTML", "CSS", "JavaScript"]
    },

    {
        title: "Cloud Engineer",
        company: "SkyStack Technologies",
        location: "Bangalore",
        type: "Full Time",
        salary: "₹6 - ₹10 LPA",
        skills: ["AWS", "Docker", "Linux"]
    },

    {
        title: "Python Developer",
        company: "DataSphere",
        location: "Hyderabad",
        type: "Full Time",
        salary: "₹5 - ₹9 LPA",
        skills: ["Python", "Django", "MongoDB"]
    },

    {
        title: "UI/UX Designer",
        company: "CreativeLabs",
        location: "Chennai",
        type: "Part Time",
        salary: "₹20,000 / month",
        skills: ["Figma", "UI Design", "UX"]
    },

    {
        title: "AI Intern",
        company: "FutureTech",
        location: "Remote",
        type: "Internship",
        salary: "₹12,000 / month",
        skills: ["Python", "AI", "Machine Learning"]
    }

];


// ==========================================
// DISPLAY JOBS
// ==========================================

function displayJobs(jobList) {

    const container =
        document.getElementById("jobContainer");


    // If no jobs found

    if (jobList.length === 0) {

        container.innerHTML = `
            <div class="no-jobs">
                <h3>No jobs found</h3>

                <p>
                    Try searching with another keyword.
                </p>
            </div>
        `;

        return;
    }


    // Generate job cards

    container.innerHTML = jobList.map((job, index) => {

        return `

            <div class="job-card">

                <h3>
                    ${job.title}
                </h3>


                <p class="company">
                    ${job.company}
                </p>


                <p class="job-info">

                    📍 ${job.location}

                    &nbsp; | &nbsp;

                    ${job.type}

                </p>


                <p class="salary">

                    ${job.salary}

                </p>


                <div class="skills">

                    ${job.skills.map(skill => {

                        return `
                            <span class="skill">
                                ${skill}
                            </span>
                        `;

                    }).join("")}

                </div>


                <button
                    onclick="applyJob(${index})"
                >

                    Apply Now

                </button>

            </div>

        `;

    }).join("");

}


// ==========================================
// SEARCH JOBS
// ==========================================

function searchJobs() {

    const searchInput =
        document.getElementById("searchInput");


    const search =
        searchInput.value.toLowerCase().trim();


    const location =
        document.getElementById(
            "locationFilter"
        ).value;


    const type =
        document.getElementById(
            "typeFilter"
        ).value;


    const filteredJobs = jobs.filter(job => {


        // Search title

        const titleMatch =
            job.title
                .toLowerCase()
                .includes(search);


        // Search company

        const companyMatch =
            job.company
                .toLowerCase()
                .includes(search);


        // Search skills

        const skillMatch =
            job.skills
                .join(" ")
                .toLowerCase()
                .includes(search);


        // Location filter

        const locationMatch =
            location === "" ||
            job.location === location;


        // Job type filter

        const typeMatch =
            type === "" ||
            job.type === type;


        return (

            (titleMatch ||
             companyMatch ||
             skillMatch)

            &&

            locationMatch

            &&

            typeMatch

        );

    });


    displayJobs(filteredJobs);

}


// ==========================================
// FILTER JOBS
// ==========================================

function filterJobs() {

    searchJobs();

}


// ==========================================
// APPLY FOR JOB
// ==========================================

function applyJob(index) {

    const job = jobs[index];


    document.getElementById(
        "selectedJob"
    ).innerText =
        "Applying for: " +
        job.title +
        " at " +
        job.company;


    document.getElementById(
        "applyModal"
    ).style.display = "flex";

}


// ==========================================
// CLOSE APPLY MODAL
// ==========================================

function closeModal() {

    document.getElementById(
        "applyModal"
    ).style.display = "none";

}


// ==========================================
// SUBMIT APPLICATION
// ==========================================

function submitApplication() {

    const name =
        document.getElementById(
            "candidateName"
        ).value.trim();


    const email =
        document.getElementById(
            "candidateEmail"
        ).value.trim();


    const phone =
        document.getElementById(
            "candidatePhone"
        ).value.trim();


    const resume =
        document.getElementById(
            "resume"
        ).value.trim();


    // Validation

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        resume === ""
    ) {

        alert(
            "Please fill all the required fields."
        );

        return;

    }


    // Success message

    alert(
        "Application submitted successfully!"
    );


    // Clear fields

    document.getElementById(
        "candidateName"
    ).value = "";


    document.getElementById(
        "candidateEmail"
    ).value = "";


    document.getElementById(
        "candidatePhone"
    ).value = "";


    document.getElementById(
        "resume"
    ).value = "";


    // Close modal

    closeModal();

}


// ==========================================
// OPEN POST JOB MODAL
// ==========================================

function openPostJob() {

    document.getElementById(
        "postModal"
    ).style.display = "flex";

}


// ==========================================
// CLOSE POST JOB MODAL
// ==========================================

function closePostJob() {

    document.getElementById(
        "postModal"
    ).style.display = "none";

}


// ==========================================
// POST A NEW JOB
// ==========================================

function postJob() {

    const title =
        document.getElementById(
            "jobTitle"
        ).value.trim();


    const company =
        document.getElementById(
            "companyName"
        ).value.trim();


    const location =
        document.getElementById(
            "jobLocation"
        ).value.trim();


    const type =
        document.getElementById(
            "jobType"
        ).value;


    const salary =
        document.getElementById(
            "jobSalary"
        ).value.trim();


    const skillsText =
        document.getElementById(
            "jobSkills"
        ).value.trim();


    // Validate required fields

    if (
        title === "" ||
        company === "" ||
        location === ""
    ) {

        alert(
            "Please fill Job Title, Company and Location."
        );

        return;

    }


    // Convert skills into array

    const skills = skillsText
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");


    // Create new job

    const newJob = {

        title: title,

        company: company,

        location: location,

        type: type,

        salary:
            salary || "Salary not specified",

        skills:
            skills.length > 0
                ? skills
                : ["Multiple Skills"]

    };


    // Add job to beginning

    jobs.unshift(newJob);


    // Refresh job cards

    displayJobs(jobs);


    // Clear form

    document.getElementById(
        "jobTitle"
    ).value = "";


    document.getElementById(
        "companyName"
    ).value = "";


    document.getElementById(
        "jobLocation"
    ).value = "";


    document.getElementById(
        "jobSalary"
    ).value = "";


    document.getElementById(
        "jobSkills"
    ).value = "";


    // Close modal

    closePostJob();


    // Success message

    alert(
        "Job posted successfully!"
    );

}


// ==========================================
// CLOSE MODALS WHEN CLICKING OUTSIDE
// ==========================================

window.onclick = function(event) {

    const applyModal =
        document.getElementById(
            "applyModal"
        );


    const postModal =
        document.getElementById(
            "postModal"
        );


    if (event.target === applyModal) {

        closeModal();

    }


    if (event.target === postModal) {

        closePostJob();

    }

};


// ==========================================
// LOAD JOBS WHEN WEBSITE OPENS
// ==========================================

displayJobs(jobs);
