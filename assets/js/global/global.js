(function (){

  // Bloqueando arrasta imagens do site para baixar

  function desativarDragDrop () {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }

  desativarDragDrop()

}())



const carouselDelay = 1000;

  if (carouselDelay) {
    setTimeout(function () {
      document.querySelector('#rotativo_tecnicas').style.display = 'block';

      $('#rotativo_tecnicas').owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 600,
        responsiveClass: true,
        nav: true,
        dots: true,
        navText: ['<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/esquerda.png">', '<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/direita.png">'],
        responsive: { 0: { items: 1.5, margin: 0, mouseDrag: true }, 1100: { items: 2.5, mouseDrag: true, margin:0, autoplay: false } },
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      });
    }, carouselDelay);
  }
  if (carouselDelay) {
    setTimeout(function () {
      document.querySelector('#rotativo_depoimentos').style.display = 'block';

      $('#rotativo_depoimentos').owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 600,
        responsiveClass: true,
        nav: true,
        navText: ['<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/esquerda.png">', '<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/direita.png">'],
        responsive: { 0: { items: 1.5, margin: 0, mouseDrag: true }, 1100: { items: 2, mouseDrag: true, margin: 20, autoplay: false } },
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      });
    }, carouselDelay);
  }

