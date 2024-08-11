

// detecting button press
var numberOfDrum = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrum;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function (){//this is Anonymous  function
        
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
    });
}

// inorder to detecting key press event
document.addEventListener("keypress", function(event){

    makeSound(event.key);
    
    buttonAnimation(event.key);
    

});


function makeSound(key){
    
    switch (key) {
        case "w":
            var w = new Audio('sounds/tom-4.mp3');
            w.play()
            break;
        case "a":
            var a = new Audio('sounds/tom-3.mp3');
            a.play()
            break;
        case "s":
            var s = new Audio('sounds/tom-2.mp3');
            s.play()
            break;
        case "d":
            var d = new Audio('sounds/tom-1.mp3');
            d.play()
            break;
        case "j":
            var j = new Audio('sounds/crash.mp3');
            j.play()
            break;
        case "k":
            var k = new Audio('sounds/kick-bass.mp3');
            k.play()
            break;
        case "l":
            var l = new Audio('sounds/snare.mp3');
            l.play()
            break;
        
    
        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}