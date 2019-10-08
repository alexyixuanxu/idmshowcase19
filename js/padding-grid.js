window.shuffleInstance = new window.Shuffle(document.getElementById('grid'), {
  itemSelector: '.grid__brick',
  sizer: '.my-sizer-element',
  initialSort: {randomize:false}
});


$(document).ready(function() {

});

var resizeTimer;

$(window).resize(function() {
  window.shuffleInstance.sort({randomize:false});
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {

    // shuffleInstance.sort({randomize:true});

  }, 250);
  // setTimeout({shuffleInstance.sort({randomize:true})}, 3000));
})

var showcaseLogo = document.getElementById('showcase-logo');

setTimeout(function() {
  showcaseLogo.src = 'img/idmstickertransparent.png'
}, 3250)

showcaseLogo.addEventListener('mouseover', function() {
    showcaseLogo.src = 'img/idmstickerblinkblack.gif';
});

showcaseLogo.addEventListener('mouseout', function() {
    showcaseLogo.src = 'img/idmstickertransparent.png';
});
