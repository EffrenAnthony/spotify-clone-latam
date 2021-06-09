const token =
  "BQDheX1jqngb3YY36cM-SMGDJvxMwL7rgpJkYQ66UmNSThpizPJnlQKFsE9ATkclaItOMdFB3zdgiRG2slk";

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
};
