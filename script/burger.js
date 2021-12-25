$('.burger-button').click(function() {
    $('.burger-nav').addClass('burger-active')
    $('.burger-nav').addClass('shadow')
})

$('.close-burger').click(function() {
    $('.burger-nav').removeClass('burger-active')
    $('.burger-nav').removeClass('shadow')
})