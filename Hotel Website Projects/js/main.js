let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scroll");
    }else{
        nav.classList.remove('header-scroll');
    }
}

// let navbar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navbar.forEach(function(a){
//    a.addEventListener('click', function(){
//     navCollapse.classList.remove('show');
//    })
// });
document.addEventListener("DOMContentLoaded", function() {
    // Select the navbar toggler and collapse elements
    let navbarToggler = document.querySelector('.navbar-toggler');
    let navCollapse = document.querySelector('.navbar-collapse.collapse');
    let navbarLinks = document.querySelectorAll('.nav-link');
  
    // Toggle the navbar collapse on toggler button click
    navbarToggler.addEventListener('click', function() {
      navCollapse.classList.toggle('show');
    });
  
    // Close the navbar collapse on nav link click
    navbarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (navCollapse.classList.contains('show')) {
          navCollapse.classList.remove('show');
        }
      });
    });
  });
  


var swiper = new Swiper('.MySwiper', {
     direction: 'vertical',
     loop: true,
     pagination: {
        el: ".swiper-pagination", 
        clickable: true,
     },
     autoplay: {
        delay: 3500, 
     },
});


document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step)
    }
    counter('count1', 700, 2000, 3000);
    counter("count2", 0, 1000, 3000);
    counter("count3", 200, 1407, 3000);
    counter("count4", 300, 1500, 3000);
})

var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 8,
        },
    },
});




document.addEventListener('DOMContentLoaded', function() {
    const radioButton = document.querySelector('.wcsatt-options-prompt-label-subscription input[type="radio"]');
    const body = document.body;
    if (radioButton) {
        radioButton.addEventListener('change', function() {
            if (radioButton.checked) {
                body.classList.add('subscription-selected');
            } else {
                body.classList.remove('subscription-selected');
            }
        });
    }
});