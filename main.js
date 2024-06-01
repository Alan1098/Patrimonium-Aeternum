(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();



/*var slideIndex1 = 1;
showSlides(slideIndex1, "slider1");

var slideIndex2 = 1;
showSlides(slideIndex2, "slider2");

var slideIndex3 = 1;
showSlides(slideIndex3, "slider3");

function plusSlides(n, sliderId) {
    if (sliderId === "slider1") {
        showSlides(slideIndex1 += n, sliderId);
    } else if (sliderId === "slider2") {
        showSlides(slideIndex2 += n, sliderId);
        } else if (sliderId === "slider3") {
        showSlides(slideIndex3 += n, sliderId);
    }

}

function currentSlide(n, sliderId) {
    if (sliderId === "slider1") {
        showSlides(slideIndex1 = n, sliderId);
    } else if (sliderId === "slider2") {
        showSlides(slideIndex2 = n, sliderId);
        } else if (sliderId === "slider3") {
        showSlides(slideIndex3 = n, sliderId);
    }

}

function showSlides(n, sliderId) {
    var i;
    var slides = document.getElementById(sliderId).getElementsByClassName("mySlides");
    var dots = document.getElementById(sliderId).getElementsByClassName("dot");

    if (n > slides.length) { n = 1;
        if (sliderId === "slider1") {
            slideIndex1 = 1;
        } else if (sliderId === "slider2") {
            slideIndex2 = 1;
            } else if (sliderId === "slider3") {
            slideIndex3 = 1;
    }

    if (n < 1) { 
        if (sliderId === "slider1") {
            slideIndex1 = slides.length;
        } else if (sliderId === "slider2") {
            slideIndex2 = slides.length;
            } else if (sliderId === "slider3") {
            slideIndex3 = slides.length;
        }

    }   

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
}


}*/

var slideIndex1 = 1;
showSlides(slideIndex1, "slider1");

var slideIndex2 = 1;
showSlides(slideIndex2, "slider2");

var slideIndex3 = 1;
showSlides(slideIndex3, "slider3");

var slideIndex4 = 1;
showSlides(slideIndex4, "slider4");



function plusSlides(n, sliderId) {
    updateSlideIndex(n, sliderId);
    showSlides(getSlideIndex(sliderId), sliderId);
}

function currentSlide(n, sliderId) {
    setSlideIndex(n, sliderId);
    showSlides(getSlideIndex(sliderId), sliderId);
}

function showSlides(n, sliderId) {
    var i;
    var slides = document.getElementById(sliderId).getElementsByClassName("mySlides");
    var dots = document.getElementById(sliderId).getElementsByClassName("dot");

    if (n > slides.length) {
        setSlideIndex(1, sliderId);
    }

    if (n < 1) {
        setSlideIndex(slides.length, sliderId);
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[getSlideIndex(sliderId) - 1].style.display = "block";
    dots[getSlideIndex(sliderId) - 1].className += " active";
}

function updateSlideIndex(delta, sliderId) {
    var currentSlideIndex = getSlideIndex(sliderId);

    if (sliderId === "slider1") {
        slideIndex1 = currentSlideIndex + delta;
    } else if (sliderId === "slider2") {
        slideIndex2 = currentSlideIndex + delta;
    } else if (sliderId === "slider3") {
        slideIndex3 = currentSlideIndex + delta;
    }   else if (sliderId ==="slider4") {
        slideIndex4 = currentSlideIndex + delta;
    }
}

function setSlideIndex(value, sliderId) {
    if (sliderId === "slider1") {
        slideIndex1 = value;
    } else if (sliderId === "slider2") {
        slideIndex2 = value;
    } else if (sliderId === "slider3") {
        slideIndex3 = value;
    } else if(sliderId === "slider4") {
        slideIndex4 = value;
    }
}

function getSlideIndex(sliderId) {
    if (sliderId === "slider1") {
        return slideIndex1;
    } else if (sliderId === "slider2") {
        return slideIndex2;
    } else if (sliderId === "slider3") {
        return slideIndex3;
    } else if(sliderId === "slider4") {
        return slideIndex4;
    }
    }
    



