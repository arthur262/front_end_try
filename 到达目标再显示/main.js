
var banner = document.getElementById("banner");



document.addEventListener("scroll", function () {
  isInViewPortOfOne(banner);
});



/*
“JavaScript判断元素是否在工作窗口内,” JavaScript判断元素是否在工作窗口内_baidu_33548663的博客-CSDN博客. [Online]. 
Available: https://blog.csdn.net/baidu_33548663/article/details/88182671?spm=1001.2101.3001.6650.2&amp;utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~HighlightScore-2.queryctrv2&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~HighlightScore-2.queryctrv2&amp;utm_relevant_index=5. [Accessed: 28-Feb-2022]. 
*/
function isInViewPortOfOne(el) {
  const viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight; //窗口可视高度


  const offsetTop = el.offsetTop; //元素顶部高度
  const offsetHeight = el.offsetHeight; //元素高度
  const scrollTop = document.documentElement.scrollTop; //滚动距离
  //判断是否在工作窗口内
  if (
    scrollTop > offsetTop * 1.1 &&
    scrollTop < offsetTop * 1.1 + offsetHeight
  ) {
    console.log("i can see you");
  } else {
  }
}
