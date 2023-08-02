function calculateAverage() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('result').innerText = '有効な数字を入力してください。';
        return;
    }

    const average = (num1 + num2 + num3) / 3;
    document.getElementById('result').innerText = `平均: ${average.toFixed(2)}`;
}
