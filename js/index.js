$("header").slideDown(2000)
// $(".home1").slideDown(2000).css("display", "flex", function(){
//     $(".home1 .title h1").slideDown(2000)
// })
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
$(".Menu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
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





















// $(".section").animate({width: "100%"},2500)
// $("section").animate({height:"100vh"},2500, function(){
//     $(".title").slideDown(2500, function(){
//         $(".cards").slideDown(2500)
//     })
    
    
    
// })
























// $(".section").animate({width: "100%"}, 2000)
// $(".section").animate({height: "100vh"}, 2000)









// let prices =[10,50,90,100,120,150,200];
// prices.filter((price) => price>50)

// let newP = prices.filter((price) => price>50).map((price) => price+=10)

// console.log(newP);
// prices.push(...newP)
// console.log(prices);

// let sum =prices.reduce((total, price) => total+price )
// console.log(sum);




// class User{
//     constructor(uName, uAge , uSalary){
//         this.name = uName;
//         this.age = uAge;
//         this.salary = uSalary;

//     }
//     welcome(){
//         console.log(`Welcome ${this.name}`);
//     }
// }

// class Admin extends User{
//     constructor(name, age, salary, isAdmin){
//         super(name, age, salary);
//         this.isAdmin = isAdmin;
//     }
//     deleteAccount(){
//         console.log("Account deleted successfully");
//     }
// }



// let mario = new User("Mario", 29 , 5000)

// mario.welcome();

// function User(uName,uAge, uSalary ) {
//     this.name = uName;
//     this.age = uAge;
//     this.uSalary = uSalary;
    
// }
// User.prototype.Login = function(userName, password){
//     console.log("Welcome");
// }
// let mario = new User("Mario", 24 , 3000)
// console.log(mario);
// mario.Login();
/* 1- program that allow to user enter number then print it */

/*var x =Number(window.prompt("Enter a Number"));
console.log(x)*/

/************************************************************************************/

/* 2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no */

/*var x = Number(window.prompt("Enter a Number"));
if(x%3==0 && x%4==0){
    console.log("Yes");
}
else{
    console.log("No");
}*/

/************************************************************************************/

/*3- Write a program that allows the user to insert 2 integers then print the max */
/*var x = Number(window.prompt("Enter 2 Numbers to get the Max and Min"));
var y = Number(window.prompt("Enter 2 Numbers to get the Max and Min"));

if(x>y){
    console.log(x);
}
else if(y>x){
    console.log(y);
}
else{
    console.log("The two numbers are equal");
}*/

/************************************************************************************/

/*4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive. */
/*var x = Number(window.prompt("Enter a Number to check"));

if(x>0){
    console.log("Positive");
}
else if(x<0){
    console.log("Negative");

}
else{
    console.log("Number is Zero")
}*/

/************************************************************************************/
/*5- Write a program that take 3 integers from user then print the max element
and the min element. */

/*var x = Number(window.prompt("Enter 3 Numbers to get the Max"));
var y = Number(window.prompt("Enter 3 Numbers to get the Max"));
var z = Number(window.prompt("Enter 3 Numbers to get the Max"));

var max = 0;
var min = 0;

if(x>y && x>z){
    max = x;
}
else if(y>x && y>z){
    max = y;

}
else if(z>x && z>y){
    max = z;
}
console.log(max)

if(x<y && x<z){
    min = x;
}
else if(y<x && y<z){
    min = y;

}
else if(z<x && z<y){
    min = z;
}
console.log(min)*/

/* I think there is another way to do it but I can't remember it :) */

/************************************************************************************/

/*6- Write a program that allows the user to insert integer number then
check If a number is oven or odd */
/*var x = Number(window.prompt("Enter a Number to check"));
if(x%2==0){
    console.log("Number is Even");

}
else{
    console.log("Number is Odd");
}*/

/************************************************************************************/
/*7 in not available */

/************************************************************************************/

/*8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant */

/*var x = window.prompt("Enter Char to check")
if(x == 'a'||x == 'e'|| x == 'i' || x == 'o'|| x == 'u' || x == 'A' || x == 'E'|| x == 'I' || x == 'O' || x == 'U'){
    console.log("This Char is vowel");

}
else{
    console.log("This Char is consonant");
}*/

/************************************************************************************/

/*9- Write a program that allows user to insert integer then print all numbers between 1 to
that’s number */
/*var x = Number(window.prompt("Enter a Number"));

for(var i = 1;x>=i;i++){
    console.log(i);

}*/
/************************************************************************************/

/*10- Write a program that allows userto insert integerthen print a multiplication table up to 12. */

/*var x = Number(window.prompt("Enter a Number"));

for(var i = 1;i<=12;i++){
    console.log(x+" * "+i,"=",x*i);

}*/

/************************************************************************************/

/* 11- Write a program that allows to user to insertnumber then print all even numbers
between 1 to this number */
/*var x = Number(window.prompt("Enter a Number"));

for(var i = 1;x>=i;i++){
    if(i%2 == 0){
        console.log(i);
    }

}*/

/************************************************************************************/

/*12- Write a program that take two integers then print the power */
/*var x = Number(window.prompt("Enter 2 Number"));
var y = Number(window.prompt("Enter 2 Number"));
console.log(x**y);*/

/************************************************************************************/

/*12-2 Write a program to enter marks of five subjects and calculate total, average and
percentage. */

/*var x = Number(window.prompt("Enter 5 Marks to get Total , Average , and percentage"));
var y = Number(window.prompt("Enter 5 Marks to get Total , Average , and percentage"));
var z = Number(window.prompt("Enter 5 Marks to get Total , Average , and percentage"));
var a = Number(window.prompt("Enter 5 Marks to get Total , Average , and percentage"));
var b = Number(window.prompt("Enter 5 Marks to get Total , Average , and percentage"));

var total = x+y+z+a+b;
var average = total/5;
var percentage = (total/500)*100 ;
console.log("Total = " + total);
console.log("Average = " + average);
console.log("Percentage = " + percentage + "%");*/

/************************************************************************************/

/* 13-Write a program to input month number and print number of days in that
month. */

/*var x = Number(window.prompt("Enter month number from 1 to 12"));
if(x == 4||x == 6|| x == 8 || x == 10){
    console.log("Days in Month: 30");

}
else if(x == 1||x == 3|| x == 5 || x == 7 || x== 9 || x == 11 || x == 12){
    console.log("Days in Month: 31");

}

else{
    console.log("Days in Month: 28");
}*/

/************************************************************************************/

/* 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade*/

/*var x = Number(window.prompt("Enter 5 Marks to get Total and percentage"));
var y = Number(window.prompt("Enter 5 Marks to get Total and percentage"));
var z = Number(window.prompt("Enter 5 Marks to get Total and percentage"));
var a = Number(window.prompt("Enter 5 Marks to get Total and percentage"));
var b = Number(window.prompt("Enter 5 Marks to get Total and percentage"));

var total = x+y+z+a+b;
var percentage = (total/500)*100 ;

if (percentage >= 90) {
    console.log( "Grade A");
}
else if (percentage >= 80) {
    console.log( "Grade B");
}
else if (percentage >= 70) {
    console.log( "Grade C");
}
else if (percentage >= 60) {
    console.log( "Grade D");
}
else if (percentage >= 40) {
    console.log( "Grade E");
}
else {
    console.log( "Grade F");
}*/


/* ******************************** Using switch case******************************* */

/*15- Write a program to print total number of days in month*/
/*var x = Number(window.prompt("Enter month number from 1 to 12"));
switch(x){
    case  x == 4||x == 6|| x == 8 || x == 10:
        console.log("Days in Month: 30");
        break;
    case x == 1||x == 3|| x == 5 || x == 7 || x== 9 || x == 11 || x == 12:
        console.log("Days in Month: 31");
        break;
    default:    
    console.log("Days in Month: 28");     
}*/

/************************************************************************************/
/*16- Write a program to check whether an alphabet is vowel or consonant */
/*var x = window.prompt("Enter Char to check")
switch(x){
    case x == 'a'||x == 'e'|| x == 'i' || x == 'o'|| x == 'u' || x == 'A' || x == 'E'|| x == 'I' || x == 'O' || x == 'U':
    console.log("This Char is vowel");
    break;


    default:
    console.log("This Char is consonant");
    
}*/

/************************************************************************************/


/*17- Write a program to find maximum between two numbers */
/*var x = Number(window.prompt("Enter 2 Numbers to get the Max"));
var y = Number(window.prompt("Enter 2 Numbers to get the Max"));

switch(true){
    case (x>y): 
      console.log(x);
      break;
    case (y>x):
      console.log(y);
      break;
    default:
        console.log("Numbers are equal")  
}*/

/************************************************************************************/

/*18- Write a program to check whether a number is even or odd */

/*var x = Number(window.prompt("Enter a Number to check"));
switch(true){
    case x%2==0:
        console.log("Number is Even");
        break;
    case x%2!=0:
        console.log("Number is Odd");
        break;

}*/

/************************************************************************************/

/*19- Write a program to check whether a number is positive or negative or zero */

/*var x = Number(window.prompt("Enter a Number to check"));
switch(true){
    case x>0:
        console.log("Number is Positive");
        break;
    case x<0:
        console.log("Number is Negative");
        break;
    case x == 0:    
        console.log("Number is Zero");

}*/

/************************************************************************************/

/*20- Write a program to create Simple Calculator */

// var x = Number(window.prompt("Enter first Number"));
// var y = Number(window.prompt("Enter second Number"));

// var sign = window.prompt("Enter a sign according the operation you want to do (+ - * / % ^ )")

// switch(true){
//     case sign == "+":
//         console.log(x+y);
//         break;
//     case sign == "-":
//         console.log(x-y);
//         break;
//     case sign == "*":    
//         console.log(x*y);
//         break;
//     case sign == "/":    
//         console.log(x/y); 
//         break;   
//     case sign == "%":    
//         console.log(x%y); 
//         break;   
//     case sign == "^":    
//         console.log(x**y); 
//         break;   

// }