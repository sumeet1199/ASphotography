// Animate Smooth Scroll
$('#view-work').on('click',function(){
   const images = $('#images').position().top;
   
   $('html,body').animate(
       {
       scrollTop: images
       },
       900
   );
});

$('#back-to-top').on('click',function (){
    const back = $('#landing-text-inner').position().top;

    $('html,body').animate(
        {
            scrollTop:back
        },
        900
    );
});