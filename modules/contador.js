export default function contador() {
  const itens = document.querySelectorAll('.item');

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
    const contador = document.querySelector('#contador');
    contador.style.opacity = '1';
    +contador.innerText++;
  }

  function diminuiContador() {
    const contador = document.querySelector('#contador');
    +contador.innerText--;
    if (contador.innerText == 0) {
      contador.style.opacity = '0';
    }
  }
}
