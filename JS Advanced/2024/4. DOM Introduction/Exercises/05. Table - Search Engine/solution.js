function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchRef = document.getElementById("searchField");
   let rowsData = document.querySelectorAll("tbody tr");
   
   function onClick() {
      let searchedValue = searchRef.value;
      for (let row of rowsData) {
         let currentRowData = row.querySelectorAll("td");
         for (let el of currentRowData) {
            let elTxt = el.textContent;
            if (searchedValue.length > 0 && elTxt.includes(searchedValue)) {
               row.classList.add("select");
               break;
            } else {
               row.classList.remove("select");
            }
         }
      }      
   }

   searchRef.value = '';
}