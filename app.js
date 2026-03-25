// Простое приложение для демонстрации CI/CD

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль невозможно");
    }
    return a / b;
}

// Экспортируем функции для тестирования
module.exports = { add, multiply, divide };

console.log("Приложение запущено!");