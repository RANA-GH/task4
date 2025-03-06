document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("reviews-container");

    for (let i = 1; i <= 20; i++) {
        const review = document.createElement("div");
        review.classList.add("review", `review${i}`); // إضافة كلاس عام وكلاس فريد لكل عنصر
        review.innerHTML = `<h3>Reviews${i}</h3><p>comment ${i} very Nice</p>`;
        container.appendChild(review);
    }

    console.log("Reviews added successfully!");
});
