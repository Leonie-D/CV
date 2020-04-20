const informationButtons = document.querySelectorAll('.information li');

for (let btn of informationButtons) {
    btn.addEventListener('click', function(){
        let open = JSON.parse(btn.getAttribute('touchActivated'));
        btn.setAttribute('touchActivated', !open);
    });
};

const interestButtons = document.querySelectorAll('.infobulle');

for (let btn of interestButtons) {
    btn.addEventListener('click', function(){
        let open = JSON.parse(btn.getAttribute('touchActivated'));
        btn.setAttribute('touchActivated', !open);
    });
};