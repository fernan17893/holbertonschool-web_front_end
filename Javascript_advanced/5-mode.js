function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let p = document.createElement("p");
    p.innerHTML = "Welcome Holberton!";
    document.body.appendChild(p);
    

    let spookyBtn = document.createElement("button");
    spookyBtn.innerHTML = "Spooky";
    document.body.appendChild(spookyBtn);
    spookyBtn.onclick = spooky;
    
    
    let darkModeBtn = document.createElement("button")
    darkModeBtn.innerHTML = "Dark Mode"
    document.body.appendChild(darkModeBtn);
    darkModeBtn.onclick = darkMode;

    let screamBtn = document.createElement("button");
    screamBtn.innerHTML = "Scream Mode";
    document.body.appendChild(screamBtn);
    screamBtn.onclick = screamMode;
   
       
}

main();

