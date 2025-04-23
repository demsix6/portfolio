function validateForm(event) {
  event.preventDefault();
  document.getElementById('formMessage').textContent = "Message sent successfully!";
}

let projects = [
  { title: "Portfolio Website", desc: "A personal portfolio to showcase my skills and projects." },
  { title: "Task Manager", desc: "A simple task manager app built using HTML, CSS, and JavaScript." },
  { title: "Weather App", desc: "Fetches real-time weather data using a public API." }
];

let blogs = [
  { title: "Getting Started with JavaScript", desc: "A beginner-friendly guide to learning JavaScript basics." },
  { title: "Understanding Html & Css", desc: "Learn how to use Html & Css for responsive layouts." }
];

function renderProjects() {
  const list = document.getElementById('projects-list');
  list.innerHTML = '';
  projects.forEach((p, index) => {
    list.innerHTML += `
      <div class="project">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <button class="edit-btn" onclick="editProject(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteProject(${index})">Delete</button>
      </div>`;
  });
}

function renderBlogs() {
  const list = document.getElementById('blog-list');
  list.innerHTML = '';
  blogs.forEach((b, index) => {
    list.innerHTML += `
      <div class="blog-post">
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
        <button class="edit-btn" onclick="editBlog(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteBlog(${index})">Delete</button>
      </div>`;
  });
}

function addProject() {
  const title = document.getElementById('project-title').value;
  const desc = document.getElementById('project-desc').value;
  if (title && desc) {
    projects.push({ title, desc });
    renderProjects();
    document.getElementById('project-title').value = '';
    document.getElementById('project-desc').value = '';
  }
}

function addBlog() {
  const title = document.getElementById('blog-title').value;
  const desc = document.getElementById('blog-desc').value;
  if (title && desc) {
    blogs.push({ title, desc });
    renderBlogs();
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-desc').value = '';
  }
}

function deleteProject(index) {
  if (confirm("Are you sure you want to delete this project?")) {
    projects.splice(index, 1);
    renderProjects();
  }
}

function deleteBlog(index) {
  if (confirm("Are you sure you want to delete this blog post?")) {
    blogs.splice(index, 1);
    renderBlogs();
  }
}

function editProject(index) {
  const newTitle = prompt("Enter new title:", projects[index].title);
  const newDesc = prompt("Enter new description:", projects[index].desc);
  if (newTitle && newDesc) {
    projects[index] = { title: newTitle, desc: newDesc };
    renderProjects();
  }
}

function editBlog(index) {
  const newTitle = prompt("Enter new title:", blogs[index].title);
  const newDesc = prompt("Enter new description:", blogs[index].desc);
  if (newTitle && newDesc) {
    blogs[index] = { title: newTitle, desc: newDesc };
    renderBlogs();
  }
}

renderProjects();
renderBlogs();
