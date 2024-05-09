var canvas = document.getElementById('gameCanvas'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'img/board.svg';
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0);
  }
}