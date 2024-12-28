function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let inputRef = document.querySelector("textarea");
   let restaurantOutput = document.querySelector("#bestRestaurant p");
   let workersOuput = document.querySelector("#workers p");

   function onClick() {
      let input = JSON.parse(inputRef.value);
      let result = {};
      for (let el of input) {
         let [restaurantName, workersData] = el.split(' - ');
         if (!result.hasOwnProperty(restaurantName)) {
            result[restaurantName] = {
               avgSallary: 0,
               allSallaries: [],
               allWorkers: []
            };
         }

         let workersDataArr = workersData.split(', ');
         for (let worker of workersDataArr) {
            let [workerName, sallary] = worker.split(' ');
            sallary = Number(sallary);
            result[restaurantName].allSallaries.push(sallary);
            result[restaurantName].allWorkers.push({ workerName, sallary });
         }
      }

      for (let restData of Object.values(result)) {
         restData.avgSallary = Number((restData.allSallaries.reduce((a, b) => a + b, 0) / restData.allSallaries.length));
      }

      let sortedResult = Object.entries(result).sort((a, b) => b[1].avgSallary - a[1].avgSallary);
      let bestRestaurant = sortedResult[0];
      restaurantOutput.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSallary.toFixed(2)} Best Salary: ${(Math.max(...bestRestaurant[1].allSallaries).toFixed(2))}`;
      let bestRestaurantWorkers = bestRestaurant[1].allWorkers.sort((a, b) => b.sallary - a.sallary).map(a => `Name: ${a.workerName} With Salary: ${a.sallary}`).join(' ');
      workersOuput.textContent = bestRestaurantWorkers;
   }
}