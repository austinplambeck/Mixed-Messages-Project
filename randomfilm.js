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
'Blade Runner (1982)', 'Blade Runner 2049 (2017)', '2001: A Space Odyssey (1968)', 'Only Yesterday (1991)', 'Whisper of the Heart (1995)', 
'Interstellar (2014)', 'Arrival (2016)', 'Planet of The Apes (1968)', 'Gattaca (1997)', 'The Half of It (2020)', 'Raging Bull (1980)', 
'E.T. The Extra-Terrestrial (1982)', 'Alien (1979)', 'Looper (2012)', 'The Matrix (1999)', 'Fallen Angels (1995)', 'Prisoners (2013)', 
'Annihilation (2018)', 'Knives Out (2019)', 'Star Wars VIII: The Last Jedi (2017)', 'No Time To Die (2021)', 'Skyfall (2012)', 
'The Iron Giant (1999)', 'Man of Steel (2013)', 'Turning Red (2022)', 'Osmosis Jones (2001)', 'Crazy Rich Asians (2018)', 
'Ikiru (1952)', 'Spencer (2021)', 'The Water Man (2020)', 'The Secret Life of Walter Mitty (2013)', 'The Seventh Seal (1957)',
'The Karate Kid (2010)', 'Black Swan (2010)', 'Inside Out (2015)', 'Malignant (2021)', 'Training Day (2001)', 'Birds of Prey (2020)',
'One Flew Over the Cuckoo\'s Nest (1975)', 'The Princess and the Frog (2009)', 'Rocky Balboa (2006)', 'Seven Pounds (2008)', 'Atonement (2007)',
'Ratatouille (2007)', 'Twilight (2008)', 'The Truman Show (1998)', 'The Photograph (2020)', 'Shame (2011)', 'The Place Beyond the Pines (2012)', 
'Prometheus (2012)', 'Logan Lucky (2017)', 'Before Sunrise (1995)', 'The Nice Guys (2016)', 'Brick (2005)', 'Perfect Blue (1997)', 
'V for Vendetta (2005)', 'Sleepless in Seattle (1993)', 'Da 5 Bloods (2020)', 'Do the Right Thing (1989)', 'Just Mercy (2019)', 
'Selah and the Spades (2019)', 'The Breadwinner (2017)', 'The Lighthouse (2019)', 'Ex Machina (2015)', 'The Way Back (2020)', 
'The Florida Project (2017)', 'BlacKkKlansman (2018)', 'My Neighbor Totoro (1988)', 'Creed II (2018)', 'The Shape of Water (2017)'];

let filmDisplay = document.getElementById('filmDisplay');
let filmDisplayM = document.getElementById('filmDisplayM');

const randomGenerator = () => {
    let randomPick = randomFilms[Math.floor(Math.random() * (randomFilms.length))];

    filmDisplay.innerHTML = `${randomPick}`;
    filmDisplayM.innerHTML = `${randomPick}`;
}