document.addEventListener("DOMContentLoaded", () => {
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    const backgrounds = [
        'url("images/photo1.jpg")',
        'url("images/photo2.jpg")',
        'url("images/photo3.jpg")',
        'url("images/photo4.jpg")'
    ];

    if (leftSide && rightSide) {
        console.log("Left-side and right-side elements found");

        // Set the height of the document to accommodate all four backgrounds
        const viewportHeight = window.innerHeight;
        const totalHeight = backgrounds.length * viewportHeight;
        document.body.style.height = `${totalHeight}px`;

        // Update the background of the left-side based on scroll position
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const currentIndex = Math.floor(scrollPosition / viewportHeight);

            console.log("Scroll Position:", scrollPosition);
            console.log("Current Background Index:", currentIndex);

            if (currentIndex >= 0 && currentIndex < backgrounds.length) {
                leftSide.style.backgroundImage = backgrounds[currentIndex];
            }
        });

        // By default, set the first background
        leftSide.style.backgroundImage = backgrounds[0];
    } else {
        console.error("Left-side or right-side element not found");
    }
});
