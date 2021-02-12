$(document).ready(function() {
    /* Hier der jQuery-Code */

});

/* animates navbar */
$('.navTrigger').click(function() {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


/* Bice cracking noises*/
var icesound = document.getElementById("icesound");

/* background music loops in the background*/
document.getElementById("backgroundmusic").loop = true;




/*trying to create an array that loops through each audiofile when touching a ice img
var audio = new Audio(),
    i = 0;
var playlist = new Array('http://www.w3schools.com/htmL/horse.mp3', 'http://demos.w3avenue.com/html5-unleashed-tips-tricks-and-techniques/demo-audio.mp3');

audio.addEventListener('ended', function() {
    i = ++i < playlist.length ? i : 0;
    console.log(i)
    audio.src = playlist[i];
    audio.play();
}, true);
audio.volume = 0.3;
audio.loop = false;
audio.src = playlist[0];
audio.play();
*/



//create array with all elements you want to move
let elements = document.getElementsByClassName('element');


//cycle through all of the elements in the array
for (let i = 0; i < elements.length; i++) {


    //on mouseenter, add class that moves elements to their final position
    elements[i].onmouseenter = function() {
        this.classList.add('position-' + i);
        icesound.play();
    }
}

// function that randomizes the shape's position
function randomizeShapes() {
    console.log('randomize shapes!');
    for (let i = 0; i < elements.length; i++) {

        elements[i].classList.remove('position-' + i);

        //generate a random number for the top and left margins
        rndTop = Math.floor(Math.random() * 70);
        rndLeft = Math.floor(Math.random() * 70);

        //give each element a random position
        elements[i].style.top = rndTop + 'vh';
        elements[i].style.left = rndLeft + 'vw';
        elements[i].style.transform = 'rotate(200grad)';
    }
}

randomizeShapes();


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

//example of another solution maybe for later?
/*<script>
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
</script>
*/