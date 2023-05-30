gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}



function playMusic(volume) {
      var audio = document.getElementById("music");
      audio.volume = volume;
      audio.play();
      hidePopup();
      alert("Музика включена!");
    }
    
    function openPageWithoutMusic() {
      hidePopup();
      alert("Музика вимкнена!");
    }
    
    function hidePopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "none";
    }
    
    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");
    var volumeSlider = document.getElementById("volumeSlider");
    
    yesButton.addEventListener("click", function() {
      var volume = volumeSlider.value / 100;
      playMusic(volume);
    });
    
    noButton.addEventListener("click", openPageWithoutMusic);



var typedTextSpan = document.querySelector('.typed-text');
var cursorSpan = document.querySelector('.cursor');

var textArray = ["Fucking meme story", "Crazy community", "Token in the BSC network", "The world's first fairy token"];
var typingDelay = 100;
var erasingDelay = 50;
var newTextDelay = 2000;
var textArrayIndex = 0;
var charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing')) {
      cursorSpan.classList.add('typing');
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing')) {
      cursorSpan.classList.add('typing');
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length) {
    setTimeout(type, newTextDelay + 250);
  }
});


