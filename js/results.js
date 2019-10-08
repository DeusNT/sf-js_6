const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
});
const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats');
const ES = new EventSource(url, header);
ES.onerror = err => {
    ES.readyState ? $('.results').html('<h1>Server Error</h1>') : null;
};

ES.onmessage = message => {
    let voteData = JSON.parse(message.data);
    function percentCount (n) {
        return (n * 100 / (voteData.cats + voteData.dogs + voteData.parrots)).toFixed()
    }
    let perCats = percentCount(voteData.cats);
    let perDogs = percentCount(voteData.dogs);
    let perParrots = percentCount(voteData.parrots);
    $("#cats").width(String(perCats) + "%").text(voteData.cats + ' (' + perCats + '%' +')');
    $("#dogs").width(String(perDogs) + "%").text(voteData.dogs + ' (' + perDogs + '%' +')');
    $("#parrots").width(String(perParrots) + "%").text(voteData.parrots + ' (' + perParrots + '%' +')');
};