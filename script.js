document.getElementById("see-more").addEventListener("click", function() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
});

const api1 = document.getElementById('api1');
const api2 = document.getElementById('api2');
const api1button = document.getElementById('api1button');
const api2button = document.getElementById('api2button');

api1button.addEventListener('click', getResult1);
api2button.addEventListener('click', getResult2);

function getResult1() {
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => {
        api1.innerHTML = `<img src="${data.image}" alt="Random Fox" width="350"/>`;
    })

}

function getResult2() {
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        api2.innerHTML = `<img src="${data.url}" alt="Random Dog" width="350"/>`;
    })
  
}

$(document).ready(function(){
    var showHeaderAt = 150;
    var win = $(window),
            body = $('body');

    if(win.width() > 400){
        win.on('scroll', function(e){
            if(win.scrollTop() > showHeaderAt) {
                body.addClass('fixed');
            }
            else {
                body.removeClass('fixed');
            }
        });
    }
});