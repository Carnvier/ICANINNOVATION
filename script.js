function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}


function scrollLeft() {
    const container = document.querySelector('.programs-cards');
    container.scrollBy({
        left: -350, // Adjust this value based on your item width
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.querySelector('.programs-cards');
    container.scrollBy({
        left: 350, // Adjust this value based on your item width
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.nav-toggle');
    const navContainer = document.querySelector('.nav-container');

    toggleButton.addEventListener('click', function () {
        navContainer.classList.toggle('active'); // Toggle the active class
    });
});