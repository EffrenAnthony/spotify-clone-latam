const token =
  "BQCSfA5FGFjaAdN10GObQK-VVjW2213IL1Qp6zrQojlQgvH6J4Sg2b-5pspsfqgNQH3Ym5x-y6wraTcEDvM";

// Get all new releases from Spotify API

const SpotifyAPI = {
  browseAllNewReleasesAsync: async () => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/browse/new-releases",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.json();
    } catch (error) {
      console.log(error);
    }
  },
  browseAllNewReleasesThen: () => {
    return fetch("https://api.spotify.com/v1/browse/new-releases", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  },
  search: async (query) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=album,track,artist`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.json();
    } catch (error) {
      console.log(error);
    }
  },
};
