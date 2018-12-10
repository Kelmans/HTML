$(function () {
    $('.show_popup').click(showPopup);

    $('.popup__close').click(closePopup);

    function showPopup(element){
        var popupWrapper = $(element.target.closest('.link_group')).find('.popup-wrapper')[0];
        $(popupWrapper).addClass("popup__wrapper_flex");

        document.body.style.overflow = 'hidden';

        var width1 = 950;
        var count1 = 1;

        var list1 = popupWrapper.querySelector('ul');
        var listElems1 = popupWrapper.querySelectorAll('li');
        var position1 = 0; // текущий сдвиг влево
        var ck = 1;
        var indexImg = 1;
        var lengthMax = listElems1.length;
        popupWrapper.querySelector('.pre').onclick = function() {


            if(ck <= indexImg){
                position1 = -width1 * (lengthMax-1);
                list1.style.marginLeft = position1 + 'px';
                ck = lengthMax;
            }
            else{
                ck--;
                position1 += width1;
                list1.style.marginLeft = position1 + 'px';
            }
        };
        popupWrapper.querySelector('.nex').onclick = function() {

            if(ck >= lengthMax){
                position1 = 0;
                list1.style.marginLeft = position1 + 'px';
                ck = 1;
            }

            else {position1 -= width1;
                list1.style.marginLeft = position1 + 'px';
                ck++;
            }

        };

    }
    function closePopup(element){
        var closeButton = $(element.target);
        var popupWrapper = closeButton.closest('.popup-wrapper');
        popupWrapper.removeClass("popup__wrapper_flex");
        document.body.style.removeProperty( 'overflow');

    }

    $('.show-more').click(function() {
        $(".otziv").toggleClass('open');
        var text = $('.show-more').val();
        if(text == 'Show More'){
            $('.show-more').val("Show Less");
        }else{
            $('.show-more').val("Show More");
        }
        $(".rilOtzivblur").toggleClass('open_opacity');

    });

    $('.next').click(function(){
        var currentImage = $('.img.curry');
        var currentImageIndex = currentImage.index();
        var nextImageIndex = currentImageIndex+1;
        var nextImage = $('.img').eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');

        if(nextImageIndex == ($('.img:last').index()+1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
        } else{
            nextImage.fadeIn(1000);
            nextImage.addClass('curry');
        }
    });
    $('.prev').click(function(){
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var prevImageIndex = currentImageIndex-1;
        var prevImage = $('.img').eq(prevImageIndex);

        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');
        prevImage.fadeIn(1000);
        prevImage.addClass('curry');
    })

    /* конфигурация */
    var width = 365; // ширина изображения
    var count = 3; // количество изображений

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево

    carousel.querySelector('.prevs').onclick = function() {
        // сдвиг влево
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position + width * count, 0)
        list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.nexts').onclick = function() {
        // сдвиг вправо
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position - width * count, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };
});