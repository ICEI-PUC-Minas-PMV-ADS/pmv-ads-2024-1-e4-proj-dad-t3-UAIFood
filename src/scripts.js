$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    infinite: true,
<<<<<<< Updated upstream
    speed: 4000,
=======
    speed: 2500,
>>>>>>> Stashed changes
    fade: true,
    cssEase: 'linear'
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Adiciona um event listener para o botão Cancelar
  document.getElementById("cancelar-btn").addEventListener("click", function() {
    // Aqui você pode adicionar a lógica para cancelar a compra
    alert("Compra cancelada!");
    // Por exemplo, você pode fechar um modal, limpar o carrinho de compras, etc.
  });
});

function comprar(nome, tamanho, valor) {
  var quantidade = parseInt(prompt("Quantidade desejada:"));
  if (!isNaN(quantidade) && quantidade > 0) {
    var total = quantidade * valor;
    alert("Valor total \n"+
    "Produto: " + nome + "\n" +
    "Quantidade: " + quantidade + "\n" +
    "Total: R$ " + total.toFixed(2));

    alert("Compra realizada!\n" + 
          "Produto: " + nome + "\n" +
          "Tamanho: " + tamanho + "\n" +
          "Quantidade: " + quantidade + "\n" +
          "Total: R$ " + total.toFixed(2));
  } else {
    alert("Quantidade inválida!");
  }
}