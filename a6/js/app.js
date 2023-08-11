/* ********* 

  BTI225 – Assignment 06

  I declare that this assignment is my own work in accordance with
  Seneca Academic Policy. No part of this assignment has been
  copied manually or electronically from any other source
  (including web sites) or distributed to other students.

  Please update the following with your information:

  Name:       Daniel Fu
  Student ID: 153024229
  Date:       August 11th, 2023
 
********* */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

function buildMenu() {
  let menu = document.getElementById("menu");
  menu.innerHTML = ""; // clear the menu out first?

  for (let i = 0; i < artists.length; i++) {
    menu.innerHTML += `<span onclick='showSelectedArtist("${artists[i].id}")'>${artists[i].name}</span>&nbsp;`;
  }
}

function showSelectedArtist(artistID) {
  console.log("TODO: Show Artist with ID: " + artistID);

  let selectedArtistContainer = document.getElementById("selected-artist");

  let selectedArtist = artists.find((artist) => artist.id == artistID);

  selectedArtistContainer.innerHTML = `<span>${selectedArtist.name}</span>`;

  showArtistLinks(selectedArtist.links);
  showCardsByArtist(artistID);
}

function showArtistLinks(links) {
  let selectedArtistContainer = document.getElementById("selected-artist");
  let linksHTML = links.map(
    (link) => `<a href="${link.url}" target="_blank">${link.name}</a>`
  );
  selectedArtistContainer.innerHTML += linksHTML.join(", ");
}

async function showCardsByArtist(artistID) {
  let artistsSongs = songs.filter((song) => song.artistId === artistID);
  let cardContainer = document.getElementById("card-container");

  cardContainer.innerHTML = ""; 

  for (let i = 0; i < artistsSongs.length; i++) {
    let { id, title, year, duration, album } = artistsSongs[i];
    let formattedDuration = formatDuration(duration);

    let quote = await fetchRandomQuote();

    cardContainer.innerHTML += `
      <div class="card" onclick="showSongForm('${id}')">
        <img src="${album.imageURL}" alt="${title} Artwork" class="album-image">
        <div class="card-details">
          <p>${title}</p>
          <p>Year: ${year}</p>
          <p>Duration: ${formattedDuration}</p>
          <p>Album: ${album.name}</p>
          <p class="quote">"${quote}"</p>
        </div>
      </div>
    `;
  }
}

// Function to fetch a random quote
async function fetchRandomQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    // Handle different response formats
    if (Array.isArray(data)) {
      return data[0];
    } else if (typeof data === "object" && data.hasOwnProperty("quote")) {
      return data.quote;
    } else {
      return "No quote available";
    }
  } catch (error) {
    console.error("Error fetching random quote:", error);
    return "No quote available"; 
  }
}


function showSongForm(songId) {
  console.log("Song ID:", songId); 
}

function formatDuration(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}


function showSongForm(songId) {
  const songForm = document.getElementById("songForm");
  const song = songs.find((song) => song.id === songId);

  songForm.querySelector("#id").value = song.id;
  songForm.querySelector("#artistId").value = song.artistId;
  songForm.querySelector("#title").value = song.title;
  songForm.querySelector("#year").value = song.year;
  songForm.querySelector("#duration").value = song.duration;

  songForm.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  buildMenu();
  showSelectedArtist(artists[0].id);

  songForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = songForm.querySelector("#id").value;
    const title = songForm.querySelector("#title").value;
    const year = songForm.querySelector("#year").value;
    const duration = songForm.querySelector("#duration").value;

    // Find the song in the songs array based on its ID
    const songToUpdate = songs.find((song) => song.id === id);

    if (songToUpdate) {
      // Update song data
      songToUpdate.title = title;
      songToUpdate.year = year;
      songToUpdate.duration = parseInt(duration);

      showCardsByArtist(songToUpdate.artistId);

      // Hide form
      songForm.classList.add("hidden");
    } else {
      console.error("Song not found for ID:", id);
    }
  });
});




