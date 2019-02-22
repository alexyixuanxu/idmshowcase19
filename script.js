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

var prevShow2018 = document.getElementById('prev-show-2018');

var prevShow2017Link = document.getElementById('prev-show-2017-link');

var prevShow2017 = document.getElementById('prev-show-2017');

var prevShow2016Link = document.getElementById('prev-show-2016-link');

var prevShow2016 = document.getElementById('prev-show-2016');

var prevShow2015Link = document.getElementById('prev-show-2015-link');

var prevShow2015 = document.getElementById('prev-show-2015');


var img2017 = document.getElementById('img-2017');


prevShow2018Link.addEventListener('mouseover', function() {
    prevShow2018.style.backgroundColor = 'blue';
});

prevShow2018Link.addEventListener('mouseout', function() {
    prevShow2018.style.backgroundColor = 'rgb(100, 100, 100)';
});

prevShow2017Link.addEventListener('mouseover', function() {
//    prevShow2017.style.backgroundColor = 'purple';
    img2017.src = 'images/Gif_07.gif';
});

prevShow2017Link.addEventListener('mouseout', function() {
//    prevShow2017.style.backgroundColor = 'rgb(150, 150, 150)';
    img2017.src = 'images/DSC_1256-480x325.jpg';
});

prevShow2016Link.addEventListener('mouseover', function() {
    prevShow2016.style.backgroundColor = 'green';
});

prevShow2016Link.addEventListener('mouseout', function() {
    prevShow2016.style.backgroundColor = 'rgb(190, 190, 190)';
});

prevShow2015Link.addEventListener('mouseover', function() {
    prevShow2015.style.backgroundColor = 'orange';
});

prevShow2015Link.addEventListener('mouseout', function() {
    prevShow2015.style.backgroundColor = 'rgb(220, 220, 220)';
});