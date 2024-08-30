import { useDispatch } from "react-redux";
import { setDataFromFetch } from "../data/data.Slice";

export const useSpotifySearch = (accessToken) => {
  const dispatch = useDispatch();

  async function search(formValue) {
    const artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + formValue + "&type=artist",
      artistParameters
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Incorrect name of a arist");
        }
        return res.json();
      })
      .then((data) => data.artists.items[0].id);

    const albums = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`,
      artistParameters
    )
      .then((res) => res.json())
      .then((data) => dispatch(setDataFromFetch(data.items)))
      .catch((error) => console.log(`The error ${error} occured`));
  }

  return search;
};
