
//LINK CLICK COLOR CHANGE
$(function(){
    $('.link1a').on('click', function(){
        $('#cat1').css({
            background: '#D3D3D3'
        })
    })

    $('.link1b').on('click', function(){
        $('#cat2').css({
            background: '#566add'
        })
    })

    $('.link2').on('click', function(){
        $('#cat2').css({
            background: '#f0e4a0'
        })
    })

    $('.link1c').on('click', function(){
        $('#cat3').css({
            background: '#f0a0ed'
        })
    })
});


