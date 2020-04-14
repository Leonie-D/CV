const mail = document.querySelector('.tobebuilt');
const firstPart = "trasud.einoel";
const secondPart = "moc.liam";
mail.addEventListener('click', function(){
    mail.href = 'mailto:' + firstPart.split('').reverse().join('') + '@' + secondPart.split('').reverse().join('');
});