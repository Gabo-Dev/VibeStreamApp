import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyCoreApi = createApi({
  reducerpath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify23.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "0ac81260a9mshdd500b84955e5b0p18608bjsn2c40f82defbb"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongsByGenre: builder.query({ query: (genreId) => `/playlist_tracks/?id=${genreId}&limit=50` }),
  }),
});

export const { useGetSongsByGenreQuery } = spotifyCoreApi;