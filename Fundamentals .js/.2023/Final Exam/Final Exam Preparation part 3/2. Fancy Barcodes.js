function checkBarcodes(input) {
    let barcodeCount = Number(input.shift());
    let barcodesToCheck = input.slice(0, barcodeCount);
    let validBarcodePattern = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/;
    barcodesToCheck.forEach(barcode => {
        if (!barcode.match(validBarcodePattern)) {
            console.log('Invalid barcode');
        } else {
            let currentBarcode = barcode.match(/\d/g);
            console.log(currentBarcode === null ? 'Product group: 00' : `Product group: ${currentBarcode.join('')}`);
        }
    });
}

checkBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
