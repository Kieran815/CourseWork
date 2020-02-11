import React from "react";
import { connect } from "react-redux";

const PlayerDetail = ({ selectedPlayer }) => {
	// check to prevent "value of `null`" error, set default div if no player selected
	if(!selectedPlayer) {
		return (
			<div>
				Please Select a Media Player
			</div>
		);
	}

	return (
		<div className="item">
	    <div className="ui small image">
	      <img src="./image.jpg" alt={selectedPlayer.name} />
	    </div>
	    <div className="content">
	      <div className="header">
					{selectedPlayer.name}
				</div>
	      <div className="meta">
	        <span className="releaseDate">
						{selectedPlayer.releaseDate}
					</span>
	        <span className="creators">
						{selectedPlayer.creators}
					</span>
	      </div>
	      <div className="description">
	        <p>{selectedPlayer.description}</p>
					<a href={selectedPlayer.link}>
						Download {selectedPlayer.name}
					</a>
	      </div>
	    </div>
	  </div>
	);
}

const mapStateToProps = (state) => {
	return { selectedPlayer: state.selectedPlayer }
};

export default connect(mapStateToProps)(PlayerDetail);
