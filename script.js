function showMessage() {
    document.getElementById("popup").classList.remove("hidden");
}

function confirmYes() {
    document.getElementById("popup").classList.add("hidden");
    openEnvelope();
}

function confirmNo() {
    alert("Нет, ответ не принят, попробуйте заново :)");
}

function openEnvelope() {
    const envelope = document.getElementById("envelope");
    const flap = envelope.querySelector(".flap");

    flap.style.transform = "rotateX(180deg)";
    setTimeout(() => {
        document.getElementById("letter").classList.remove("hidden");
    }, 1000);
}

function closeLetter() {
    document.getElementById("letter").classList.add("hidden");
    const flap = document.querySelector(".flap");
    flap.style.transform = "rotateX(0deg)";
}
