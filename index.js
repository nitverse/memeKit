var clickNums = document.querySelectorAll(".drum").length;

for (var i = 0; i < clickNums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttonih = this.innerHTML;

    buttonAnimation(buttonih);

    switch (buttonih) {
      case "w":
        var audio1 = new Audio("audio-1.mp3");
        audio1.play();
        break;
      case "a":
        var audio2 = new Audio("audio-2.mp3");
        audio2.play();
        break;
      case "s":
        var audio3 = new Audio("audio-3.mp3");
        audio3.play();
        break;
      case "d":
        var audio4 = new Audio("audio-4.mp3");
        audio4.play();
        break;
      case "j":
        var audio5 = new Audio("audio-5.mp3");
        audio5.play();
        break;
      case "k":
        var audio6 = new Audio("audio-6.mp3");
        audio6.play();
        break;
      case "l":
        var audio7 = new Audio("audio-7.mp3");
        audio7.play();
        break;

      default:  console.log()

    }
  });
}


function buttonAnimation(buttonih){

    var activeButton = document.querySelector("." + buttonih)

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 200)
}