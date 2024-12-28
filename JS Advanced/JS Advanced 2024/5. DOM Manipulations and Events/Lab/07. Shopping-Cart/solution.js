function solve() {
   let result = {};
   let addBtns = document.querySelectorAll('.add-product');
   for (let btn of addBtns) {
      btn.addEventListener('click', addBtnClick);
   }

   let resultBtn = document.querySelector('.checkout');
   resultBtn.addEventListener('click', onCheckout);

   function addBtnClick(event) {
      let currentBtn = event.target;
      let productName = currentBtn.parentElement.parentElement.querySelector('.product-title').textContent;
      let productPrice = currentBtn.parentElement.parentElement.querySelector('.product-line-price').textContent;
      if (!result.hasOwnProperty(productName)) {
         result[productName] = 0;
      }

      result[productName] += Number(productPrice);
      document.querySelector('textarea').textContent += `Added ${productName} for ${productPrice} to the cart.\n`
   }

   function onCheckout(e) {
      let listOfProducts = Object.keys(result);
      let totalPrice = Object.values(result).reduce((a, b) => a + b, 0);
      document.querySelector('textarea').textContent += `You bought ${listOfProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
      resultBtn.disabled = true;
      for (let btn of addBtns) {
         btn.disabled = true;
      }
   }
}