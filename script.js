// Selecting elements by their IDs
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains1 = document.getElementById('mountains1');
let mountains2 = document.getElementById('mountains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
var title = document.getElementById('title');

// Function to handle scroll event
window.onscroll = function () {
    // Getting the scroll value
    let value = scrollY;

    // Moving elements based on scroll position
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains1.style.top = value * 2 + 'px';
    mountains2.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value + 'px';
    boat.style.left = value * 3 + 'px';
    title.style.fontSize = value + 'px';

    // Handling specific scroll positions
    if (scrollY >= 60) {
        title.style.fontSize = 67 + 'px'; // Setting a specific font size
        title.style.position = 'fixed'; // Fixing the title position when scrolling
        if (scrollY >= 415) {
            title.style.display = 'none'; // Hiding the title when scrolled to a certain position
        } else {
            title.style.display = 'block'; // Displaying the title
        }

        // Changing the background of the main section based on scroll position
        if (scrollY >= 127) {
            document.getElementById('main').style.background = 'linear-gradient(#3b6f90, #254da5, #205c80)';
        } else {
            document.getElementById('main').style.background = 'linear-gradient(#03283d, #021949, #00141f)';
        }
    }
}



