const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

// Abre o modal e insere o iframe
for (let card of cards) {
    card.addEventListener("click", () => {
        const videoId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${videoId}`;
    })
}

const modalMaximaze = modalOverlay.querySelector('.modal-maximize')
const modal = modalOverlay.querySelector('.modal')
var maximize = false

// Maximiza o modal
modalMaximaze.addEventListener("click", () => {
    if (!maximize) {
        maximize = true;
        modal.requestFullscreen();
    } else {
        document.exitFullscreen();
        maximize = false;
    }
})

const modelClose = document.querySelector('.modal-close')

// Fecha o modal
modelClose.addEventListener("click", () => {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("iframe").src = "";
    document.exitFullscreen();
    maximize = false;
})