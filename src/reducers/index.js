import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "No scrubs", duration: "2:15" },
    { title: "Macrina", duration: "1:15" },
    { title: "I want it this way", duration: "3:15" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
