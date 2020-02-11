// 1. Explain the difference between the request/response cycle.
    // Browser converts URL into IP address, ISP pings IP address, server at IP
    // sends info thorough ISP to requestor's browser, where the data (html,
    // JavaScript, CSS) are interpreted and output to the user.

// 2. List common response codes and their groupings.
    // 200: SUCCESS (expected outcome); 300: REDIRECT (received and sent
    // somewhere else); 400: ERROR (usually user side); 500: SERVER ERROR
    // (server down or non-responsive);


// 3. Explain the common HTTP verbs: GET, POST, PATCH, PUT, and DELETE.
    // GET - Retrieve/Request page/info
    // POST - Create new object on server
    // PATCH - Update an object on the server
    // PUT - Used when sending a complete replacement for an object on a server.
    // DELETE - Remove an item from the server

// 4. Explain the difference between synchronous and asynchronous code.
    // Synchronous code are two or more sets of code that are designed to run
    // and finish at the same time. Asynchronous code are two or more sets of
    // code where one is expected to complete before the others, so you write a
    // statement in the code to have the fastest code pause upon completion to
    // let the other code(s) finish their tasks.

// 5. Explain what a JavaScript promise is.
    // A JS promise is produced when an asynchronous request is running. While
    // the request is being processed, the promise acts like a bookmark to
    // produce a result when the request finishes running, either a `.then` for
    // a successfurl

// 6. Explain why CORS exists and how we can work around it.
    //  Cross-Origin Resource Sharing is how a site can request content from
    // another site outside of the established domain and display the requested
    // resources.

// 7. Create a fetch request in JavaScript.
    //
    // Promise<Response> fetch(input[, init]);

// CODE PRACTICE:
// 8. It is time to build HackerNews from scratch! But you need easy access
// to an API for a list of all the stories currently there.
//    A. Go to News API and click 'Get API Key' sign up for a free API key.
//    B. Use your API key to create a fetch using this URL:
```
https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=<YOUR_API_KEY_HERE>
```
//    C. Loop through the result data, and for each story on HackerNews, create
// an <li> tag that contains the contents of the story.

fetch('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=8ec1afe8cf0b4d508b5b261f4346c866')
  .then(response => response.json())
  .then(data => {
    render(data.articles)
  })
function render(articles) {
  let articleList = document.createElement("ul");
  let body = document.querySelector("body");
  body.appendChild(articleList);
    console.log(articleList)
  articles.forEach(article => {
    console.log(article)
    let articleItem = document.createElement("li");
    articleItem.innerHTML = '<a href="' + article.url + '">' + article.title + "</a>";
    articleList.appendChild(articleItem)
  })
}
