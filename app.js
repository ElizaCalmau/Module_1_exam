let offset = 0;
const sliderLine= document.querySelector('.slider-line');

document.querySelector('.slider_next').addEventListener('click', function(){
    offset = offset + 400;
    sliderLine.style.left = -offset + 'px';
    if (offset >= 1200) {
        sliderLine.style.left = 0;
    }
})

document.querySelector('.slider_prev').addEventListener('click', function(){
    offset = offset - 400;
    sliderLine.style.left = -offset + 'px';
    if (offset <= 0){
      offset = 1200;
    }
    
})