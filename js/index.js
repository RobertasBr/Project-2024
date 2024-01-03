document.addEventListener('DOMContentLoaded', function () {
  var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    animationDuration: 800,
    focusAt: 'center',
    gap: 0,
    autoplay: 1250,
  });

  glide.on('beforeTransition', function () {
    var currentSlide = glide.index;

    $('.glide__slide').css('opacity', 0.7);

    $('.glide__slide').eq(currentSlide).css('opacity', 1);
  });

  glide.mount();
});