let grandfather = document.getElementById("grandparent");
grandfather.addEventListener("click", () => {
    grandfather.style.background = "red";
    console.log("Grandfather");
});

let parent = document.getElementById("parent");
parent.addEventListener("click", () => {
    parent.style.background = "green";
    console.log("Parent");
});

let child = document.getElementById("child");
child.addEventListener("click", () => {
    child.style.background = "yellow";
    console.log("Child");
});