import contador from './contador.js';

export default function subirItensModal() {}
const itens = document.querySelectorAll('.item');
const modalUl = document.querySelector('#modal-div');
const totalModal = document.querySelector('#total-preco');

itens.forEach((item) => {
  item.addEventListener('click', () => {
    criaItem(item);
    if (!item.classList.contains('escolhido')) {
      removeItensCarrinho();
    } else {
    }
  });
});

function criaItem(item) {
  const novaLi = document.createElement('li');
  novaLi.classList.add('modal-item');
  const novoItem = item.cloneNode(true);
  modalUl.appendChild(novaLi);
  novaLi.appendChild(novoItem);

  function mudaIcon() {
    const icon = novoItem.querySelector('i');
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
  }
  mudaIcon();

  function somaItens() {
    const modalItens = modalUl.querySelectorAll('.modal-item');

    let total = 0;

    modalItens.forEach((item) => {
      const precoIten = item.querySelector('#preco');
      const precoLimpo = Number(
        precoIten.innerText.replace('R$', '').replace(',', '.'),
      );
      total += precoLimpo;
      totalModal.innerText = `Total: ${total.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })}`;
    });
  }

  somaItens();
  function removeItensCarrinho() {
    novoItem.addEventListener('click', function () {
      this.parentElement.remove();
      console.log(this);
      somaItens();
      contador();
      item.classList.remove('escolhido');
    });
  }
  removeItensCarrinho();
}
