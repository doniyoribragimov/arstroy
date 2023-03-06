$(document).ready(function(){

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
            $('.completed').addClass('active')
            $('.modal').removeClass('active')
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


    $('.completed__btn').on('click', function(){
        $('.completed').removeClass('active')
    })

    $('.examples__slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: `<button class="slick-arrow slick-prev"><img src="images/chevron-left.svg" alt="slick arrow"></button>`,
        nextArrow: `<button class="slick-arrow slick-next"><img src="images/chevron-right.svg" alt="slick arrow"></button>`,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },

            {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  dotsClass: 'examples__circles',
                  arrows: false,
                  autoplay: true,
                  speed: 1000,
                  autoplaySpeed: 4000
                }
              },
        ]
    })


    $('.examples__images').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        dotsClass: 'examples__dots',
        speed: 1000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    autoplay: false
                }
            }
        ]

    })

    $('.sertificate__slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: `<button class="slick-arrow slick-prev"><img src="images/chevron-left.svg" alt="slick arrow"></button>`,
        nextArrow: `<button class="slick-arrow slick-next"><img src="images/chevron-right.svg" alt="slick arrow"></button>`,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    dotsClass: 'sertificate__dots'
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    dotsClass: 'sertificate__dots'

                }
            },


        ]
    })

    $('.clients__inner').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: `<button class="slick-arrow slick-prev"><img src="images/chevron-left.svg" alt="slick arrow"></button>`,
        nextArrow: `<button class="slick-arrow slick-next"><img src="images/chevron-right.svg" alt="slick arrow"></button>`,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    dotsClass: 'clients__dots'
                }
            },

        ]
    })

    // ACCORDRION

    $('.questions__title').on('click', function(){
        $(this).siblings().toggleClass('active')
        $(this).toggleClass('active')
    })

    // scroll header

    $(window).on('scroll', function(e){
        let scrollVal = $(window).scrollTop();

        if(scrollVal >= 500){
            $('.upbtn').addClass('active')
        } else{
            $('.upbtn').removeClass('active')
        }

    })

    $('.sidebar__link').on('click', function(){
        $('.sidebar').removeClass('active')
    })

    // MODALS

    $('.learn-modal, .price-modal, .consult-modal, .sum-modal').on('click', function(e){
        e.preventDefault();
        $('.modal').addClass('active')
    })

    $('#confidential').on('click', function(e){
        e.preventDefault();
        $('.modal-text_confa').addClass('active')
    })

    $('#oferta').on('click', function(e){
        e.preventDefault();
        $('.modal-text_oferta').addClass('active')
    })

    $('.modal-text__close').on('click', function(e){
        e.preventDefault();
        $('.modal-text').removeClass('active')
    })


    $('.feedback').on('click', function(e){
        e.preventDefault();
        $('.modal').addClass('active')
    })

    
    $('.call-modal').on('click', function(e){
        e.preventDefault();
        $('.modal').addClass('active')
    })


    $('.completed__close').on('click', function(e){
        e.preventDefault();
        $('.completed').removeClass('active')
    })


    $('.modal__close').on('click', function(e){
        e.preventDefault();
        $('.modal').removeClass('active')
    })

    // SIDEBAR

    $('.menu-btn').on('click', function(e){
        e.preventDefault();
        $('.sidebar').addClass('active')
    })

    $('.sidebar__close').on('click', function(e){
        e.preventDefault();
        $('.sidebar').removeClass('active')
    })

    $('.completed__btn').on('click', function(e){
        e.preventDefault();
        $('.modal').removeClass('active')
    })

    // PRICE CHANGE

    let priceContent = [
        'Формируют верхний слой дорожного полотна',
        'Как правило крупнозернистый асфальт используют для формирования нижних слоёв асфальта',
        'Ямочный ремонт заключается в удалении и замене материала выбоин на проезжей части.',
        'Oтмостки частных домов, полы в производственных сооружениях промышленности, укладка тротуаров и велодорожек'
    ];

    let addBtn = $('.price__take');
    let takeBtn = $('.price__add');

   

    let minRange = $('.price__ranges').attr('data-min') * 1;
    let maxRange = $('.price__ranges').attr('data-max') * 1;
    // count up
    let rubles = $('.price__item.active .price__rubles span').text() * 1;
    let overall = $('.price__overall span');
    let quarterVal = 0
    let rangeVal = 5;

    let quarterView = $('.price__badge span');
    $('.price__ranges').slider({
        value: 5,
        min: minRange,
        max: maxRange,
        step: 10,
        change: function(e, ui){
            quarterVal = ui.value;
            rangeVal = ui.value;
            quarterView.text(quarterVal)
        overall.text(rubles * quarterVal)

        }
    });


    addBtn.on('click', function(){
        rangeVal -= 50
        $('.price__ranges').slider({
            value: rangeVal,
        });
    })

    takeBtn.on('click', function(){
        rangeVal += 50
        $('.price__ranges').slider({
            value: rangeVal,
        });
        
    })
    
    $('.overall').text(rangeVal * rubles)

    let pricePresent = $('.price__present')
    let pricePresentText = $('.price__present span')

    $('.price__item').on('click', function(){
        rubles = $(this).find('.price__rubles span').text() * 1


        $('.overall').text(rangeVal * rubles)
        $('.price__item').removeClass('active')
        $(this).addClass('active');


        if($('#price1').hasClass('active')){
            pricePresentText.text(priceContent[0])
            pricePresent.css('background-image', 'url(images/price-1.png)')
        }

        if($('#price2').hasClass('active')){
            pricePresentText.text(priceContent[1])
            pricePresent.css('background-image', 'url(images/price-2.png)')
        }

        if($('#price3').hasClass('active')){
            pricePresentText.text(priceContent[2])
            pricePresent.css('background-image', 'url(images/price-3.png)')
        }

        if($('#price4').hasClass('active')){
            pricePresentText.text(priceContent[3])
            pricePresent.css('background-image', 'url(images/price-4.png)')
        }
    })

        if($(window).width() <= 1000){
            $('.services__content').slick({
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                dotsClass: 'services__dots',
                mobileFirst: true
            })
        } 
        else if($(window).width() >= 1000){
            $('.services__content').slick('unslick')
        }


});


let buyCheck = document.querySelector('.buy__accept input')
let buyBtn = document.querySelector('.buy__form .btn')

let contactCheck = document.querySelector('.waiting .form__check input')
let contactBtn = document.querySelector('.waiting .btn')

let modalCheck = document.querySelector('.modal .form__check input')
let modalBtn = document.querySelector('.modal .btn')


function disableBtn(btn, checkbox){
    if(checkbox.checked){
        btn.removeAttribute('disabled')
    } else{
        btn.setAttribute('disabled', 'disabled')
    }
    checkbox.addEventListener('change', function(){
        if(checkbox.checked){
            btn.removeAttribute('disabled')
        } else{
            btn.setAttribute('disabled', 'disabled')
        }
    })
    
}

disableBtn(buyBtn, buyCheck)
disableBtn(contactBtn, contactCheck)
disableBtn(modalBtn, modalCheck)
