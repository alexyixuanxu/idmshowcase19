var landingPage = document.getElementById('landing-page');

var rsvpFlickerSwitch = false;

//document.addEventListener('scroll', function() {
//    if (rsvpFlickerSwitch == false) {
//        if (window.pageYOffset > landingPage.clientHeight) {
//            rsvpFlickerSwitch = true;
//            stopNavRsvpFlicker = false;
//        }
//    } else {
//        if (window.pageYOffset <= landingPage.clientHeight) {
//            rsvpFlickerSwitch = false;
//            stopNavRsvpFlicker = true;
//        }
//    }
//});


var landingPageHeading = document.getElementById('landing-page-heading');

var yellowLandingHeading = 'front';

//color flicker for landing page heading
setInterval(function() {
    if (yellowLandingHeading == 'front') {
        landingPageHeading.style.color = '#00A0C6';
        landingPageHeading.style.textShadow = '0px 3px 20px #00A0C6, -10px -10px #FFFE00, -10px -7px 20px #FFFE00, -20px -20px #F0037F, -20px -17px 20px #F0037F';
        yellowLandingHeading = 'middle';
    } else if (yellowLandingHeading == 'middle') {
        landingPageHeading.style.color = '#F0037F';
        landingPageHeading.style.textShadow = '0px 3px 20px #00A0C6, -10px -10px #00A0C6, -10px -7px 20px #00A0C6, -20px -20px #FFFE00, -20px -17px 20px #FFFE00';
        yellowLandingHeading = 'back';
    } else {
        landingPageHeading.style.color = '#FFFE00';
        landingPageHeading.style.textShadow = '0px 3px 20px #FFFE00, -10px -10px #F0037F, -10px -7px 20px #F0037F, -20px -20px #00A0C6, -20px -17px 20px #00A0C6';
        yellowLandingHeading = 'front';
    }
}, 1000);


//----------------------------------------


var showcaseLogo = document.getElementById('showcase-logo');

showcaseLogo.addEventListener('mouseover', function() {
    showcaseLogo.src = 'images/idmstickerblinkblack.gif';
});

showcaseLogo.addEventListener('mouseout', function() {
    showcaseLogo.src = 'images/idmstickertransparent.png';
});


var navRsvpButton = document.getElementById('nav-rsvp-button');

var navRsvpButtonText = document.getElementById('nav-rsvp-button-text');

var stopNavRsvpFlicker = false;

var navRsvpMagentaCyan = true;

navRsvpButton.addEventListener('mouseover', function() {
    stopNavRsvpFlicker = true;
    
    navRsvpButtonText.style.color = 'white';
    
    navRsvpButtonText.style.textShadow = '0px 3px 10px white';
    
    navRsvpButtonText.style.borderColor = 'white';
    
    navRsvpButtonText.style.boxShadow = '0px 2px 20px white';
});

navRsvpButton.addEventListener('mouseout', function() {
    stopNavRsvpFlicker = false;
    
    navRsvpButtonText.style.color = '#00A0C6';
            
    navRsvpButtonText.style.textShadow = '0px 3px 10px #00A0C6';
            
    navRsvpButtonText.style.borderColor = '#F0037F';
            
    navRsvpButtonText.style.boxShadow = '0px 2px 20px #F0037F';
});

//color flicker for the nav rsvp button
setInterval(function() {
    if (stopNavRsvpFlicker == false) {
        if (navRsvpMagentaCyan == true) {
            navRsvpButtonText.style.color = '#F0037F';
            
            navRsvpButtonText.style.textShadow = '0px 3px 10px #F0037F';
            
            navRsvpButtonText.style.borderColor = '#00A0C6';
            
            navRsvpButtonText.style.boxShadow = '0px 2px 20px #00A0C6';
            
            navRsvpMagentaCyan = false;
        } else {
            navRsvpButtonText.style.color = '#00A0C6';
            
            navRsvpButtonText.style.textShadow = '0px 3px 10px #00A0C6';
            
            navRsvpButtonText.style.borderColor = '#F0037F';
            
            navRsvpButtonText.style.boxShadow = '0px 2px 20px #F0037F';
            
            navRsvpMagentaCyan = true;
        };
    }
}, 1000);


//dark flicker for nav rsvp button
//setInterval(function() {
//    if (stopNavRsvpFlicker == false) {
//        if (navRsvpMagentaCyan == true) {
//            setTimeout(function() {  //dark
//                navRsvpButton.style.color = '#382930';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #382930';
//                
//                navRsvpButton.style.borderColor = '#242F30';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #242F30';
//            }, 50);
//            
//            setTimeout(function() {  //color
//                navRsvpButton.style.color = '#F0037F';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #F0037F';
//                
//                navRsvpButton.style.borderColor = '#00A0C6';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #00A0C6';
//            }, 100);
//            
//            setTimeout(function() {  //dark
//                navRsvpButton.style.color = '#382930';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #382930';
//                
//                navRsvpButton.style.borderColor = '#242F30';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #242F30';
//            }, 200);
//            
//            setTimeout(function() {  //color
//                navRsvpButton.style.color = '#F0037F';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #F0037F';
//                
//                navRsvpButton.style.borderColor = '#00A0C6';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #00A0C6';
//            }, 400);
//            
//            setTimeout(function() {  //dark
//                navRsvpButton.style.color = '#382930';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #382930';
//                
//                navRsvpButton.style.borderColor = '#242F30';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #242F30';
//            }, 600);
//            
//            setTimeout(function() {  //color
//                navRsvpButton.style.color = '#F0037F';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #F0037F';
//                
//                navRsvpButton.style.borderColor = '#00A0C6';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #00A0C6';
//            }, 900);
//        } else {
//            setTimeout(function() {  //dark
//                navRsvpButton.style.color = '#242F30';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #242F30';
//                
//                navRsvpButton.style.borderColor = '#382930';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #382930';
//            }, 50);
//            
//            setTimeout(function() {  //color
//                navRsvpButton.style.color = '#00A0C6';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #00A0C6';
//                
//                navRsvpButton.style.borderColor = '#F0037F';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #F0037F';
//            }, 100);
//            
//            setTimeout(function() {  //dark
//                navRsvpButton.style.color = '#242F30';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #242F30';
//                
//                navRsvpButton.style.borderColor = '#382930';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #382930';
//            }, 200);
//            
//            setTimeout(function() {  //color
//                navRsvpButton.style.color = '#00A0C6';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #00A0C6';
//                
//                navRsvpButton.style.borderColor = '#F0037F';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #F0037F';
//            }, 400);
//            
//            setTimeout(function() {  //dark
//                navRsvpButton.style.color = '#242F30';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #242F30';
//                
//                navRsvpButton.style.borderColor = '#382930';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #382930';
//            }, 600);
//            
//            setTimeout(function() {  //color
//                navRsvpButton.style.color = '#00A0C6';
//                
//                navRsvpButton.style.textShadow = '0px 3px 10px #00A0C6';
//                
//                navRsvpButton.style.borderColor = '#F0037F';
//                
//                navRsvpButton.style.boxShadow = '0px 2px 20px #F0037F';
//            }, 900);
//        }
//    }
//}, 5500);


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


var rsvpButton = document.getElementById('rsvp-button');

var stopRsvpFlicker = false;

var rsvpMagentaCyan = true;

rsvpButton.addEventListener('mouseover', function() {
    stopRsvpFlicker = true;
    
    rsvpButton.style.color = 'white';
    
    rsvpButton.style.textShadow = '0px 8px 20px white';
    
    rsvpButton.style.borderColor = 'white';
    
    rsvpButton.style.boxShadow = '0px 7px 20px white';
});

rsvpButton.addEventListener('mouseout', function() {
    stopRsvpFlicker = false;
    
    rsvpButton.style.color = '#00A0C6';
            
    rsvpButton.style.textShadow = '0px 8px 20px #00A0C6';
            
    rsvpButton.style.borderColor = '#F0037F';
            
    rsvpButton.style.boxShadow = '0px 7px 20px #F0037F';
});

//color flicker for the rsvp button
setInterval(function() {
    if (stopRsvpFlicker == false) {
        if (rsvpMagentaCyan == true) {
            rsvpButton.style.color = '#F0037F';
            
            rsvpButton.style.textShadow = '0px 8px 20px #F0037F';
            
            rsvpButton.style.borderColor = '#00A0C6';
            
            rsvpButton.style.boxShadow = '0px 7px 20px #00A0C6';
            
            rsvpMagentaCyan = false;
        } else {
            rsvpButton.style.color = '#00A0C6';
            
            rsvpButton.style.textShadow = '0px 8px 20px #00A0C6';
            
            rsvpButton.style.borderColor = '#F0037F';
            
            rsvpButton.style.boxShadow = '0px 7px 20px #F0037F';
            
            rsvpMagentaCyan = true;
        }
    }
}, 1000);


//dark flicker for the rsvp button
setInterval(function() {
    if (stopRsvpFlicker == false) {
        if (rsvpMagentaCyan == true) {
            setTimeout(function() {  //dark
                rsvpButton.style.color = '#382930';
                
                rsvpButton.style.textShadow = '0px 8px 20px #382930';
                
                rsvpButton.style.borderColor = '#242F30';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #242F30';
            }, 50);
            
            setTimeout(function() {  //color
                rsvpButton.style.color = '#F0037F';
                
                rsvpButton.style.textShadow = '0px 8px 20px #F0037F';
                
                rsvpButton.style.borderColor = '#00A0C6';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #00A0C6';
            }, 100);
            
            setTimeout(function() {  //dark
                rsvpButton.style.color = '#382930';
                
                rsvpButton.style.textShadow = '0px 8px 20px #382930';
                
                rsvpButton.style.borderColor = '#242F30';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #242F30';
            }, 200);
            
            setTimeout(function() {  //color
                rsvpButton.style.color = '#F0037F';
                
                rsvpButton.style.textShadow = '0px 8px 20px #F0037F';
                
                rsvpButton.style.borderColor = '#00A0C6';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #00A0C6';
            }, 400);
            
            setTimeout(function() {  //dark
                rsvpButton.style.color = '#382930';
                
                rsvpButton.style.textShadow = '0px 8px 20px #382930';
                
                rsvpButton.style.borderColor = '#242F30';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #242F30';
            }, 600);
            
            setTimeout(function() {  //color
                rsvpButton.style.color = '#F0037F';
                
                rsvpButton.style.textShadow = '0px 8px 20px #F0037F';
                
                rsvpButton.style.borderColor = '#00A0C6';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #00A0C6';
            }, 900);
        } else {
            setTimeout(function() {  //dark
                rsvpButton.style.color = '#242F30';
                
                rsvpButton.style.textShadow = '0px 8px 20px #242F30';
                
                rsvpButton.style.borderColor = '#382930';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #382930';
            }, 50);
            
            setTimeout(function() {  //color
                rsvpButton.style.color = '#00A0C6';
                
                rsvpButton.style.textShadow = '0px 8px 20px #00A0C6';
                
                rsvpButton.style.borderColor = '#F0037F';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #F0037F';
            }, 100);
            
            setTimeout(function() {  //dark
                rsvpButton.style.color = '#242F30';
                
                rsvpButton.style.textShadow = '0px 8px 20px #242F30';
                
                rsvpButton.style.borderColor = '#382930';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #382930';
            }, 200);
            
            setTimeout(function() {  //color
                rsvpButton.style.color = '#00A0C6';
                
                rsvpButton.style.textShadow = '0px 8px 20px #00A0C6';
                
                rsvpButton.style.borderColor = '#F0037F';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #F0037F';
            }, 400);
            
            setTimeout(function() {  //dark
                rsvpButton.style.color = '#242F30';
                
                rsvpButton.style.textShadow = '0px 8px 20px #242F30';
                
                rsvpButton.style.borderColor = '#382930';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #382930';
            }, 600);
            
            setTimeout(function() {  //color
                rsvpButton.style.color = '#00A0C6';
                
                rsvpButton.style.textShadow = '0px 8px 20px #00A0C6';
                
                rsvpButton.style.borderColor = '#F0037F';
                
                rsvpButton.style.boxShadow = '0px 7px 20px #F0037F';
            }, 900);
        }
    }
}, 5500);


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
    
    heading2018.style.color = '#F0037F';
    heading2018.style.textShadow = '0px 3px 10px rgba(0, 160, 198, 0.5)';
});

prevShow2017Link.addEventListener('mouseover', function() {
    img2017.src = 'images/2017-showcase-gif.gif';
    
    heading2017.style.color = 'white';
    heading2017.style.textShadow = '0px 3px 10px white';
});

prevShow2017Link.addEventListener('mouseout', function() {
    img2017.src = 'images/2017-showcase-picture.jpg';
    
    heading2017.style.color = '#FFFE00';
    heading2017.style.textShadow = '0px 3px 10px rgba(255, 254, 0, 0.5)';
});

prevShow2016Link.addEventListener('mouseover', function() {
    img2016.src = 'images/2016-showcase-gif.gif';
    
    heading2016.style.color = 'white';
    heading2016.style.textShadow = '0px 3px 10px white';
});

prevShow2016Link.addEventListener('mouseout', function() {
    img2016.src = 'images/2016-showcase-picture.jpg';
    
    heading2016.style.color = '#FFFE00';
    heading2016.style.textShadow = '0px 3px 10px rgba(255, 254, 0, 0.5)'
});

prevShow2015Link.addEventListener('mouseover', function() {
    img2015.src = 'images/2015-showcase-gif.gif';
    
    heading2015.style.color = 'white';
    heading2015.style.textShadow = '0px 3px 10px white';
});

prevShow2015Link.addEventListener('mouseout', function() {
    img2015.src = 'images/2015-showcase-picture.jpg';
    
    heading2015.style.color = '#00A0C6';
    heading2015.style.textShadow = '0px 3px 10px rgba(240, 3, 127, 0.5)';
});
