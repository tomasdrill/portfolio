function sortArticles(ev) {
    const sortType = ev.target.value;
    const articlesList = document.querySelectorAll(".box");
    const articlesArray = Array.from(articlesList);

    if (sortType === "---") {
        articlesArray.sort((a, b) => {
            const dateA = new Date(a.querySelector(".date").dataset.date);
            const dateB = new Date(b.querySelector(".date").dataset.date);
            return dateA - dateB;
        });
    } else {
        articlesArray.sort((a, b) => {
            if (sortType === "note") {
                const noteA = parseInt(a.querySelector(".note").dataset.note);
                const noteB = parseInt(b.querySelector(".note").dataset.note);
                return noteB - noteA;
            } else if (sortType === "date") {
                const dateA = new Date(a.querySelector(".date").dataset.date);
                const dateB = new Date(b.querySelector(".date").dataset.date);
                return dateB - dateA;
            }
        });
    }

    const certificationsContent = document.querySelector(".certifications-content");

    certificationsContent.innerHTML = "";

    articlesArray.forEach((article) => {
        certificationsContent.appendChild(article);
    });
}