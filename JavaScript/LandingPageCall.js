fetch('/Elements/landingPage.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('landingPage').innerHTML = data;
});