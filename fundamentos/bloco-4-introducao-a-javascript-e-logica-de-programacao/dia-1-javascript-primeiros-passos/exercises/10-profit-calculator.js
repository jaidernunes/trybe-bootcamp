const productCost = 10;
const productValue = 20;

let productCostTaxed = ((20 / 100) * productCost) + productCost;

let profit = productValue * 1000 - productCostTaxed * 1000;

console.log("Profit: " + profit);