import React from "react";
import { connect } from "react-redux";

const SongDtails = ({ selectedSong }) => {
  if (!selectedSong) return <h3>Select A Song</h3>;

  return (
    <div>
      <h3>{selectedSong.title}</h3>
      <h3>{selectedSong.duration}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDtails);
