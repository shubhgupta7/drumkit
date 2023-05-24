for( var i=0; i<7; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var alpha = this.innerHTML;
    MakeSound(alpha);
   
});
}

document.addEventListener("keypress", function(event)
{
    MakeSound(event.key);
}
);

function MakeSound(key) {

    switch (key) {
        case "w" :
            //  this.style.color="white";
             var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
        
            break;
         

        case "a":
            
            // this.style.color="lightgreen";
             var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
             break;


        case "s":
            // this.style.color="powderblue";
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;


        case "d":
            // this.style.color="pink";
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            // this.style.color="maroon";
            var sprane = new Audio("sounds/snare.mp3");
            sprane.play();
            break;

        case "k":
            // this.style.color="blue";
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            // this.style.color="orange";
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;    
            
        default: console.log(alpha);
        break;
    }

}
