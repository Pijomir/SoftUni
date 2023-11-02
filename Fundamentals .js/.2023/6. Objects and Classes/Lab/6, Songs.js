function showSongs(input) {
    class Song {
        constructor(typeList, name, duration) {
            this.typeList = typeList,
            this.name = name,
            this.duration = duration
        }
    }
    
    let commandLine = input.pop();
    let numberOfSongs = input.shift();
    let songs = [];
    for (let i = 0; i < numberOfSongs; i++) {
        let [currentTypeList, currentName, currentDuration] = input[i].split('_');
        let currentSong = new Song(currentTypeList, currentName, currentDuration);
        songs.push(currentSong);
    }

    if (commandLine === 'all') {
        songs.forEach(a => console.log(a.name));
    } else {
        let filteredSongs = songs.filter(a => a.typeList === commandLine);
        filteredSongs.forEach(a => console.log(a.name));
    }

}

showSongs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);