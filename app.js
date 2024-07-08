function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let characters = lowercase;

    if (includeUppercase)
        characters += uppercase;

    if (includeNumbers)
        characters += numbers;

    if (includeSymbols)
        characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function checkSymbols() {
    const includeSymbols = document.getElementById('symbols').checked;
    const symbolsWarning = document.getElementById('symbolsWarning');

    if (!includeSymbols) {
        symbolsWarning.classList.remove('hidden');
    } else {
        symbolsWarning.classList.add('hidden');
    }
}

function generateAndDisplayPassword() {
    const lengthInput = document.getElementById('length');
    const length = parseInt(lengthInput.value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    const lengthAlert = document.getElementById('lengthAlert');

    if (length < 12) {
        lengthInput.classList.add('border-red-500');
        lengthAlert.classList.remove('hidden');
    } else {
        lengthInput.classList.remove('border-red-500');
        lengthAlert.classList.add('hidden');
    }

    checkSymbols();

    const password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('generatedPassword').textContent = `Generated Password: ${password}`;
}
