// https://blog.csdn.net/weixin_33817333/article/details/91437469
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function fn(x, id) {
  var triger = document.getElementById(id);
  if (x == 1) {
    sleep(200).then(() => {
      triger.className = "show_iteam float1";
      triger.style.display = "block";
    });
  } else {
    sleep(500).then(() => {
      triger.className = "show_iteam";
      triger.style.display = "";
    });
  }
}
