export default function initContador() {
  const itens = document.querySelectorAll('.item');
  const contador = document.querySelector('#contador');

  itens.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('escolhido')) {
        aumentaContador();
      } else {
        diminuiContador();
      }
    });
  });

  function aumentaContador() {
    contador.style.opacity = '1';
    contador.innerText++;
  }

  function diminuiContador() {
    contador.innerText--;
    if (contador.innerText == 0) {
      contador.style.opacity = 0;
    }
  }
}
