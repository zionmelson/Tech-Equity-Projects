const apikey = import.meta.env.VITE_API_KEY;

let allAPI = async (query, sorl) => {
  const api = await fetch(
    `https://www.omdbapi.com/?s=${query}&plot=${sorl}&apikey=${apikey}`
  );
  const data = await api.json();
  //   console.log(data);
  const search = data.Search;
  for (let i = 0; 0 < search.length; i++) {
    console.log(search);

    const plotUrl = `https://www.omdbapi.com/?t=${search[i].Title}&plot=short&apikey=${apikey}`;

    const plot = await fetch(plotUrl);
    const plotty = await plot.json();
    console.log(plotty);

    const mainDiv = document.getElementById("app");

    const poster = document.createElement("img");
    const movieTitle = document.createElement("h2");
    const movieYear = document.createElement("h2");
    const movieActors = document.createElement("h2");
    const movieBox = document.createElement("h2");
    const movieRated = document.createElement("h2");
    const moviePlot = document.createElement("h2");

    poster.src = `${plotty.Poster}`;
    movieTitle.textContent = `Title: ${plotty.Title}`;
    movieYear.textContent = `Year: ${plotty.Year}`;
    movieActors.textContent = `Actors: ${plotty.Actors}`;
    movieBox.textContent = `Box Office: ${plotty.BoxOffice}`;
    movieRated.textContent = `Rated: ${plotty.Rated}`;
    moviePlot.textContent = `Year: ${plotty.Plot}`;

    mainDiv.append(poster);
    mainDiv.append(movieTitle);
    mainDiv.append(movieActors);
    mainDiv.append(movieBox);
    mainDiv.append(movieRated);
    mainDiv.append(moviePlot);
  }
};

export default allAPI;
