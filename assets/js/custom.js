$(document).ready(function() {
  $('.aio-slick').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
  });
});


// Comparison Slider

document.addEventListener('DOMContentLoaded', function() {
  var parent = document.querySelector('.aio-compare-splitview'),
      topPanel = parent.querySelector('.aio-compare-top'),
      handle = parent.querySelector('.aio-compare-handle'),
      content = topPanel.querySelector('.aio-compare-content');

  parent.addEventListener('mousemove', function(event) {
    // Move the handle
    var wrapper = $(".page-wrapper");
    handle.style.left = (event.clientX - parseInt(wrapper.offset().left) - parseInt(wrapper.css("padding-left"))) + 'px';

    // Adjust the top panel width
    topPanel.style.width = (event.clientX - parseInt(wrapper.offset().left) - parseInt(wrapper.css("padding-left"))) + 'px';
    var parentQ = $(".aio-compare-splitview");
    content.style.width = parseInt(parentQ.css("width")) + 'px';
  });
});
