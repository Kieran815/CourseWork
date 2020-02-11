/* *** Steps to Connect Redux to React App ***
	1. Import `connect` from "react-redux";
	2. Define `mapStateToProps`; `mapStateToProps` ALWAYS GETS FIRST ARGUMENT OF `state`; ALWAYS RETURN JS OBJECT THAT WILL SHOW UP AS `props` INSIDE COMPONENT;
	3. Call `connect(mapStateToProps)` with `componentName` as second function call in export statement;
*/

import React from "react";
// 1. Import `connect` from "react-redux";
import { connect } from "react-redux";
// call Action Creator `selectPlayer` using `connect` to change state again by passing `select player` action into `connect` as a js object.
import {  selectPlayer } from "../Actions";



class PlayerList extends React.Component {

	renderList() {
		return this.props.players.map((player) => {
			return(
				<div className="ui cards" key={player.releaseDate}>
				  <div className="card">
				    <div className="content">
							<div className="right floated mini ui image">
								<img alt={player.name} src={player.logo} />
							</div>

				      <div className="header">
				        {player.name}
				      </div>
				      <div className="meta">
				        {player.creators}
				      </div>
				      <button
								className="ui button primary"
								onClick={() => this.props.selectPlayer(player)}
							>
								Select
							</button>
				    </div>
				  </div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="ui container">
				{this.renderList()}
			</div>
		);
	}
}

// 2. Define `mapStateToProps`; `mapStateToProps` ALWAYS GETS FIRST ARGUMENT OF `state`; ALWAYS RETURN JS OBJECT THAT WILL SHOW UP AS `props` INSIDE COMPONENT;
// pulls state down to component; name is generally best practice, though not a special term.
const mapStateToProps = (state) => {
	console.log(state);
	return { players: state.players };
}

// 	3. Call `connect(mapStateToProps)` with `componentName` as second function call in export statement;
// `connect` takes second argument (action: `selectedPlayer`) and passes it to component as a prop. Calling the action will send the selected object to redux' dispatch function
// any time an `action` is `dispatch`ed, it updates a `reducer` and forwards the new state information to `redux-store`, which causes all of the components attached to `connect` to re-render with the new state info.
export default connect(mapStateToProps, {	selectPlayer })(PlayerList);
