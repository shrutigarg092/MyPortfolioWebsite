$( document ).ready(function(){
  var age = document.querySelector("span#age");
  let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
  if(month>=1){
    if(day==1 && month ==1)
    age.innerText=year-2000;
    else
    age.innerText=year-1999;
  }else{
  age.innerText=year-2000;
  }
  
   $(".dark").on("click", function(){
        $(".dark").on("click", function(){
        $(".col-1").css("background-color", "black");
        $(".row-2").css("background-color", "black");
        $(".row").css("background-color", "black");
        $("h2").css("color", "white");
        $("h1").css("color", "white !important");
        $("p").css("color", "white !important");
        $("h5").css("color", "white");
        $(".about-me-desc").css("color", "white");
        $("#about").css("color", "white");
        $("#skills").css("color", "white");
    });

    $(".light").on("click", function(){
        $(".col-1").css("background-color", "white");
        $(".row-2").css("background-color", "white");
        $(".row").css("background-color", "white");
        $("h2").css("color", "black");
        $("h1").css("color", "black !important");
        $("p").css("color", "black !important");
        $("h5").css("color", "black");
        $(".about-me-desc").css("color", "black");
        $("#about").css("color", "black");
        $("#skills").css("color", "black");
    });
    });
});

