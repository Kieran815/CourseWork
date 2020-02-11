import React from 'react';

/*
Making Reusable Components:
use `{props.children}` to pull the properties of the nested child component into the partent component. In this case, `CommentDetail` is wrapped in `ApprovalCard` on `index.js`, making `ApprovalCard` the parent component of this `CommentDetail` instance. When you use `{props.childern}`, it calls all of the properties of the child component (`CommentDetail`), and makes them available for the parent component (`ApprovalCard`) to use.
*/


const ApprovalCard = props => {
	return (
		<div className="ui card">

			<div className="content">{props.children}</div>
			<div className="extra content">
				<div className="ui basic green button">Accept</div>
				<div className="ui basic red button">Reject</div>
			</div>
		</div>
	);

};

export default ApprovalCard;
