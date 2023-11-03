function manageCompaniesIds(input) {
    let companiesIds = {};
    input.forEach(el => {
        let [company, id] = el.split(' -> ');
        if (!companiesIds.hasOwnProperty(company)) {
            companiesIds[company] = [];
        }

        if (!companiesIds[company].includes(id)) {
            companiesIds[company].push(id);
        } 
    });
    let sortedCopmaniesIds = Object.entries(companiesIds).sort((a, b) => a[0].localeCompare(b[0]));
    sortedCopmaniesIds.forEach(el =>{
        console.log(el[0]);
        el[1].forEach(innerEl => console.log(`-- ${innerEl}`));
    });
}

manageCompaniesIds([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);