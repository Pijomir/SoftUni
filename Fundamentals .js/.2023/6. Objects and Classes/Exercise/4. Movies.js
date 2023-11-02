function storeMoviesInfo(commands) {
    let moviesInfo = [];
    for (let command of commands) {
        if (command.includes('addMovie')) {
            let movieName = command.split('addMovie ').pop();
            moviesInfo.push({ name: movieName });
        } else if (command.includes('directedBy')) {
            let [movieName, director] = command.split(' directedBy ');
            let foundMovie = moviesInfo.find(a => a.name === movieName);
            if (foundMovie) {
                foundMovie.director = director;
            }
        } else {
            let [movieName, date] = command.split(' onDate ');
            let foundMovie = moviesInfo.find(a => a.name === movieName);
            if (foundMovie) {
                foundMovie.date = date;
            }
        }
    }

    moviesInfo.forEach(a => {
        if (a.hasOwnProperty('director') && a.hasOwnProperty('date')) {
            console.log(JSON.stringify(a));
        }
    })
}

storeMoviesInfo(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);