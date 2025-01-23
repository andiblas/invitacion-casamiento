document.body.style.overflow = 'auto';

function animar() {
    document.body.style.overflow = 'auto';
    document.getElementById("top").classList.add("up");
    document.getElementById("bottom").classList.add("down");
    setInterval(() => {
           document.getElementById("intro").style.display = "none";
    }, 1000);
};