function showWhichLanguage(country) {
    let countries = {'USA': 'English', 'England': 'English', 'Spain': 'Spanish', 'Argentina': 'Spanish', 'Mexico': 'Spanish'};
    
    console.log(countries.hasOwnProperty(country) ? countries[country] : 'unknown');
}

showWhichLanguage('germany');