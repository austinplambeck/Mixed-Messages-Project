let genreClass = document.querySelector('.genre');
let allClass = document.querySelector('.all');
let genreButton = document.querySelector('#genreButton');
let allButton = document.querySelector('#allButton');

let genreClassM = document.querySelector('.genreMobile');
let allClassM = document.querySelector('.allMobile');
let genreButtonM = document.querySelector('#genreButtonM');
let allButtonM = document.querySelector('#allButtonM');

const toggleGenre = () => {
    allClass.style.display = 'none';
    genreClass.style.display = 'block';

    allClassM.style.display = 'none';
    genreClassM.style.display = 'block';

    genreButton.style.backgroundColor = 'black';
    genreButton.style.color = 'white';
    allButton.style.backgroundColor = 'white';
    allButton.style.color = 'black';

    genreButtonM.style.backgroundColor = 'black';
    genreButtonM.style.color = 'white';
    allButtonM.style.backgroundColor = 'white';
    allButtonM.style.color = 'black';
}

const toggleAll = () => {
    genreClass.style.display = 'none';
    allClass.style.display = 'inline-block';

    genreClassM.style.display = 'none';
    allClassM.style.display = 'inline-block';

    allButton.style.backgroundColor = 'black';
    allButton.style.color = 'white';
    genreButton.style.backgroundColor = 'white';
    genreButton.style.color = 'black';

    allButtonM.style.backgroundColor = 'black';
    allButtonM.style.color = 'white';
    genreButtonM.style.backgroundColor = 'white';
    genreButtonM.style.color = 'black';
}

