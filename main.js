import grabAPI from "./lookup";
import allAPI from "./findall";

const app = document.createElement("div");

document.body.append(app);

app.innerHTML = ` 
  <div id="top">
    <img src="/assets/search.jpg" alt="blank image" />
    <h1>Search Here!</h1>
    </div>
    <div id="main">
    <div>
      <label for="Title">Title:</label>
      <input type="text" id="Title" name="Title" /><span id="titleErr"></span>
    </div>
    <div>
    <label for="Year">Year:</label>
    <input type="text" id="Year" name="Year" /><span id="yearErr"></span>
    </div>
    <div>
    <label for="plotLength">Plot Length:</label>
    <br />
    <input type="radio" value="Short" id="Short" name="plot" /> Short
    <input type="radio" value="Long" id="Long" name="plot" /> Long
  </div>
  <button type="button" id="submit">Submit</button>
  <button type="button" id="submitAll">Find All</button>
</div>`;

const title = document.getElementById("Title");
const year = document.getElementById("Year");

const titleErr = document.getElementById("titleErr");
const yearErr = document.getElementById("yearErr");

const mainDiv = document.getElementById("app");

let query = "";
let queryAll = "";

// ?? NOT SURE HOW TO GET THE VALUE???
// const plot = document.querySelector("input[type=radio][name=plot]:checked");
// const plotLen = plot.value;
// console.log(plotLen);

function search() {
  reset();
  let errorFound = false;
  console.log("reseting");

  if (title.value == "") {
    titleErr.textContent = "Please enter a title!";
    errorFound = true;
  }
  if (year.value < 0) {
    yearErr.textContent = "Please enter a valid year";
    errorFound = true;
  } else if (year.value > 2022 || year.value < 1932) {
    console.log("No Year");
  }
  // if (plot.value == "short") {
  //   plot_value = document.getElementById("short").value;
  // }
  else {
  }

  query = "t=" + title.value;
  query = query + "&y=" + year.value;

  queryAll = title.value;

  // console.log(query);
  // console.log(queryAll);
}

const button = document.getElementById("submit");
const buttonALL = document.getElementById("submitAll");

button.addEventListener("click", (e) => {
  e.preventDefault();
  search();
  grabAPI(query);
});

buttonALL.addEventListener("click", (e) => {
  e.preventDefault();
  search();
  allAPI(queryAll);
});

function reset() {
  titleErr.textContent = "";
  yearErr.textContent = "";
  mainDiv.textContent = "";
}
