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

// Dropdown model variant buttons 

$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});




