import $ from "jquery";
window.addEventListener("load", () => {
  window.scrollTo(0,0)
  setTimeout(() => {
    $("#opening-body").slideUp();
  }, 5500);
  // const logo = document.querySelectorAll("#logo path")
  // console.log(logo)
  // for(let i =0; i < logo.length; i++) {
  //   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
  // }
});
