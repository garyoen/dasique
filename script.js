$(function(){
  setInterval(function(){
    $(".imgs").animate({"left":"-1900px"},500,function(){
      $(this).append($(".imgs > li:first")).css("left",0);
    });
  },3000)

  $(".eventBtn > button").click(function(){
    $(".eventBtn > button").removeClass("on");
    $(this).addClass("on");

    var i = $(this).index();
    $(".eventGroup > div").removeClass("on").eq(i).addClass("on");
  });

  //newitem
  var leng = $(".newitems").length-1;

  function left(n,i){
    if($(".newitems").is(":animated")) return false;
    $(".newitems").eq(n).css("left","100%").addClass("on").animate({"left":0},600);

    $(".newitems").eq(i).animate({"left":"-100%"},600,function(){
      $(this).removeClass("on").css("left",0);
    });

    $(".dot > li").removeClass("on").eq(n).addClass("on");
  }

  $(".next").click(function(){
    var now = $(".dot > li.on")
    var i = now.index();

    var n = now.next().index();
    console.log(i,n)
    if(i != leng){
      left(n,i);
    }else{
      left(0,i);
    }
  });

  function right(n,i){
    if($(".newitems").is(":animated")) return false;
    $(".newitems").eq(n).css("left","-100%").addClass("on").animate({"left":0},600);

    $(".newitems").eq(i).animate({"left":"100%"},600,function(){
      $(this).removeClass("on").css("left",0);
    });

    $(".dot > li").removeClass("on").eq(n).addClass("on");
  }

  $(".prev").click(function(){
    var now = $(".dot > li.on")
    var i = now.index();
    var p = now.prev().index();
    if(i != 0){
      right(p,i); 
    }else{
      right(leng,i);
    }
  });

  //닷버튼
  $(".dot > li").click(function(){
    var th = $(this).attr("class");
    if(th != "on"){
      var i = $(".dot > li.on").index();
      var n = $(this).index();
      if(i < n){ 
        left(n,i);
      }else{
        right(n,i)
      }
    }
  })
});

