export default function showModal() {}

// Mostra modal
const carrinho = document.querySelector('#carrinho');
const modal = document.querySelector('.modal-container');

carrinho.addEventListener('click', () => {
  modal.classList.add('ativo');
});

// Soma dos itens no carrinho de compra
const itens = document.querySelectorAll('.modal-item');
const totalModal = document.querySelector('#total-preco');
let total = 0;

itens.forEach((item) => {
  const precoIten = item.querySelector('#preco');
  const precoLimpo = +precoIten.innerText.replace('R$', '').replace(',', '.');
  total += precoLimpo;
  totalModal.innerText = `Total: ${total.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })}`;
});
