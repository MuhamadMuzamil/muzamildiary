// Sample data for demonstration
const moviesData = {
    action: [
        { title: "Die Hard", videoId: "MPnBm8_40Gw" },
        { title: "The Dark Knight", videoId: "VIDEO_ID_2" },
        { title: "Avengers", videoId: "VIDEO_ID_2" },
        { title: "Godzila", videoId: "VIDEO_ID_2" },
        // Add more action movies here
    ],
    sciFi: [
        { title: "Blade Runner", videoId: "VIDEO_ID_3" },
        { title: "Inception", videoId: "VIDEO_ID_4" },
        { title: "Inception", videoId: "VIDEO_ID_4" },
        { title: "Inception", videoId: "VIDEO_ID_4" },
        // Add more sci-fi movies here
    ],
    horror: [
        { title: "The Shining", videoId: "VIDEO_ID_5" },
        { title: "Get Out", videoId: "VIDEO_ID_6" },
        { title: "Get Out", videoId: "VIDEO_ID_6" },
        { title: "Get Out", videoId: "VIDEO_ID_6" },
        // Add more horror movies here?
    ],
    reality: [
        { title: "Apollo 13", videoId: "VIDEO_ID_7" },
        { title: "127 Hours", videoId: "VIDEO_ID_8" },
        { title: "127 Hours", videoId: "VIDEO_ID_8" },
        { title: "127 Hours", videoId: "VIDEO_ID_8" },
        // Add more reality movies here
    ],
    psychopath: [
        { title: "American Psycho", videoId: "VIDEO_ID_9" },
        { title: "Se7en", videoId: "VIDEO_ID_10" },
        { title: "Se7en", videoId: "VIDEO_ID_10" },
        { title: "Se7en", videoId: "VIDEO_ID_10" },
        // Add more psychopath movies here
    ]
    
};

// Function to populate movies in each section
function populateMovies(category, movies) {
    const section = document.getElementById(category);
    const moviesDiv = section.querySelector(".movies");

    movies.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = `
            <h3>${movie.title}</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${movie.videoId}" frameborder="0" allowfullscreen></iframe>
        `;
        moviesDiv.appendChild(movieDiv);
    });
}

// Populate movies for each section
populateMovies("action", moviesData.action);
populateMovies("sci-fi", moviesData.sciFi);
populateMovies("horror", moviesData.horror);
populateMovies("reality", moviesData.reality);
populateMovies("psychopath", moviesData.psychopath);
populateMovies("psychopath", moviesData.psychopath);