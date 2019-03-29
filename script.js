var showcaseLogo = document.getElementById('showcase-logo');

showcaseLogo.addEventListener('mouseover', function() {
    showcaseLogo.src = 'images/idmstickerblinkblack.gif';
});

showcaseLogo.addEventListener('mouseout', function() {
    showcaseLogo.src = 'images/idmstickertransparent.png';
});


var navRsvpButton = document.getElementById('nav-rsvp-button');

var navRsvpButtonText = document.getElementById('nav-rsvp-button-text');

navRsvpButton.addEventListener('mouseover', function() {
    navRsvpButtonText.style.textShadow = '0px 3px 10px white';
});

navRsvpButton.addEventListener('mouseout', function() {
    navRsvpButtonText.style.textShadow = '0px 3px 10px #00A0C6';
});


//$(document).ready(function() {
//    $(document).scroll(function() {
//        if (window.innerWidth >= 500) {
//            if (window.pageYOffset > 450) {
//                $('#main-nav').fadeIn(300);
//            } else {
//                $('#main-nav').fadeOut(300);
//            }
//        } else {  //for smaller screen widths
//            if (window.pageYOffset > 300) {
//                $('#main-nav').fadeIn(300);
//            } else {
//                $('#main-nav').fadeOut(300);
//            }
//        }
//    });
//});

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function toggleDropdown() {
    document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {
        let openedDropdown = document.getElementsByClassName("dropdown-content")[0];
        if (openedDropdown.classList.contains('show')) {
            openedDropdown.classList.remove('show');
        }
    }
}


//----------------------------------------


var prevShow2018Link = document.getElementById('prev-show-2018-link');

var prevShow2017Link = document.getElementById('prev-show-2017-link');

var prevShow2016Link = document.getElementById('prev-show-2016-link');

var prevShow2015Link = document.getElementById('prev-show-2015-link');


var img2018 = document.getElementById('img-2018');

var img2017 = document.getElementById('img-2017');

var img2016 = document.getElementById('img-2016');

var img2015 = document.getElementById('img-2015');


var heading2018 = document.getElementById('heading-2018');

var heading2017 = document.getElementById('heading-2017');

var heading2016 = document.getElementById('heading-2016');

var heading2015 = document.getElementById('heading-2015');


prevShow2018Link.addEventListener('mouseover', function() {
    img2018.src = 'images/2018-showcase-gif.gif';
    
    heading2018.style.color = 'white';
    heading2018.style.textShadow = '0px 3px 10px white';
});

prevShow2018Link.addEventListener('mouseout', function() {
    img2018.src = 'images/2018-showcase-picture.png';
    
    heading2018.style.color = '#00A0C6';
    heading2018.style.textShadow = '0px 3px 10px #00A0C6';
});

prevShow2017Link.addEventListener('mouseover', function() {
    img2017.src = 'images/2017-showcase-gif.gif';
    
    heading2017.style.color = 'white';
    heading2017.style.textShadow = '0px 3px 10px white';
});

prevShow2017Link.addEventListener('mouseout', function() {
    img2017.src = 'images/2017-showcase-picture.jpg';
    
    heading2017.style.color = '#FFFE00';
    heading2017.style.textShadow = '0px 3px 10px #FFFE00';
});

prevShow2016Link.addEventListener('mouseover', function() {
    img2016.src = 'images/2016-showcase-gif.gif';
    
    heading2016.style.color = 'white';
    heading2016.style.textShadow = '0px 3px 10px white';
});

prevShow2016Link.addEventListener('mouseout', function() {
    img2016.src = 'images/2016-showcase-picture.jpg';
    
    heading2016.style.color = '#FFFE00';
    heading2016.style.textShadow = '0px 3px 10px #FFFE00'
});

prevShow2015Link.addEventListener('mouseover', function() {
    img2015.src = 'images/2015-showcase-gif.gif';
    
    heading2015.style.color = 'white';
    heading2015.style.textShadow = '0px 3px 10px white';
});

prevShow2015Link.addEventListener('mouseout', function() {
    img2015.src = 'images/2015-showcase-picture.jpg';
    
    heading2015.style.color = '#F0037F';
    heading2015.style.textShadow = '0px 3px 10px #F0037F';
});