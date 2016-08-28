function swiper1(){
    var swiper = new Swiper('.swiper-container',{
        spaceBetween: 20,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',  //生成小圆点
        paginationClickable: true, //允许圆点点击
        loop:true,
        mousewheelControl: true,
        keyboardControl: true,
        effect: 'cube',
        direction: 'vertical'
    });
}
            