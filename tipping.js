

function calculateAmounts()
{
    var cost = parseFloat(document.getElementById('cost').value);
    var customPer = parseFloat(document.getElementById('custom').value);
    var customAmount;
    var totalAmount;

    customPer /= 100;
    customAmount = cost*customPer;
    totalAmount = cost + customAmount;

    document.getElementById("tip").textContent = "Tip Amount: " + customAmount;
    document.getElementById('total').textContent = "Total Amount (including tip): " + totalAmount;
}

