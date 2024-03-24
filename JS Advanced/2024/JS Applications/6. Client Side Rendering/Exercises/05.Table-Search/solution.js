import { html, render } from './node_modules/lit-html/lit-html.js';

solve();

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const url = 'http://localhost:3030/jsonstore/advanced/table';
   const rootElement = document.querySelector('tbody');
   const searchFieldRef = document.getElementById('searchField') 

   getData()

   async function getData() {
      try {
         let response = await fetch(url);
         if(!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
         }

         let data = Object.values(await response.json());   
         let createTableRows = (data) => html`${data.map(row => html`
            <tr>
                <td>${row.firstName} ${row.lastName}</td>
                <td>${row.email}</td>
                <td>${row.course}</td>
            </tr>`)}`;
            render(createTableRows(data), rootElement);
      } catch (error) {
         alert(error.message);
      }
   }

   function onClick() {
      let searchedPhrase = searchFieldRef.value.toLowerCase();
      if (!searchedPhrase) {
         return;
      }

      let allRows = Array.from(rootElement.children);
      for (let row of allRows) {
         for (let part of row.children) {
            let partTextContent = part.textContent.toLocaleLowerCase();
            if (partTextContent.includes(searchedPhrase)) {
               row.classList.add('select');
               break;
            } else {
               row.classList.remove('select');
            }
         }
      }

      searchFieldRef.value = '';
   }
}