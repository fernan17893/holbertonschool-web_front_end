function createElement(data) {
    let par = document.createElement("P");
    par.innerHTML = data;
    document.body.appendChild(par);
}

function queryWikipedia(callback) {
    const req = new XMLHttpRequest();
    req.open("Get", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    req.onload = () => {
        if (req.status === 200) {
            callback(JSON.parse(req.responseText).query.pages["21721040"].extract);
        }
        else {
            const error = new Error(req.statusText);
            return callback(error, null);
        }
    }
    req.send();

}

queryWikipedia(createElement);
