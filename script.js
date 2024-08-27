function searchMovies() {
  const searchQuery = document.getElementById("search-bar").value.toLowerCase();
  const genre = document.getElementById("genre-filter").value;
  const year = document.getElementById("year-filter").value;

  // Simulate fetching data (you can replace this with actual data fetching logic)
  const movies = [
    { title: "Action Movie 1", genre: "action", year: "2023" },
    { title: "Comedy Movie 1", genre: "comedy", year: "2022" },
    { title: "Drama Movie 1", genre: "drama", year: "2021" },
    // Add more movie objects as needed
  ];

  let filteredMovies = movies.filter((movie) => {
    return (
      (movie.title.toLowerCase().includes(searchQuery) || searchQuery === "") &&
      (movie.genre === genre || genre === "") &&
      (movie.year === year || year === "")
    );
  });

  displayMovies(filteredMovies);
}

function displayMovies(movies) {
  const resultsContainer = document.getElementById("movie-results");
  resultsContainer.innerHTML = "";

  if (movies.length === 0) {
    resultsContainer.innerHTML = "<p>No movies found.</p>";
    return;
  }

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre}</p>
            <p>Year: ${movie.year}</p>
        `;
    resultsContainer.appendChild(movieElement);
  });
}
