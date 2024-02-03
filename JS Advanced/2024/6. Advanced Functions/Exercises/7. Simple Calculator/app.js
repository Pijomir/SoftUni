function calculator() {
    let resultRef = document.getElementById('result');
    let calculate = {
        init: (select1, select2, resultSelector) => {
            num1 = document.querySelector(select1);
            num2 = document.querySelector(select2);
            resultRef = document.querySelector(resultSelector);
        },
        add: () => {
            let num1 = Number(document.getElementById('num1').value);
            let num2 = Number(document.getElementById('num2').value);
            let sum = num1 + num2;
            resultRef.value = sum;
        },
        subtract: () => {
            let num1 = Number(document.getElementById('num1').value);
            let num2 = Number(document.getElementById('num2').value);
            let subtract = num1 - num2;
            resultRef.value = subtract;
        }
    }
    return calculate;
}