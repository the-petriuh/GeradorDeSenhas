function randomIntFromRange(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePassword(passwordLenght, include_symbols)
{
    const symbols = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789'\"!@#$%¨&*()_+=-<>,.:?;/\\|{}[]";
    let password = '';
    let range = include_symbols ? symbols.length - 1 : symbols.indexOf('9');

    for (i = 0; i < passwordLenght; i++)
    {
        password += symbols[randomIntFromRange(0, range)];
    }
    
    return password;
}

function generate()
{
    let generatedPassword = document.getElementById('gpassword');
    let passwordLenght = parseInt(document.getElementById('length').value);
    
    if(passwordLenght > 32) passwordLenght = 32;
    else if (passwordLenght < 8) passwordLenght = 8;
    
    const newPassword = generatePassword(passwordLenght, 
        document.getElementById('checker').checked);

    generatedPassword.value = newPassword;
}