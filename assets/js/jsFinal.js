$(document).ready(function(){

     var thansgivingItems = ["Potatoes", "Vegtables", "Stuffing"];
      for (var i = 0; i < thansgivingItems.length; i++) {
        console.log(thansgivingItems[i]);
      }
      var randomPick = Math.floor(Math.random() * 3);
      console.log("And the best thanksgiving food category award goes to: " + thansgivingItems[randomPick] );


     console.log("test");


   //$("#step1info").hide();
  $(".stepsinfo").hide();
  $(".Potato").hide();

  $(".step1").click(function(){
      $(".Potato").slideToggle(1000);
     }); //close  step1 click

  $(".Potato").mouseover(function(){
  $(".Potato").css("background-color", "#FFFAC0");
  });

  $(".Potato").mouseleave(function(){
  $(".Potato").css("background-color", "white");
  });


$(".stepsinfo").hide();
  $(".Veggies").hide();

  $(".step2").click(function(){
      $(".Veggies").slideToggle(1000);
     }); //close  step2 click

  $(".Veggies").mouseover(function(){
    $(".Veggies").css("background-color", "#FFFAC0");
  });

  $(".Veggies").mouseleave(function(){
  $(".Veggies").css("background-color", "white");
  });


 $(".stepsinfo").hide();
  $(".Stuff").hide();

  $(".step3").click(function(){
      $(".Stuff").slideToggle(1000);
     }); //close  step3 click

  $(".Stuff").mouseover(function(){
  $(".Stuff").css("background-color", "#FFFAC0");
  });

  $(".Stuff").mouseleave(function(){
  $(".Stuff").css("background-color", "white");
  });


 $("#click-me").on("click", function() {
        alert("Hope you enjoyed learning these recipes!");
      });


var dateView = false;


  $("button").click(function(){

    if(dateView == false){
      $(".demo").html(Date() );
        dateView = true;  
    }
    else{
      $(".demo").html("");
      dateView = false;   
    }
  });


  }); //close ready

