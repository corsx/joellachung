// Add color on scroll to navbar
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

// Shrink logo on scroll 
window.onscroll = function() {
  growShrinkLogo()
};

var Logo = document.getElementById("Logo");
var endOfDocumentTop = 50;
var size = 0;

function growShrinkLogo() {
var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (size == 0 && scroll > endOfDocumentTop) {
    Logo.style.width = '25px';
    size = 1;
  } else if(size == 1 && scroll <= endOfDocumentTop){
    Logo.style.width = '60px';
   size = 0;
  }
}


// init Masonry
var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	percentPosition: true,
	columnWidth: '.grid-sizer',
	isFitWidth: true,
  horizontalOrder: true,
  stagger: 30,
  });
  
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
	$grid.masonry();
  });


  $(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    });
});

// Lightbox
class Lightbox{
    constructor(){
     this.init()
    }
  
    init(){
     this.container = document.createElement('div');
     this.container.id = 'lightbox';
     document.body.appendChild(this.container);
  
     this.lightboxImg = document.createElement('img');
     this.container.appendChild(this.lightboxImg);
  
     this.addListeners();
    }
  
    addListeners(){
     const images = document.querySelectorAll('.grid img');
     images.forEach(img => {
      img.addEventListener('click', ()=> this.gridImgClicked(img))
     })
  
     this.container.addEventListener('click', ()=>{
      this.hideLightbox()
     })
  
     document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') this.hideLightbox()
     })
    }
  
    hideLightbox(){
     this.container.classList.remove('active')
    }
  
    galleryImgClicked = (img) => {
      this.lightboxImg.src = img.src;
      this.container.classList.add('active')
    }
  }
  
  const lightbox = new Lightbox()

  $(function() {

     $('#exampleModalCenter').modal();
  
    
  })

// init Masonry
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});




