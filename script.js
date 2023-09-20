// Função para acender e apagar a lâmpada quando clicada
document.getElementById("lampada-01").addEventListener("click", function () {
    var lampada = document.getElementById("lampada-01");
    if (lampada.src.match("lampada-on.jpg")) {
      lampada.src = "lampada(1).jpg";
    } else {
      lampada.src = "lampada-on.jpg";
    }
  });
  
  // Função para acender e apagar a lâmpada quando o mouse passa por cima
  document.getElementById("lampada-02").addEventListener("mouseover", function () {
    var lampada = document.getElementById("lampada-02");
    lampada.src = "lampada-on.jpg";
  });
  
  document.getElementById("lampada-02").addEventListener("mouseout", function () {
    var lampada = document.getElementById("lampada-02");
    lampada.src = "lampada(1).jpg";
  });
  