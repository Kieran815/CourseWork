import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import BlogPost from "./BlogPost";
import "./index.css";

// *** Free Styling: Semantic-UI.com, imported to `index.html`; Check `Package.json` for all dependancies

/*
	*** Basic Steps to making REUSABLE COMPONENTS: ***
	1. Identify JSX that is Duplicated (indicates code is reusable);
	2. Think of Name for What Code Does;
	3. Create New File to House Component;
	4. Create New Component in New File, then Paste JSX inside Component;
	5. Make Component Configurable by using `props` system;
*/

const App = () => {
	return (
		<div>
			<BlogPost />
			<div className="ui container comments">
				{/* Entire card created into one div (to start and show structure; by end will be in a reusable component, located in `./CommentDetail.js`), then broken down to separate divs for structure */}
				{/* added `faker` image by importing, calling as a JS variable `{}`, and using dot notation to pull 'fake' avatar images. Make sure to add `()` so that it calls the image via built-in function from `faker` library */}
				{/* Call Components by creating self-closing JSX tags with the name of the component. Code 'mostly' same as above, with `CommentDetail` file having updated `props` for configurability; `props` can be hard-coded in (like below), or passed down from other information in app (like with `src={faker.image.avatar()}` from the `img` tag) */}
				<CommentDetail
					author={faker.name.firstName()}
					email={faker.internet.email()}
					avatar={faker.image.avatar()}
					comText={faker.lorem.paragraph()}
				/>
				<CommentDetail
					author={faker.name.firstName()}
					email={faker.internet.email()}
					avatar={faker.image.avatar()}
					comText={faker.lorem.paragraph()}
				/>
				<CommentDetail
					author={faker.name.firstName()}
					email={faker.internet.email()}
					avatar={faker.image.avatar()}
					comText={faker.lorem.paragraph()}
				/>
			</div>
			<div className="pendingApproval">
				{/* `ApprovalCard` is a reusable component whose content can change based on what children you pass into it. Here, we have `CommentDetail` passed down, and the props rendered inside the `ApprovalCard`. */}
				<ApprovalCard>
					<h5>New Comment for Approval</h5>
					<CommentDetail
						author={faker.name.firstName()}
						email={faker.internet.email()}
						avatar={faker.image.avatar()}
						comText={faker.lorem.sentence()}
					/>
				</ApprovalCard>
				{/* Here, `ApprovalCard` is rendered like you would see a warning or `alert()` (like in vanilla js) */}
				<ApprovalCard>
					<h4>Greetings!!!</h4>
					<p>This Reusable Component is being used like an HTML tag.</p>
				</ApprovalCard>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
