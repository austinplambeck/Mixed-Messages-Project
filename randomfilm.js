let randomFilms = 
['The Lord of the Rings (2001)', 'Labyrinth (1986)', 'The Dark Crystal (1982)', 'The Batman (2022)',
'Spider-Man (2002)', 'Spider-Man: Into the Spider-Verse (2018)', 'The NeverEnding Story (1984)', 'Coraline (2009)',
'Shrek (2001)', 'Spirited Away (2001)', 'Princess Mononoke (1997)', 'Ponyo (2008)', 'Pirates of the Caribbean (2003)',
'Harry Potter (2001)', 'Star Wars (1977)', 'Stardust (2007)', 'Pan\'s Labyrinth (2006)', 'Avatar (2009)', 
'Wings of Desire (1987)', 'Crouching Tiger, Hidden Dragon (2000)', 'Rocky (1976)', 'Call Me By Your Name (2017)', 
'Moonlight (2016)', 'Jane Eyre (2011)', 'Steve Jobs (2015)', 'Akira (1988)', 'Metropolis (1927)', 'Clockwork Orange (1971)',
'Schindler\'s List (1993)', 'Good Will Hunting (1997)', 'A Beautiful Mind (2001)', 'Pride & Prejudice (2005)',
'Roma (2018)', 'La La Land (2016)', 'Dead Poets Society (1989)', 'Forrest Gump (1994)', 'Parasite (2019)',
'The Apartment (1960)', 'Little Women (2019)', 'The Shawshank Redemption (1994)', 'Creed (2015)', 'Ad Astra (2019)', 
'Blade Runner (1982)', 'Blade Runner 2049 (2017)', '2001: A Space Odyssey (1968)', 
'Interstellar (2014)', 'Arrival (2016)', 'Planet of The Apes (1968)', 'Gattaca (1997)', 
'E.T. The Extra-Terrestrial (1982)', 'Alien (1979)', 'Looper (2012)', 'The Matrix (1999)', 
'Annihilation (2018)', 'Knives Out (2019)', 'Star Wars: The Last Jedi (2017)', 'No Time To Die (2021)', 'Skyfall (2012)', 
'The Iron Giant (1999)'];

let filmDisplay = document.getElementById('filmDisplay');
let filmDisplayM = document.getElementById('filmDisplayM');

const randomGenerator = () => {
    let randomPick = randomFilms[Math.floor(Math.random() * (randomFilms.length))];

    filmDisplay.innerHTML = `${randomPick}`;
    filmDisplayM.innerHTML = `${randomPick}`;
}