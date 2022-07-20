const apikey = import.meta.env.VITE_API_KEY;

let grabAPI = async (query) => {
  const api = await fetch(`https://www.omdbapi.com/?${query}&apikey=${apikey}`);
  const data = await api.json();
  console.log(data);

  const mainDiv = document.getElementById("app");

  const poster = document.createElement("img");
  const movieTitle = document.createElement("h2");
  const movieYear = document.createElement("h2");
  const movieRating = document.createElement("h2");
  const movieActors = document.createElement("h2");
  const movieMoney = document.createElement("h2");
  const movieRuntime = document.createElement("h2");
  const movieReleased = document.createElement("h2");

  poster.src = `${data.Poster}`;
  movieTitle.textContent = `Title: ${data.Title}`;
  movieYear.textContent = `Year: ${data.Year}`;
  movieRating.textContent = `Rated: ${data.Rated}`;
  movieActors.textContent = `Actors: ${data.Actors}`;
  movieMoney.textContent = `Revenue: ${data.BoxOffice}`;
  movieRuntime.textContent = `Runtime: ${data.Runtime}`;
  movieReleased.textContent = `Released: ${data.Released}`;

  mainDiv.append(poster);
  mainDiv.append(movieTitle);
  mainDiv.append(movieYear);
  mainDiv.append(movieRating);
  mainDiv.append(movieActors);
  mainDiv.append(movieMoney);
  mainDiv.append(movieRuntime);
  mainDiv.append(movieReleased);
};

export default grabAPI;
