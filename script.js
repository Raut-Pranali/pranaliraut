const button = document.querySelectorAll(".box"); 
const body = document.querySelector("body");

button.forEach(function(box) {
    box.addEventListener('click', function(color) {
        if (color.target.id === 'box1') {
            body.style.backgroundColor = "#f38650"; 
        }

        if (color.target.id === 'box2') {
            body.style.backgroundColor = "#f87650";
        }

        if (color.target.id === 'box3') {
            body.style.backgroundColor = "#876550";
        }

        if (color.target.id === 'box4') {
            body.style.backgroundColor = "#543150";
        }

        if (color.target.id === 'box5') {
            body.style.backgroundColor = "#567950";
        }
    });
});