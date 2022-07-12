export default function showModal() {}

// Mostra modal
const carrinho = document.querySelector('#carrinho');
const modal = document.querySelector('.modal-container');

carrinho.addEventListener('click', () => {
  modal.classList.add('ativo');
});

// Fechar modal
const btnClose = document.querySelector('#btn-close');
btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('ativo');
});
modal.addEventListener('click', function (e) {
  if (e.target == this) modal.classList.remove('ativo');
});
