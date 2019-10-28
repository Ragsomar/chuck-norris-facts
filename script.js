// This function loads pokemon data from the Pokemon API
function fetchChuckNorrisFactsJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(jokes) {
        console.log('data decoded from JSON:', jokes);
  
        // Build a block of HTML
        const chuckFactHtml = `
          <p><strong>${jokes.value}</strong></p>
          <img src="${jokes.icon_url}" />
        `;
        document.querySelector('#chuck-norris').innerHTML = chuckFactHtml;
      });
  }
  
  fetchChuckNorrisFactsJSON();
  
  const reloadFact = document.getElementById('reload');
  reloadFact.addEventListener('click', function(){
    document.querySelector('#chuck-norris').innerHTML = fetchChuckNorrisFactsJSON()
  });
  