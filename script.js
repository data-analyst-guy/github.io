document.addEventListener("DOMContentLoaded", function () {
    const username = "your-username";  // 🔥 Thay "your-username" bằng GitHub username của bạn
    const repoList = document.getElementById("repo-list");

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                if (repo.name !== "your-username.github.io") {  // 🔥 Ẩn repo tạo GitHub Pages
                    const repoItem = document.createElement("li");
                    repoItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                    repoList.appendChild(repoItem);
                }
            });
        })
        .catch(error => console.error("Lỗi khi lấy danh sách repo:", error));
});
