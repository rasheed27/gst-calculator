"use strict";
console.log(calculateTax(100,0));
function calculateTax(amount,tax_per,type="add") {
    let base_amount =amount,
    	with_tax = amount,
    	without_tax = amount,
    	tax_amount
    if(type == "add"){
        tax_amount = ( amount * tax_per ) / 100
        with_tax += tax_amount
    }else if(type == "remove"){
    	with_tax = amount
        tax_amount =  amount - (amount * (100/(100+tax_per)))
        without_tax -= tax_amount
    }
    return {'base_amount':base_amount,"with_tax":with_tax,"without_tax":without_tax,"tax_per":tax_per,"tax_amount":tax_amount,"type":type}
}

module.exports = {calculateTax}
