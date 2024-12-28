function filterEmployeesByGivenCriteria(data, criteria) {
    let allEmployees = JSON.parse(data);
    if(criteria === 'all') {
        allEmployees.forEach((a, i) => console.log(`${i}. ${a.first_name} ${a.last_name} - ${a.email}`)); 
    } else {
        let [key, value] = criteria.split('-');
        let filteredEmployees = allEmployees.filter(a => a[key] === value);
        filteredEmployees.forEach((a, i) => console.log(`${i}. ${a.first_name} ${a.last_name} - ${a.email}`));
    }
}

filterEmployeesByGivenCriteria(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female');