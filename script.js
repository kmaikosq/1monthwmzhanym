document.getElementById("yes-button").addEventListener("click", function() {
    document.getElementById("greeting").style.display = "none";
    document.getElementById("envelope-container").style.display = "block";
    setTimeout(() => {
        document.getElementById("envelope").style.transform = "rotateX(-180deg)";
        setTimeout(() => {
            document.getElementById("letter-content").style.display = "block";
        }, 1000);
    }, 500);
});

document.getElementById("no-button").addEventListener("click", function() {
    alert("Нет, ответ не принят, попробуйте заново :)");
});
