import { combineReducers } from "redux";

const playerReducer = () => {
	return [
		{ name: "VLC Media Player" , creators: "VideoLAN Organization", releaseDate: "Version 2.0.0, 02/18/2012", description: "VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files, and various streaming protocols.", logo: "./images/vlcLogo.jpeg", link: "https://www.videolan.org/vlc/" },

		{ name: "MediaMonkey", creators: "Ventis Media", releaseDate: "10/12/2001", description: "MediaMonkey is more than just a Windows Media Player replacement – it's an advanced media management system that can take care of all of your local and network-stored music and video, while also catering for your web streaming needs.", logo: "./images/mediaMonkeyLogo.jpeg", link: "https://www.mediamonkey.com/download/" },

		{ name: "GOM Player", creators: "GOM & Co.", releaseDate: "01/07/2003", description: "The claim that GOM Player is 'the only media player you need may seem a little grand, it's probably not far off the mark. There's great support for a range of media formats out of the box, and if you stumble across a file that can’t be played, the player will try to track down the necessary codec for you.", logo: "./images/gomPlayerLogo.jpeg", link: "https://www.gomlab.com/gomplayer-media-player/" },

		{ name: "Media Player Classic Home Cinema", creators: "Doom9 Community Forum", releaseDate: "05/30/2003", description: "Media Player Classic Home Cinema is so called because it is based on the look of the original Media Player software that was bundled with Windows, but it's evolved far beyond its humble beginnings.	As the name implies, the focus here is on video, but it also handles music very well. With a massive range of built-in codecs, you'll be hard pressed to find a file it can't play.", logo: "./images/MediaPlayerClassicHomeCinemaLogo.png", link: "https://mpc-hc.org/downloads/" }
	];
};


const selectedPlayerReducer = (selectedPlayer = null, action) => {
	if (action.type === "PLAYER_SELECTED") {
		return action.payload;
	}
	return selectedPlayer;
};

export default combineReducers({
	players: playerReducer,
	selectedPlayer: selectedPlayerReducer
});
