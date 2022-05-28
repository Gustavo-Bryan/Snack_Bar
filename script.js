const lista = document.querySelectorAll("li");
const itens = document.querySelectorAll(".item");
const cafe = document.querySelectorAll("[data-type='cafe']");
const almoco = document.querySelectorAll("[data-type='almoco']");
const shake = document.querySelectorAll("[data-type='shake']");
const janta = document.querySelectorAll("[data-type='janta']");

lista.forEach((li) => {
  //Função para mudar a cor do filtro que recebeu o click
  function ativaClass() {
    lista.forEach((item) => {
      item.classList.remove("ativo");
    });
    this.classList.add("ativo");
  }
  lista.forEach((item) => {
    item.addEventListener("click", ativaClass);
  });

  
  li.addEventListener("click", (e) => {
    //dataTypeLi irá salvar o valor do tributo 'Data-Type' de onde ocorreu o click
    const dataTypeLi = e.target.attributes[0].value;

    itens.forEach((div) => {
      //ao click no filtro(Li's) , ira remover a classe que oculta o item
      div.classList.remove("hide");

      //dataTypeDiv irá salvar o valor do tributo 'Data-Type' de toda imagens
      const dataTypeDiv = div.attributes[1].value;

      //Se o atributo 'Data-Type' do item for diferente do atributo da Li selecionada, irá ocultar o item
      if (dataTypeDiv != dataTypeLi && dataTypeLi.length > 0) {
        div.classList.add("hide");
      } else {
        //Para o filtro "TODOS", irá retornar uma string vazia, e caso dataTypeLi for 0, irá mostrar todos itens na tela novamente
        div.classList.remove("hide");
      }
    });
  });
});
