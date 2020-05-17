$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 4000} );
    
    $('#exp').click(function(){
        $('#modal1').modal('show');
    });

    $('#exp2').click(function(){
        $('#modal2').modal('show');
    });
});