$(document).ready(function(){
    
    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
        $('#overlay-menu').fadeToggle(500);
        $('#logo').toggleClass('open', 2000);
    });
    
// Gallery Settings
    
    $('main').Chocolat({
        container: '#gallery-container',
        imageSize: 'contain',
        loop: true,
        className:'chocolat-gallery'
    }).data('chocolat').api().open()
    
    var instance = $('main').Chocolat().data('chocolat');
    
    instance.api().getElem('overlay').off('click.chocolat')
    
    $(document).off('keydown.chocolat').on('keydown.chocolat', function(e) {
        if (instance.api().get('initialized')) {
            if (e.keyCode == 37) {
                instance.api().prev()
            }
            else if (e.keyCode == 39) {
                instance.api().next()
            }
        }
    });
    
// Screen Resizing
    
    mediaCheck({
        
    media: '(max-width: 700px)',
    entry: function() {
        $(".file, .thumb").unwrap();
    },
               
    exit: function() {
        
        var i = 0;
        
        $(window).on("resize", function () {
            var windowsize = $(this).width();
            if (windowsize < 699 && i === 0) {
            i = 1;
        } else if (windowsize >= 699 && i == 1) {
            location.reload();
            i = 0;
        }
        });
        
        var s = skrollr.init(); 
    },
        
    });
    

    $(window).ready(function(){
       $("#loader").fadeOut("slow"); 
    });
    
});


window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});