/*//////////////////////////////[[[[For Responsive Navbar]]]]  //////////////////////////*/
function show() {
    let navbar = document.querySelector('.navbar');
    let navMenu = document.querySelector('.responsivenav');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        navbar.classList.remove('fa-xmark');
        navbar.classList.add('fa-bars');
    } else {
        navMenu.style.display = 'block';
        navbar.classList.remove('fa-bars');
        navbar.classList.add('fa-xmark');
    }
}

/*//////////////////////////////[[[[For light and dark mode]]]]  //////////////////////////*/
function toggle() {
    let dark=document.querySelector('dark');
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.mode');

    if (document.body.classList.contains('dark-mode')) {
        document.getElementById("dark").innerHTML =' &nbsp Light';
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        document.getElementById("dark").innerHTML =' &nbsp Dark';
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}
/*//////////////////////////////[[[[Navigation from ane section to other without page reload]]]]  //////////////////////////*/
function hiddensection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        if (sec.id === section) {
            sec.style.display = 'block';
        } else {
            sec.style.display = 'none';
        }
    });
}

// Default to showing the home section on page load
document.addEventListener('DOMContentLoaded', function() {
    hiddensection('home');
});
    function hiddensection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        if (sec.id === section) {
            sec.style.display = 'block';
        } else {
            sec.style.display = 'none';
        }
    });
}

/*//////////////////////////////[[[[For slider in resume section]]]]  //////////////////////////*/
document.addEventListener('DOMContentLoaded', function() {
    hiddensection('home');
});
    $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
}); 
/*//////////////////////////////[[[[For Showing animation on scrool when skill section highlight in resume section]]]]  //////////////////////////*/
$(document).ready(function() {
    var animated = false; 

     $(window).on('scroll', function() {
         var skillsTop = $('.skills').offset().top;
         var skillsHeight = $('.skills').outerHeight();
         var windowHeight = $(window).height();
         var scrollPos = $(window).scrollTop();
         
         if (!animated && scrollPos > (skillsTop + skillsHeight - windowHeight)) {
             $(".skills").addClass("active");
             $(".skills .skill .skill-bar span").each(function() {
                 $(this).animate({
                     "width": $(this).parent().attr("data-bar") + "%"
                 }, 500);
                 $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
             });
             setTimeout(function() {
                 $(".skills .skill .skill-bar span b").animate({"opacity":"1"},300);
             }, 1000);

             animated = true; // Set the flag to true after the animation is triggered
         }
     });
 });
