const { add, multiply, divide } = require('./app');

// Простые тесты без фреймворков
function test(description, callback) {
    try {
        callback();
        console.log(`✅ PASS: ${description}`);
    } catch (error) {
        console.error(`❌ FAIL: ${description}`);
        console.error(`   ${error.message}`);
        process.exitCode = 1;
    }
}

// Запускаем тесты
console.log("Запуск тестов...\n");

test("Сложение 2 + 3 должно равняться 5", () => {
    const result = add(2, 3);
    if (result !== 5) {
        throw new Error(`Ожидалось 5, получено ${result}`);
    }
});

test("Сложение -1 + 1 должно равняться 0", () => {
    const result = add(-1, 1);
    if (result !== 0) {
        throw new Error(`Ожидалось 0, получено ${result}`);
    }
});

test("Умножение 4 * 5 должно равняться 20", () => {
    const result = multiply(4, 5);
    if (result !== 20) {
        throw new Error(`Ожидалось 20, получено ${result}`);
    }
});

test("Деление 10 / 2 должно равняться 5", () => {
    const result = divide(10, 2);
    if (result !== 5) {
        throw new Error(`Ожидалось 5, получено ${result}`);
    }
});

test("Деление на ноль должно выбрасывать ошибку", () => {
    let errorThrown = false;
    try {
        divide(10, 0);
    } catch (error) {
        errorThrown = true;
        if (error.message !== "Деление на ноль невозможно") {
            throw new Error("Неправильное сообщение об ошибке");
        }
    }
    if (!errorThrown) {
        throw new Error("Ошибка не была выброшена");
    }
});

console.log("\nТесты завершены");