$(function () {
    $('.show_popup').click(showPopup);
    $('.show-more').click(showMore) ;
    $('.popup__close').click(closePopup);


    function showPopup(element){
        var popupWrapper = $(element.target.closest('.album')).find('.popup-wrapper')[0];
        $(popupWrapper).addClass("popup-wrapper_flex");

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
        popupWrapper.removeClass("popup-wrapper_flex");
        document.body.style.removeProperty( 'overflow');

    }

    function showMore(element){
        $(".comments__repository").toggleClass('open');
        var text = $('.show-more').val();
        if(text == 'Show More'){
            $('.show-more').val("Show Less");
        }else{
            $('.show-more').val("Show More");
        }
        $(".comment__blur").toggleClass('open_opacity');

    };




    var width = 365; // ширина изображения
    var count = 3; // количество изображений

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево

    carousel.querySelector('.previous').onclick = function() {
        // сдвиг влево
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position + width * count, 0)
        list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.following').onclick = function() {
        // сдвиг вправо
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position - width * count, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };


});