import React from "react";
import faker from "faker";
import "./BlogPost.css"

const BlogPost = () => {

  return(
    <div className="ui piled segment">
      <h4 className="ui header">Some Hipster's Blog about Craft Beer</h4>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
      <p>{faker.lorem.paragraph()}</p>
    </div>
  )
}

export default BlogPost;
