function solve() {
      let result = {};
      let addBtns = document.querySelectorAll('.add-product');
      for (let btn of addBtns) {
         btn.addEventListener('click', addBtnClick);
      }

      function addBtnClick(event) {
         let currentBtn = event.target;
         let productName = currentBtn.parentElement.parentElement.querySelector('.product-title').textContent;
         let productPrice = currentBtn.parentElement.parentElement.querySelector('.product-line-price').textContent;
         if (!result.hasOwnProperty(productName)) {
            result[productName] = Number(productPrice);
         }

         result[productName] += Number(productPrice);
         document.querySelector('textarea').textContent += `Added ${productName} for ${productPrice} to the cart.\n`
      }
}