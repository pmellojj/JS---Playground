function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById('result').textContent = "Não é possível dividir por zero.";
                return;
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Operação inválida";
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}