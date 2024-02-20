ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});


ScrollReveal().reveal(".fade-in", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",

  scale: 0.4,
  rotate: {
    x: 20,
    z: -10
  }

});


// async function getRandomInspirationQuote() {
//     try {
//         const response = await fetch('https://zenquotes.io/api/random');
//         const data = await response.json();
//         console.log("response: " + JSON.stringify(data));
//         // Extract the random quote and author from the response.
//         const randomQuote = data[0].q;
//         const randomAuthor = data[0].a;

//         // Update the content of the <span> with the quote and author.
//         const rolltext = document.getElementById("rolltext");
//         rolltext.innerHTML = `"${randomQuote}" - ${randomAuthor}`;
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// }
let constrain = 20;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;

  return "perspective(100px) "
    + "   rotateX(" + calcX + "deg) "
    + "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function () {
    transformElement(ex1Layer, position);
  });
};





var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});


var navLink = gsap.utils.toArray(".features-title3"),
  imgWrap = document.querySelector(".img-wrapper"),
  imgItem = document.querySelector(".img-placeholder img");


function moveImg(e) {
  var mouseX = e.clientX,
    mouseY = e.clientY
  t1 = gsap.timeline();
  t1.to(imgWrap, {
    duration: 1,
    x: mouseX,
    y: mouseY,
    ease: Expo.ease
  })
}


function linkHover(e) {
  if (e.type === "mouseenter") {
    var imgSrc = e.target.dataset.src;
    var t1 = gsap.timeline();


    t1.set(imgItem, {
      attr: { src: imgSrc }
    }).to(imgWrap, {
      autoAlpha: 1,
      scale: 2
    });
  } else if (e.type === "mouseleave") {
    var t1 = gsap.timeline();
    t1.to(imgWrap, {
      autoAlpha: 0,
      scale: 0.2
    })
  }

}


function initAnimation() {
  navLink.forEach(link => {
    link.addEventListener('mouseenter', linkHover);
    link.addEventListener('mouseleave', linkHover);
    link.addEventListener('mousemove', moveImg);
  })
}

function init() {
  initAnimation();
}

window.addEventListener("load", function () {
  init();
})

var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});

const msg = document.querySelector(".msg");
const sumbitbtn = document.getElementById("submitbtn");

msg.addEventListener("focus", submsg);

function submsg() {
  sumbitbtn.style.display = "block";
  sumbitbtn.style.animation = "slide 0.5s ease-in-out";
}


/*function() {
	var i = 0;
	setInterval(function() {
		$("#quote-" + i).removeClass("main");
		$("#quote-" + i).addClass("outside");
		i++;
		if(i>1) {
			for(i = 0;) {
				$("#quote" + i).removeClass("outside");
			}
			i = 0;
		}
		$("#quote" + i).addClass("main");
	}, 5000);
});*/




document.addEventListener("DOMContentLoaded", function() {
  const quotes = document.querySelectorAll(".quote");
  let currentQuote = 0;

  function showQuote(index) {
    quotes.forEach((quote, i) => {
      if (i === index) {
        quote.style.display = "block";
      } else {
        quote.style.display = "none";
      }
    });
  }

  function autoSlide() {
    showQuote(currentQuote);
    currentQuote = (currentQuote + 1) % quotes.length;
    setTimeout(autoSlide, 4000); // Change quote every 5 seconds (adjust as needed)
  }

  autoSlide();
});

(function () {
  const birthday = new Date("2023-10-14").getTime();
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Check if it's your birthday
    if (distance < 0) {
      document.getElementById("countdown").style.display = "block";

      // Add your birthday events here
      // const eventsList = document.getElementById("eventsList");
      // eventsList.innerHTML = "<li>Event 1: Event description</li><li>Event 2: Event description</li>";

      clearInterval(x);
    }
  }, 1000);
})();



