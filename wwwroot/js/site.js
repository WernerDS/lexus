// Navigation ACTIVE class
$(document).ready(function(){
	$('.navbar-nav li a[href="' + document.location.pathname + '"]').parent('li').addClass('active');
});

// Header SWITCH
$(document).ready(function(){
    var navbar = $("#main-nav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 300) {
            navbar.removeClass('nav-padding');
        } else {
            navbar.addClass('nav-padding');
        }
    });
});



