var count = 0

while(count < document.querySelectorAll("button").length){
    document.querySelectorAll("button")[count].addEventListener("click", click);

    function click(){
        console.log(this.innerHTML)
        outputAudio(this.innerHTML)
        animation(this.innerHTML)

    }
    count = count+1;
}

document.addEventListener("keydown", function(key){
    console.log(key.key)
    outputAudio(key.key)
    animation(key.key)
})
    
function outputAudio(sound){
    switch (sound) {
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
    
        default:
            break;
    }


}
function animation(inputAni) {
    document.querySelector("."+inputAni).classList.add("pressed")

    setTimeout(
        function(){
            document.querySelector("."+inputAni).classList.remove("pressed")
        }, 200)
    
}