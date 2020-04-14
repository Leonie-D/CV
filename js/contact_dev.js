const mail = document.querySelector('.to_be_built');
const prefix = '6d61696c746f3a';
const firstPart = "trasud.einoel";
const secondPart = "moc.liamg";

function hex_to_ascii(str1) {
	var hex = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
};

mail.addEventListener('click', function(){
    mail.href = hex_to_ascii(prefix) + firstPart.split('').reverse().join('') + '@' + secondPart.split('').reverse().join('');
});

const tel = document.querySelector('.in_several_parts');
const midelPart = '4e6a6b674d5449674f546b3d';
const scrollLimit = document.getElementById('hobbies').offsetTop;

window.addEventListener('scroll', function(ev) {
	if (window.scrollY + window.innerHeight >= scrollLimit) {
		tel.textContent = atob(hex_to_ascii(midelPart));
	} else {
		tel.textContent = '';
	}
});
tel.textContent = atob(hex_to_ascii(midelPart));