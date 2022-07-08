export default function aumentaContador() {
  const itens = document.querySelectorAll('.item');
  const contador = document.querySelector('#contador');

  itens.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('escolhido')) {
        contador.style.opacity = '1';
        +contador.innerText++;
      } else {
        contador.innerText--;
        if (contador.innerText == 0) {
          contador.style.opacity = '0';
        }
      }
    });
  });
}
