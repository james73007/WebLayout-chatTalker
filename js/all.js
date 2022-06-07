$(document).ready( function() {
    console.log('hi jquery');
    
    // $('.btn').click(function(e){
    //     $(this).addClass("active").siblings().removeClass("active");
    // })
    $(".btn").on( "click", function() {
        $(this).addClass("active")
        console.log( $(this).parent() )
    });
    $('.js-btn-version').click(function(e){
        e.preventDefault();
        $('.js-btn-version').text('立即體驗');
    })
}) 