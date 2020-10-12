let carousel = {
    index: 0,
    nextScreen: function () {
        if (this.index < this.indexMax()) {
            this.index++;
        } else if (this.index === this.indexMax()) {
            this.index = 0;
        }
        return this.updateScreen();
    },
    prevScreen: function () {
        if (this.index > 0) {
            this.index--;
        }
        else if (this.index === 0) {
            this.index = this.indexMax();
        }
        
        return this.updateScreen();

    },
    updateScreen: function () {
        this.reset();
        this.goTo(this.index);
        this.getTextHeight();
        return;
    },
    getTextHeight: function () {
        let textSlide = document.querySelectorAll('.text-slide');
        let textHeight;
        for (let i = 0; i < textSlide.length; i++) {
            if (textSlide[i].classList.contains('active')) {
                textHeight = textSlide[i].clientHeight;
            } 
        }
        return this.applyHeight(textHeight);
    },
    applyHeight: function (textHeight) {
        document.querySelector('.text__wrapper').style.height = `${textHeight}px`;
    },
    goTo: function (index) {
        document.querySelectorAll('.img-slide')[index].classList.add('active');
        document.querySelectorAll('.text-slide')[index].classList.add('active');
        return;
    },
    reset: function () {
        let slides = document.querySelectorAll('.img-slide, .text-slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        return;
    },
    indexMax: function () {
        return document.querySelectorAll('.img-slide').length - 1;
    },
} //end

document.querySelector('.btn--prev').addEventListener('click', function () {
    console.log('prev');
    return carousel.prevScreen();
});

document.querySelector('.btn--next').addEventListener('click', function () {
    console.log('next');
    return carousel.nextScreen();
});

var computedFontSize = window.getComputedStyle(document.getElementById("foo")).fontSize;

console.log(computedFontSize);






