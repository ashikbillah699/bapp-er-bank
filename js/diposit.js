document.getElementById('diposit-btn').addEventListener('click', function () {
    const dipositInput = document.getElementById('diposit-input');
    const dipositInputString = dipositInput.value;
    const dipositInputDolor = parseFloat(dipositInputString);

    const dipositDolor = document.getElementById('diposit-dolor');
    const dipositDolorString = dipositDolor.innerText;
    const dipositDolorNum = parseFloat(dipositDolorString);

    const totalDipo = dipositDolorNum + dipositInputDolor;
    dipositDolor.innerText = totalDipo;

    const balanceDolor = document.getElementById('balance-dolor');
    const balanceDolorString = balanceDolor.innerText;
    const balanceDolorNum = parseFloat(balanceDolorString);

    const totalBalance = balanceDolorNum + dipositInputDolor;
    balanceDolor.innerText = totalBalance;

    dipositInput.value = '';
})