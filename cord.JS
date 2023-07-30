let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // 子のスクロール位置で何かを行う
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
