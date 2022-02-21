function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

window.onload = function(){
}
window.onresize=function(){
  var nav= document.getElementById("main_nav");
  var sec_nav=document.getElementById("sec_menu");
  if(document.body.clientWidth<820){
    nav.style.width="50%";
    nav.style.opacity="0";
    sec_nav.style.display="block";
  }else{
    sec_nav.style.display="none";
    nav.style.opacity="1";
  }
}



/*用于显示悬停 */
function show_iteam(x, id) {
  var triger = document.getElementById(id);
  if (x == 1) {
    sleep(500).then(() => {
      triger.className = "show_iteam show_iteam_transition";
      triger.style.display = "block";
    });
  } else {
    if (triger.mouseover) {
      console.log("yes");
    } else {
      sleep(500).then(() => {
        triger.className = "show_iteam";
        triger.style.display = "";
      });
    }
  }
}

// menu切换用途
var count = 0;
function show() {
  count = count + 1;
  if (count % 2 == 1) {
    document.getElementById("A-contanier").className =
      " A-contanier A-contanier-a";
    document.getElementById("top").className = " top top-a ";
    document.getElementById("bottom").className = " bottom bottom-a ";
    setTimeout(function () {
      document.getElementById("A-contanier").className = " A-contanier";
      document.getElementById("top").className = "top-a-s ";
      document.getElementById("bottom").className = "bottom-a-s ";
    }, "1000");
  } else {
    document.getElementById("A-contanier").className =
      "  A-contanier-b A-contanier";
    document.getElementById("top").className = "  top-b top-a-s";
    document.getElementById("bottom").className = "  bottom-b bottom-a-s";
    count = 0;
  }
}
