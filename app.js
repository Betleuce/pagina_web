'use strict'
document.querySelector
const switcher = document.quertySelector('.btn');

const switcher = document.querySelector('.btn');

switcher.add.EventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "ligth-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Ligth";
    }

    });