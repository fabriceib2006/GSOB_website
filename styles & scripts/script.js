
//counter
document.addEventListener('DOMContentLoaded', function () {
  const counter1 = document.getElementById('counter1Value');
  const counter2 = document.getElementById('counter2Value');
  const counter3 = document.getElementById('counter3Value');
  const counter4 = document.getElementById('counter4Value');

  let count1 = 0;
  let count2 = 0;
  let count3 = -15;
  let count4 = -15;

  const limit1 = 1350; // Limit for Counter 1
  const limit2 = 84; // Limit for Counter 2
  const limit3 = 42; // Limit for Counter 3
  const limit4 = 95; // Limit for Counter 4

  const maxLimit = Math.max(limit1, limit2, limit3, limit4); // Find maximum limit

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const interval = setInterval(function () {
          if (count1 < limit1) {
            count1 += 15;
            counter1.textContent = `${count1}`;
          }
          if (count2 < limit2) {
            count2 += 1;
            counter2.textContent = `${count2}`;
          }
          if (count3 < limit3) {
            count3 += 1;
            counter3.textContent = `${count3}`;
          }
          if (count4 < limit4) {
            count4 += 2;
            counter4.textContent = `${count4}+`;
          }

          if (count1 === maxLimit && count2 === maxLimit && count3 === maxLimit && count4 === maxLimit) {
            clearInterval(interval);
          }
        }, 80);

        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe the counter elements
  [counter1, counter2, counter3, counter4].forEach(counter => {
    observer.observe(counter);
  });
});

//loader
window.addEventListener('load', function () {
  document.querySelector('.loader-wrapper').style.display = 'none';
});

// nav bar js codes
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    x.style.backgroundColor = "#00CED1";
  } else {
    x.className = "topnav";
    x.style.backgroundColor = "#E0FFFF";
  }
}
document.addEventListener("click", function(event) {
  var icon = document.getElementById("icon");
  var responsive = document.getElementsByClassName("responsive")[0];
  
  if (!x.contains(event.target) && !icon.contains(event.target)) {
    responsive.style.display = "none";
  }
});
// contracts on normal screen

var modal = document.getElementById("contacts");
        var btn = document.getElementById("contacts-open");
        var span = document.getElementsByClassName("close")[0];
        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

// contacts on responsive navbar

var modal = document.getElementById("contacts");
var btn = document.getElementById("contact-open");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

   //------------------------- reveal codes ----------------
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll",reveal);

  // --------------responsive navbar--------------

  const menuWrapper = document.getElementById("menuwrapper");
  const menuButton = document.getElementById("menu-button");

  menuButton.addEventListener("click", function() {
    if (menuWrapper.style.display === "none") {
      menuWrapper.style.display = "block";
    } else {
      menuWrapper.style.display = "none";
    }
  });

  document.addEventListener("click", function(event) {
    if (!menuWrapper.contains(event.target) && !menuButton.contains(event.target)) {
      menuWrapper.style.display = "none";
    }
  });
  




