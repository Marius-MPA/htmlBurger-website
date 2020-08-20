// navbar background change on scroll
var navbar = document.querySelector('#nav-bar');
// console.log(navbar);
    
window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled-nav')
    } else {
        navbar.classList.remove('scrolled-nav')
    }
}

// carousel-indicators on/off effect

// first : we check the presence of .active at window: load event and add opacity:1 to element with active class
var indicatorsImg = document.querySelectorAll(".carousel-indicator-img");
    console.log(indicatorsImg);   

    for(let i = 0; i < indicatorsImg.length; i++) {
    
        let item = indicatorsImg[i].classList.contains("active");
        console.log(item);
        if(item){
            indicatorsImg[i].classList.add("carouselItemOpacity");
        } else {
            indicatorsImg[i].classList.remove("carouselItemOpacity");
        }
    }

// second : we bind the changing of opacity to moving of carousel slides (.active)
$('#team-slider').bind('slid.bs.carousel', function (e) {
    // console.log('before');
    var indicatorsImg = document.querySelectorAll(".carousel-indicator-img");
    console.log(indicatorsImg);   

    for(let i = 0; i < indicatorsImg.length; i++) {
    
        let item = indicatorsImg[i].classList.contains("active");
        console.log(item);
        if(item){
            indicatorsImg[i].classList.add("carouselItemOpacity");
        } else {
            indicatorsImg[i].classList.remove("carouselItemOpacity");
        }
    }
});