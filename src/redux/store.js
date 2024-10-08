import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { spotifyCoreApi } from './services/SpotifyCore';

export const store = configureStore({
  reducer: {
    [spotifyCoreApi.reducerPath]: spotifyCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyCoreApi.middleware),
});