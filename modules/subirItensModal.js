export default function subirItensModal() {
  const itens = document.querySelectorAll('.item');
  const modalUl = document.querySelector('#modal-div');
  const totalModal = document.querySelector('#total-preco');

  itens.forEach((item) => {
    item.addEventListener('click', function (e) {
      if (item.classList.contains('escolhido')) {
        criaItem(item);
        somaItens();
      } else {
        modalUl.querySelector('li').remove();
        somaItens();
        if (modalUl.querySelectorAll('li').length == 0) {
          totalModal.innerText = `Total: R$ 00,00`;
          contador.innerText = 0;
        }
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

    function removeItensCarrinho() {
      novoItem.addEventListener('click', function () {
        this.parentElement.remove();
        const contador = document.querySelector('#contador');
        contador.innerText--;
        if (contador.innerText == 0) {
          contador.style.opacity = 0;
        }

        somaItens();
        if (modalUl.querySelectorAll('li').length == 0) {
          totalModal.innerText = `Total: R$ 00,00`;
          contador.innerText = 0;
        }
        item.classList.remove('escolhido');
        const itemIcon = item.querySelector('i');
        itemIcon.classList.add('fa-plus');
        itemIcon.classList.remove('fa-minus');
      });
    }
    removeItensCarrinho();
  }

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
}
