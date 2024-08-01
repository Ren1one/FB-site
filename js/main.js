const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    breakpoints: {
        1:{
            slidesPerView: 1,

            pagination: {
                el: '.swiper-pagination',
                type: "bullets",
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        576: {
            slidesPerView: 2,
            pagination: {
                el: '.swiper-pagination',
                type: "bullets",
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        768: {
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                type: "custom",
                renderCustom: function (swiper, current, total) {
                return current + ' из ' + total;
                }
                
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        1024: {
            slidesPerView: 4,
            pagination: {
                el: '.swiper-pagination',
                type: "custom",
                renderCustom: function (swiper, current, total) {
                return current + ' из ' + total;
                }
                
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }
    }
});


// Валидация формы
const validator = new JustValidate('#form');
validator 
    .addField(document.querySelector('#name-input'), [
        {
            rule: 'required',
            errorMessage: 'Введите имя!',
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Слишком короткое',
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: 'Слишком длинное',
        },
        
    ])
    .addField('#email-input', [
        {
            rule: 'required',
            errorMessage: 'Введите Email!',
        },
        {
            rule: 'email',
            errorMessage: 'Введите корректный Email!',
        },
    ])
