// Function to reload the film, without reloading the page and resetting the toggle
const reloadFilms = () => {
    document.querySelector('#scifiDisplay').innerHTML = '';
    document.querySelector('#fantasyDisplay').innerHTML = '';
    document.querySelector('#dramaDisplay').innerHTML = '';

    document.querySelector('#scifiDisplayM').innerHTML = '';
    document.querySelector('#fantasyDisplayM').innerHTML = '';
    document.querySelector('#dramaDisplayM').innerHTML = '';

    document.querySelector('#filmDisplay').innerHTML = '';
    
    document.querySelector('#filmDisplayM').innerHTML = '';

}