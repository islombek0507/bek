const BurgerTogler = document.querySelector(".header__btn");
const Navigatsion = document.querySelector(".header__nav");
const Textss = document.querySelector(".faq__btn");
const Strilka = document.querySelector(".faq__text");
// const button2 = document.querySelector(".faq__btn2");
const NewYork = document.querySelector(".location__btn--new");
const NewMap = document.querySelector(".location__map--newyork");
const London = document.querySelector(".location__btn--lon");
const LonMap = document.querySelector(".location__map--london");

BurgerTogler.addEventListener("click", function() {
    if(!BurgerTogler.classList.contains("header__btn--open")){

        BurgerTogler.classList.add("header__btn--open");
        Navigatsion.classList.add("header__nav--open");
    }else{
        BurgerTogler.classList.remove("header__btn--open");
        Navigatsion.classList.add("header__nav--closing");
    }

});
Navigatsion.addEventListener("animationend", function(evt){
    if(evt.animationName==="close"){
        
        Navigatsion.classList.remove("header__nav--open");
        Navigatsion.classList.remove("header__nav--closing");
    }
});


Textss.addEventListener("click", function() {
    if(!Textss.classList.contains("faq__btn--open")){
        Textss.classList.add("faq__btn--open");
   Strilka.classList.add("faq__text--open");
    }
    else{
        Textss.classList.remove("faq__btn--open");
        Strilka.classList.remove("faq__text--open");
    }
});
Navigatsion.addEventListener("animationend", function(evt){
    if(evt.animationName==="close"){
        
        Strilka.classList.remove("faq__btn--open");
        Strilka.classList.remove("faq__text--open");
    }
});
// NewYork.addEventListener("click", function() {
//     if(!NewMap.classList.contains("location__map--newyork-open")){
//         NewMap.classList.add("location__map--newyork-open");
//     }else{
//         NewMap.classList.remove("location__map--newyork-open");
//     }
// }
// );
// London.addEventListener("click", function(){
//     if(!LonMap.classList.contains("location__map--london-open")){
//         LonMap.classList.add("location__map--london-open");
//     }else{
//         LonMap.classList.remove("location__map--london-open");
//     }
// });