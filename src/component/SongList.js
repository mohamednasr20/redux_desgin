import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = ({ songs, selectSong }) => {
  const songList = songs.map((song) => {
    return (
      <li key={song.title}>
        {song.title} <button onClick={() => selectSong(song)}>select</button>{" "}
      </li>
    );
  });
  return <ul>{songList}</ul>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
