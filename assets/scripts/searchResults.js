const renderTopResult = (artist, targetDiv) => {
  const html = `
    <section class="top-result">
        <h3>Top Result </h3>
        <div class="details">
            <img src="${artist.images[0].url}" alt="${artist.name}" width="32px" height="32px"; />
            <a class="title" href="${artist.external_urls.spotify}"> ${artist.name} </a>
        </div>
    </section>
    `;
  targetDiv.innerHTML = html;
};

const renderTracks = (tracks, targetDiv) => {
  const songsHTML = tracks
    .map((track) => {
      return `
        <a class="song-item" data-id="${track.id}" href="${track.external_urls.spotify}">
          <img
            src="${track.album.images[0].url}"
            width="40px"
            height="40px"
          />
          <div class="song-details">
            <p>${track.name}</p>
            <p class="artist">${track.artists[0].name}</p>
          </div>
        </a>`;
    })
    .join(" ");

  targetDiv.innerHTML += `
    <section class="songs">
        <h3>Songs </h3>
        <div class="song-list"> ${songsHTML} </div>
    </section>
  `;
};

const renderResults = (results, targetDiv) => {
  renderTopResult(results.artists.items[0], targetDiv);
  renderTracks(results.tracks.items.splice(0, 5), targetDiv);
};

const search = async () => {
  console.log("search function");
  const searchValue = document.querySelector("#search").value;
  console.log("searchValue", searchValue);

  //codigo para hacer llamada a la API y render de nuestros resultados.
  try {
    const results = await SpotifyAPI.search(searchValue);
    console.log("results", results);
    const resultsDiv = document.querySelector(".results");
    const searchIndex = document.querySelector("#searchIndex");

    if (Object.keys(results).length > 0) {
      searchIndex.innerHTML = "";
      renderResults(results, resultsDiv);
    }
  } catch (e) {
    console.log("e", e);
  }
};
