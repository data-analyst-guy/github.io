document.addEventListener("DOMContentLoaded", function () {
    const username = "your-username"; // Thay bằng GitHub username của bạn
    document.getElementById("username").textContent = username;
    document.getElementById("username-footer").textContent = username;

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            const repoList = document.getElementById("repo-list");
            repoList.innerHTML = ""; // Xóa chữ "Loading..."
            data.forEach(repo => {
                if (repo.name !== username + ".github.io") {  // Ẩn repo chứa website cá nhân
                    let repoDiv = document.createElement("div");
                    repoDiv.classList.add("repo");
                    repoDiv.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                    repoList.appendChild(repoDiv);
                }
            });
        })
        .catch(error => console.error("Error fetching repos:", error));
});

