function mandazap(elemento) {
    let texto = elemento.firstElementChild.innerText;
    let numero = prompt("Qual é o número?");
    let zaplink = `https://web.whatsapp.com/send?phone=55${numero}&text=${texto}`;
    window.open(zaplink);
  }