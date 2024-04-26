$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 100,
    arrows: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });
});

function comprar(nome, tamanho, valor) {
  var quantidade = parseInt(prompt("Quantidade desejada:"));
  if (!isNaN(quantidade) && quantidade > 0) {
    var total = quantidade * valor;
    alert("Compra realizada!\n" + 
          "Produto: " + nome + "\n" +
          "Tamanho: " + tamanho + "\n" +
          "Quantidade: " + quantidade + "\n" +
          "Total: R$ " + total.toFixed(2));
  } else {
    alert("Quantidade inválida!");
  }
}
