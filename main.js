function randomIntFromRange(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getPasswordCharacters(includeCapitalLetter, includeNumbers, includeSymbols)
{
    const allCharacters = "ABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789'\"!@#$%¨&*()_+=-<>,.:?;/\\|{}[]";
    let passwordCharacters = 'abcdefghijklmnopqrstuvxwyz';

    if (includeCapitalLetter)
        passwordCharacters += allCharacters.substr(0, 26);
    if (includeNumbers)
        passwordCharacters += allCharacters.substr(26, 10);
    if (includeSymbols)
        passwordCharacters += allCharacters.substr(36);
    
    return passwordCharacters;
}

function generatePassword(passwordLenght, passwordCharacters)
{
    let password = '';
    let range = passwordCharacters.length - 1;

    for (i = 0; i < passwordLenght; i++)
    {
        password += passwordCharacters[randomIntFromRange(0, range)];
    }
    
    return password;
}

function getPassword()
{
    let generatedPassword = document.getElementById('gpassword');
    let passwordLenght = parseInt(document.getElementById('length').value);
    
    if(passwordLenght > 32) passwordLenght = 32;
    else if (passwordLenght < 8) passwordLenght = 8;

    const capLettersChecker = document.getElementById('cap-letters-checker').checked;
    const numberChecker = document.getElementById('numbers-checker').checked;
    const symbolChecker = document.getElementById('symbol-checker').checked;

    let characters = getPasswordCharacters(capLettersChecker, numberChecker, symbolChecker);
    
    const newPassword = generatePassword(passwordLenght, characters);

    generatedPassword.value = newPassword;
}