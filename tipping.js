

function calculateAmounts()
{
    var split = parseInt(document.getElementById("split").value);
    var cost = parseFloat(document.getElementById('cost').value);
    var customPer = parseFloat(document.getElementById('custom').value);
    var customAmount;
    var totalAmount;
    var splitAmount;

    customPer /= 100;
    customAmount = cost*customPer;
    totalAmount = cost + customAmount;

    if (isNaN(split))
    {
        split = 1;
    }
    splitAmount = totalAmount/split;

    document.getElementById("tip").textContent = "Tip Amount: " + customAmount.toFixed(2);
    document.getElementById('total').textContent = "Total Amount (including tip): " + totalAmount.toFixed(2);
    document.getElementById("splitAmount").textContent = "Splited Amount: " + splitAmount.toFixed(2);
}

function buttonAmount(per)
{
    var cost = parseFloat(document.getElementById('cost').value);
    var split = parseInt(document.getElementById("split").value);
    var tipAmount;
    var totalAmount;
    var splitAmount;

    if (isNaN(split))
    {
        split = 1;
    }

    tipAmount = cost*per;
    totalAmount = cost+tipAmount;
    splitAmount = totalAmount/split;

    document.getElementById("tip").textContent = "Tip Amount: " + tipAmount.toFixed(2);
    document.getElementById('total').textContent = "Total Amount (including tip): " + totalAmount.toFixed(2);
    document.getElementById("splitAmount").textContent = "Splited Amount: " + splitAmount.toFixed(2);

}