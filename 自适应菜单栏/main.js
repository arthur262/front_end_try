window.onload = function () {
  test();
};
window.onresize = function () {
  test();
};

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/* 用于处理menu的逻辑的*/
function test() {
  // sec_nav=document.getElementsByClassName("login_nav")[0].childNodes;
  var mobile = document.getElementById("container_s");
  var web = document.getElementById("container");

  if (document.body.clientWidth < 820) {
    web.style.display = "none";
    mobile.style.display = "grid";
  } else {
    web.style.display = "grid";
    mobile.style.display = "none";
  }
}

/*用于显示悬停 */
function show_iteam(x, id) {
  var triger = document.getElementById(id);
  if (x == 1) {
    triger.className = "show_iteam show_iteam_transition";
    // triger.style.display = "block";
  } else {
    if (triger.mouseover) {
      console.log("yes");
    } else {
      triger.className = "show_iteam";
      // triger.style.display = "";
    }
  }
}

// menu切换用途
var count = 0;
function show() {
  var side = document.getElementById("side");
  count = count + 1;
  if (count % 2 == 1) {
    // open
    document.getElementById("A-contanier").className =
      " A-contanier A-contanier-a";
    document.getElementById("top").className = " top top-a ";
    document.getElementById("bottom").className = " bottom bottom-a ";
    side.style.display = "block";
    side.className = "side side-in";
    setTimeout(function () {
      document.getElementById("A-contanier").className = " A-contanier";
      document.getElementById("top").className = "top-a-s ";
      document.getElementById("bottom").className = "bottom-a-s ";
    }, "1000");
    
  } else {
    //close
    document.getElementById("A-contanier").className =
      "  A-contanier-b A-contanier";
    document.getElementById("top").className = "  top-b top-a-s";
    document.getElementById("bottom").className = "  bottom-b bottom-a-s";
    count = 0;
    side.className = "side side-out";
    setTimeout(function () {
      side.style.display = "none";
    }, 1500);
  }
}
