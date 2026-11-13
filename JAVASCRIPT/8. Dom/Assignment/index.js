function dark() {
    document.body.style.background = "teal"; 
    document.body.style.color = "white"; 
}

function light() {
    document.body.style.background = "skyblue"; 
    document.body.style.color = "darkred"; 
}

function fo(x) {
    x.style.background = "lightgreen"; 
}

function bl() {
    let input = document.getElementById("ip1");
    input.value = input.value.toUpperCase(); 
    input.style.background = "white"; 
    console.log(input.value);
}