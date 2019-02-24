var mainNav = document.getElementById('main-nav');

//setInterval(function() { console.log(window.pageYOffset); }, 1000);

document.addEventListener('scroll', function() {
    if (window.pageYOffset > 450) {
        mainNav.style.display = 'inherit';
    } else {
        mainNav.style.display = 'none';
    }
});


//----------------------------------------


var prevShow2018Link = document.getElementById('prev-show-2018-link');

var prevShow2017Link = document.getElementById('prev-show-2017-link');

var prevShow2016Link = document.getElementById('prev-show-2016-link');

var prevShow2015Link = document.getElementById('prev-show-2015-link');


var img2018 = document.getElementById('img-2018');

var img2017 = document.getElementById('img-2017');

var img2016 = document.getElementById('img-2016');

var img2015 = document.getElementById('img-2015');


prevShow2018Link.addEventListener('mouseover', function() {
    img2018.src = 'images/2018-showcase-gif.gif';
});

prevShow2018Link.addEventListener('mouseout', function() {
    img2018.src = 'images/2018-showcase-picture.png';
});

prevShow2017Link.addEventListener('mouseover', function() {
    img2017.src = 'images/2017-showcase-gif.gif';
});

prevShow2017Link.addEventListener('mouseout', function() {
    img2017.src = 'images/2017-showcase-picture.jpg';
});

prevShow2016Link.addEventListener('mouseover', function() {
    img2016.src = 'images/2016-showcase-gif.gif';
});

prevShow2016Link.addEventListener('mouseout', function() {
    img2016.src = 'images/2016-showcase-picture.jpg';
});

prevShow2015Link.addEventListener('mouseover', function() {
    img2015.src = 'images/2015-showcase-gif.gif';
});

prevShow2015Link.addEventListener('mouseout', function() {
    img2015.src = 'images/2015-showcase-picture.jpg';
});
