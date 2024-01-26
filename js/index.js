$("header").slideDown(2000)

//css method doesn't take call back function as it's third parameter , that's why  we did the following solutions
$(".home1").slideDown(1500, function () {
    $(this).css("display", "flex");
    $(".home1 .title h1").slideDown(1500);
    $(".home1 .title p").slideDown(1500, function(){
        $(".home2").animate({opacity:"1"}, function(){
            $(".leftMenu").animate({left:'2%'}, 1000)
        })
        
    });
});

$(".navbar").animate({width:"100%"}, 1500, function(){
    $(".navbar .container").animate({opacity: "1"},1500)
})

$(".leftMenu").click(function(){
    $(".menu").animate({ width:'250px'},1000)
    $(".menu ul").animate({ opacity:'1'},1000)
    $(".close").animate({ opacity:'1'},1000)
   $("header").animate({marginLeft :'250px'},1000)
})
$("#close").click(function(){
    $(".menu").animate({ width:'0px'},1000)
    $(".menu ul").animate({ opacity:'0'},1000)
    $(".close").animate({ opacity:'0'},1000)
   $("header").animate({marginLeft :'0px'},1000)
})

// $("#homeLink").click(function(){
//     let hometOffset = $("#header").offset().top;
//     $("html").animate({scrollTop: hometOffset},1000)

// // })
// $("#homeLink").click(function(){
//     let hometOffset = $("#header").offset().top;
//     $("html, body").animate({scrollTop: hometOffset}, 2500);
// });


// $("#detailsLink").click(function(){
//     let detailsOffset = $("#details").offset().top;
//     $("body").animate({scrollTop:detailsOffset},1000)

// })
// $("#dureateLink").click(function(){
//     let durateOffset = $("#durate").offset().top;
//     console.log(durateOffset);
//     $("body").animate({scrollTop:durateOffset},1000)

// })
// $("#contactLink").click(function(){
//     let contactOffset = $("#contact").offset().top;
//     $("body").animate({scrollTop:contactOffset},1000)

// })



// $("#nv").toggle(
//     function(){
//         $("#nv").html("Nav1")
//     },
//     function(){
//         $("#nv").html("Nav2")
//     }
// )


// $(".signer").click(function(){
//     $(".slider").slideDown(1000)
// })

// $('.signer').toggle(function(){
//     $('.signer .slider').next("p").slideUp(500);
//     $(this).next("p").slideDown(500);
// },
// function(){
//     $(this).next("p").slideDown(500);
// }
// );
// $('.signer').click(function(){
//     $('.signer .slider').not($(this).childern("p")).slideDown(500);
//     $(this).childern("p").slideToggle(500);
// });
// $(".signer").click(function(){
//     $(".slider p").animate({opacity: "1"},1000);
//   });

// $(".leftMenu").toggle(
//    function(){ $(".menu").animate({ width:'250px'},1000)
//     $(".menu ul").animate({ opacity:'1'},1000)
//     $(".close").animate({ opacity:'1'},1000)
//    $("header").animate({marginLeft :'250px'},1000)
// },
//    function(){
//     $(".menu").animate({ width:'0px'},1000)
//     $(".menu ul").animate({ opacity:'0'},1000)
//     $(".close").animate({ opacity:'0'},1000)
//    $("header").animate({marginLeft :'0px'},1000)
//    }

// )

// $(".leftMenu").toggle(
//     function() {
//       $(".menu").animate({ width: '250px' }, 1000);
//       $(".menu ul").animate({ opacity: '1' }, 1000);
//       $(".close").animate({ opacity: '1' }, 1000);
//       $("header").animate({ marginLeft: '250px' }, 1000);
//     },
  
//   );

