window.onscroll = function () { myFunction() };

function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("about").className = "flyinganimated2";
  }
  if (document.documentElement.scrollTop > 1100) {

    document.getElementById("history").className = "flyinganimated";
    document.getElementById("img-ohm").className = "flyinganimated2";
  }
  if (document.documentElement.scrollTop > 1400) {
    document.getElementById("p2").className = "flyinganimated";
    document.getElementById("img-res").className = "flyinganimated2";
  }
  if (document.documentElement.scrollTop > 2500) {
    document.getElementById("heading").className = "flyinganimated2";
    document.getElementById("menu-container").className = "flyinganimated2";
  }
}