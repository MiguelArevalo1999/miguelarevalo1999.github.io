// Wrap every letter in a span
var textWrapper = document.querySelector('.text-uppercase text-white font-weight-bold .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.text-uppercase text-white font-weight-bold .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.text-uppercase text-white font-weight-bold .line',
    translateX: [0, document.querySelector('.text-uppercase text-white font-weight-bold .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.text-uppercase text-white font-weight-bold .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.text-uppercase text-white font-weight-bold',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });