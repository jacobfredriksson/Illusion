var scale;
var opacity;
var textOpacity;
var targetArray = [];
var targetId;
var slides;
var homeTop;
var height;
var textContainer = []
var translateY


//set height depending on content height when window loads.
$(document).ready(function() {
  var createTextContainer = Array.from(document.querySelectorAll('.slideshow__text-container'));
  textContainer.push(createTextContainer)
  slides = Array.from(document.querySelectorAll('.slideshow__slide'))
  resizeResizeableHeight()
//set id going form 0 - up  and z-index to top - 0 on each of the elements in .slide
  var idIndex = Array.from(document.querySelectorAll('.slideshow__slide'))
  idIndex.map((el, i) => {
    i++
    el.id = 'slide'+ i;
    targetArray.push(el)
  })

  idIndex.reverse()
  idIndex.map((el,i) => {
    el.style.zIndex = i;
  })
});



//check scroll position
function getVisible(position) {
  homeTop = $(window).scrollTop();
  height = $(this).height();
  var $el = $('.container'),
    scrollTop = $(this).scrollTop(),
    scrollBot = scrollTop + $(this).height(),
    elTop = $el.offset().top,
    elBottom = elTop + $el.outerHeight(),
    visibleTop = elTop < scrollTop
      ? scrollTop
      : elTop,
    visibleBottom = elBottom > scrollBot
      ? scrollBot
      : elBottom;
//
  translateY = (scrollTop - elTop) / $(window).height() * 100;
  scale = (height + homeTop + elTop ) / height;
  textOpacity = (height + homeTop + elTop ) / height -1.4;
  opacity = (height - homeTop + elTop) / height;
  opacity = parseFloat(Math.round(opacity * 100) / 100).toFixed(3);
  scale = parseFloat(Math.round(scale * 100) / 100).toFixed(3);
tetextOpacity = parseFloat(Math.round(textOpacity * 100) / 100).toFixed(3);

  changeBackground()
  resizeResizeableHeight()
}


//change background img depending on scroll position.
function changeBackground() {
  // Give all elements a targetvalue of screenHeight
  var setScrollPosition = targetArray.map((el, i) => {
    i++
    el.accessKey = height * i
  })

  //If scroll from top matches Screen height give next image same start values as previous
  for (var i = 2; homeTop >= height; i++) {
    resetHeight()

    if (homeTop >= height) {
      height = height * i
        if(opacity <= 0) {
          opacity++
          scale--
          translateY -= 100
          textOpacity -= 1
        }
    }
  }


  //Filter the array so just that element which matches its given value
  var getTargetId = targetArray.filter((el, i) => el.accessKey == height)


  //Target id will always be on first spot in the filtred array.
  targetId = getTargetId[0]


  //change styles on chosen target.
  $(targetId).children('.slideshow__text-container').css('opacity', 1)
  // $(targetId).children('').css('opacity', 1)
  var testa = $(targetId).css('opacity', opacity)
  $(targetId).children('.bg-img').css({
    transform: 'scale(' + scale + ')'
  });

   $(targetId).children('.bg-img').children('.slideshow__text-container').css(
    'transform', 'translateY(-' + translateY + 'px)'
  );

  // console.log(textOpacity)

  // if(targetId.style.opacity == 1) {
    $(targetId).next().children('.bg-img').children('.slideshow__text-container').css(
      'opacity', textOpacity
   );


  console.log($(targetId).next().children('.bg-img').children('.slideshow__text-container').css('opacity'))


  // $('body').css('transform', 'translateY(-' + opacity + 'px)');

  // "-webkit-transform":"translate(100px,100px)"



  if (targetId) {
    $( targetId).prevAll(targetId).css( "opacity" , 0 );
    $( targetId).prevAll(targetId).css( "display" , "none" );
  }
  if (opacity >= 0.01) {
    $(targetId).css('display', 'block')
  }
}

//Give container and all image containers a height dependning on screen size.
function resizeResizeableHeight() {
    $('.slideshow__slide').each( function() {
        $(this).outerHeight( $(this).parent().height());
    });
    $('.container').each( function() {
        $(this).outerHeight( $(this).parent().height() * slides.length )
    });

}

//Reset height
function resetHeight() {
  height = $(this).height();
}

function textContainer () {

}


$(window).on('scroll resize', getVisible);
