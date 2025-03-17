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
const api3 = document.getElementById('api3');
const api3button = document.getElementById('api3button');

api1button.addEventListener('click', getResult1);
api2button.addEventListener('click', getResult2);
api3button.addEventListener('click', getResult3);

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

function getResult3() {
    fetch('https://wizard-world-api.herokuapp.com/Wizards')
    .then(res => res.json())
    .then(data => {
        // Get a random wizard from the array
        const randomWizard = data[Math.floor(Math.random() * data.length)];
        
        // Create a formatted display of wizard information
        const wizardInfo = `
            <div class="wizard-info">
                <h3>${randomWizard.firstName} ${randomWizard.lastName}</h3>
                ${randomWizard.elixirs && randomWizard.elixirs.length > 0 ? 
                    `<p><strong>Known Elixirs:</strong> ${randomWizard.elixirs.map(e => e.name).join(', ')}</p>` : 
                    '<p>No known elixirs</p>'
                }
            </div>
        `;
        
        api3.innerHTML = wizardInfo;
    })
    .catch(error => {
        api3.innerHTML = 'Sorry, there was an error fetching wizard information. Please try again.';
        console.error('Error:', error);
    });
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