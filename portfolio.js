// Greeting based on time
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) {
     greeting.innerText = "Good Morning!";
} else if (hour < 18) {
     greeting.innerText = "Good Afternoon!";
} else {
     greeting.innerText = "Good Evening!";
}

// Back to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          topBtn.style.display = "block";
     } else {
          topBtn.style.display = "none";
     }
}

function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
}
