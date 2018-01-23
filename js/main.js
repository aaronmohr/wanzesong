$(document).ready(function(){
    
    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
        $('#overlay-menu').fadeToggle(500);
        $('#logo').toggleClass('open', 2000);
    });

    $('main').Chocolat({
        imageSize: 'contain'
    });
    
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