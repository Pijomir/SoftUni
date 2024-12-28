function create(words) {
   let contentRef = document.getElementById('content');
   for (let word of words) {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = word;
      newP.style.display = 'none';
      newDiv.addEventListener('click', onClick);
      newDiv.appendChild(newP);
      contentRef.appendChild(newDiv);

      function onClick(event) {
         newP.style.display = newP.style.display === 'none' ? 'block' : ' none';
      }
   }
}