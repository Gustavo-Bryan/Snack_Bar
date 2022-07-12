export default function mudaItem() {
  const itens = document.querySelectorAll('.item');

  itens.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('escolhido');
      const icon = item.querySelector('i');
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
    });
  });
}
