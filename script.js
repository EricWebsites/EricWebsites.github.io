const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing this element once it has intersected
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.section');
hiddenElements.forEach((el) => observer.observe(el));

// const hiddenKPIElements = document.querySelectorAll('.kpi-card');
// hiddenKPIElements.forEach((el) => observer.observe(el));


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => console.log(json))


// // Begin accessing JSON data here
// var data = JSON.parse(this.response)

// if (request.status >= 200 && request.status < 400) {
//   data.forEach((movie) => {
//     console.log(movie.title)
//   })
// } else {
//   console.log('error')
// }



//  _   _   ____  _____             _  _  _      _                        _____               
// | \ | | / ___||_   _|_ __  __ _ (_)| || |__  | |  __ _  ____ ___  _ __|_   _|___  _ __     
// |  \| || |      | | | '__|/ _` || || || '_ \ | | / _` ||_  // _ \| '__| | | / _ \| '_ \    
// | |\  || |___   | | | |  | (_| || || || |_) || || (_| | / /|  __/| |    | ||  __/| | | | _ 
// |_| \_| \____|  |_| |_|   \__,_||_||_||_.__/ |_| \__,_|/___|\___||_|    |_| \___||_| |_|(_)