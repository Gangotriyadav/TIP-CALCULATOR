

const tipcalcy = () => {
    let amount = Number(document.getElementById("Bill").value);
    let perc = Number(document.getElementById("Tip").value);

    let Tip = amount * (perc / 100);
    let total = Tip + amount;

    document.getElementById("Total").value = Tip.toFixed(2);  // Display tip amount rounded to 2 decimal places
    document.getElementById("Billed").value = total.toFixed(2);  // Display total amount rounded to 2 decimal places
}
