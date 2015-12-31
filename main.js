$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(10)
    .next()
    .fadeIn(10)
    .end()
    .appendTo('#slideshow');
},  2000);