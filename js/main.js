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

// const form = document.querySelector(".contact__form");
// const name_input = document.getElementById("name-input");
// const error_name = document.querySelector(".contact__validate-error-name");
// const email_input = document.getElementById("email-input");
// const error_email = document.querySelector(".contact__validate-error-email");

// email_input.addEventListener("invalid", (event)=>{
//     event.preventDefault();
// })

// const validateEmail = (email) => {
//     return String(email)
//     .toLowerCase()
//     .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

// form.addEventListener("submit", (event) =>{
//     if (name_input.value == null || name_input.value == ""){
//         event.preventDefault();
//         error_name.classList.add("contact__validate-error-visible")
//         error_name.innerHTML = 'Заполните Имя';
//         name_input.classList.add("contact__form-input__invalid")
//     }
//     else if (!/^[a-zA-Z]*$/g.test(name_input.value)) {
//         event.preventDefault();
//         error_name.classList.add("contact__validate-error-visible")
//         error_name.innerHTML = 'Недопустимый формат';
//         name_input.classList.add("contact__form-input__invalid")
//     }
//     else{
//         error_name.classList.remove("contact__validate-error-visible")
//         name_input.classList.remove("contact__form-input__invalid")
//     }
    
//     if (email_input.value == null || email_input.value == ""){
//         event.preventDefault();
//         error_email.classList.add("contact__validate-error-visible")
//         error_email.innerHTML = 'Заполните Email';
//         email_input.classList.add("contact__form-input__invalid")
//     }
//     else{
//         error_email.classList.remove("contact__validate-error-visible")
//         email_input.classList.remove("contact__form-input__invalid")
//     }

//     if (!validateEmail(email_input.value)){
//         event.preventDefault();
//         error_email.classList.add("contact__validate-error-visible")
//         error_email.innerHTML = 'Недопустимый Email';
//         email_input.classList.add("contact__form-input__invalid")
//         console.log()
//     }
//     else{
//         error_email.classList.remove("contact__validate-error-visible")
//         email_input.classList.remove("contact__form-input__invalid")
//     }
// });
