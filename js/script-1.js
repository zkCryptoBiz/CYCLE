// Function to close the splash screen and show the main content
document.getElementById('enter').addEventListener('click', function() {
    // Hide splash screen
    document.getElementById('splash-screen').style.display = 'none';
    // Show main content
    document.getElementById('main-content').style.display = 'block';

    // Add the 'active' class to fade the main content in
    document.getElementById('main-content').classList.add('active');

    // Play music
    var audio = new Audio('music/music.mp3');
    audio.play();
});

window.addEventListener('load', () => {
    const layers = document.querySelectorAll('.scrolling-layer');

    layers.forEach(layer => {
        const svg = layer.querySelector('img'); // Get the SVG
        const aspectRatio = 7.11; // 7680 / 1080
        const scrollSpeed = 150; // Adjusted to 150 pixels per second

        // Calculate the image width based on the viewport height
        const imageWidth = Math.ceil(window.innerHeight * aspectRatio);

        // Clone the SVG to create the seamless scrolling effect
        const clone = svg.cloneNode(true);
        layer.appendChild(clone);

        // Set the layer width to fit two images side by side
        layer.style.width = `${imageWidth * 2}px`;

        // Initialize scroll position
        let scrollPosition = 0;

        // Smooth scrolling function
        function scrollLayer() {
            // Update the scroll position (at 60 FPS)
            scrollPosition -= (scrollSpeed / 60); // 150 pixels per second

            // Reset when the first image scrolls out of view
            if (scrollPosition <= -imageWidth) {
                scrollPosition = 0; // Reset to the start
            }

            // Apply the transform to move the layer
            layer.style.transform = `translateX(${scrollPosition}px)`;

            // Request the next animation frame
            requestAnimationFrame(scrollLayer);
        }

        // Start the scrolling animation
        scrollLayer();
    });
});