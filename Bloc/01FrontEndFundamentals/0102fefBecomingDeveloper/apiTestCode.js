// Kieran Code:
ulElement = document.createElement('ul');
document.getElemnentsByTagName('body')[0].append(ulElement)

fetch('https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=8ec1afe8cf0b4d508b5b261f4346c866').then((response) => {
  return response.josn();
}).then((data) => {
  data.forEach((article) => {
    liEl = document.createElement('li');
    liEl.innerHTML = `<p>${article.title}</p><a src="${article.urel}"></a>;
    ulElement.append(liEl);
  });
})
