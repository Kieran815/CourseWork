import React from "react";
import PlayerList from "./PlayerList";
import PlayerDetail from "./PlayerDetail";

const App = () => {

	return (
		<div className="ui container">
			<div>
				<h1>Media Player Info</h1>
			</div>
			<div className="ui container grid">
				<div className="ui row">
					<div className="ui cards column eight wide">
						<PlayerList />
					</div>
					<div className="ui items column eight wide">
						<PlayerDetail />
					</div>
				</div>
			</div>

		</div>

	)
};

export default App;
