// bouton accueil
const btn = document.getElementById("cta");

if(btn){
    btn.addEventListener("click", () => {
    window.location.href = "blog.html";
    });
}

// chargement des articles
const postsContainer = document.getElementById("posts");

if(postsContainer){
    fetch("data/posts.json")
    .then(response => response.json())
    .then(posts => {

posts.forEach(post => {

const article = document.createElement("div");
article.classList.add("card");

article.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
    `;

postsContainer.appendChild(article);

});

});

}