function postReq() {
    let xhttp = new XMLHttpRequest();
    let url = new URL('https://sf-pyw.mosyag.in/sse/vote/' + this.id);
    xhttp.open("POST", url);
    xhttp.send();
    $('.variants').hide();
    $('.thanks').show();
}

$('.variant').click(postReq);