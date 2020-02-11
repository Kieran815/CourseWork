// Import Statements are only good for the files they are placed in
import React from 'react';
import "./CommentDetail.css";



/*
	*** Using Props: ***
	`props` (short for 'properties') is a system for passing data from a `Parent` component to a `Child` component, with the goal being to customize or configure a `Child` component.
*/

const CommentDetail = props => {
	return (
		<div className="commentCard">
			<div className="ui comments">
			  <div className="comment">
			    <a className="avatar">
			      <img src={props.avatar} />
			    </a>
			    <div className="content">
			      <a className="author">{props.author}</a>
			      <div className="metadata">
			        <div className="email">{props.email}</div>
			      </div>
			      <div className="text">{props.comText}</div>
			    </div>
			  </div>
			</div>
			<hr />
		</div>
	);
};


// *** COMPONENT NESTING: Create Export Statement on file to tell rest of app where to find component information, then add import statement to files that use that component, like so:

export default CommentDetail;
