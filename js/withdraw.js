document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-Input');
    const withdrawInputString = withdrawInput.value;
    const withdrawInputNum = parseFloat(withdrawInputString);

    const withdrawDolor = document.getElementById('withdraw-dolor');
    const withdrawDolorString = withdrawDolor.innerText;
    const withdrawDolorNum = parseFloat(withdrawDolorString);

    const totalWithdraw = withdrawDolorNum + withdrawInputNum;
    withdrawDolor.innerText = totalWithdraw;

    const balanceDolor = document.getElementById('balance-dolor');
    const balanceDolorString = balanceDolor.innerText;
    const balanceDolorNum = parseFloat(balanceDolorString);

    const totalBalance = balanceDolorNum - withdrawInputNum;
    balanceDolor.innerText = totalBalance;

    withdrawInput.value = '';
})