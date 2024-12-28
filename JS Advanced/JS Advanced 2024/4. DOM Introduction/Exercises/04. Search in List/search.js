function search() {
   let inputText = document.getElementById('searchText').value;
   let towns = document.querySelectorAll('#towns li');
   let counter = 0;
   for (let town of towns) {
      let townName = town.textContent;
      if (inputText.length > 0 && townName.includes(inputText)) {
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }

   document.getElementById("result").textContent = `${counter} matches found`;
   document.getElementById("searchText").value = '';
}
