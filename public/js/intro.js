let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logook = document.querySelector('.logo-ok');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.remove('fade');
                }, (idx + 1) * 50)
            })
        }, 4700);

        setTimeout(()=> {
            intro.style.top = '-100vh';
        }, 5000)
    })
})