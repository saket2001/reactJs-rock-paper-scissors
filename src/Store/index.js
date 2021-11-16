import { configureStore } from "@reduxjs/toolkit";
import { Game } from "./game";

export const Store = configureStore({
  reducer: {
    game: Game.reducer,
  },
});
