const backdrop = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('[data-action="modal-close"]');
const modalInfoContainer = document.querySelector('.modal-info-container');

modalCloseBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onEscKeyPress);

export function openModal() {
  backdrop.classList.remove('is-hidden');
}

function onCloseModal(e) {
  backdrop.classList.add('is-hidden');
  modalInfoContainer.innerHTML = '';
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  onCloseModal();
}
