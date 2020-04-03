const age = document.querySelector('.birthday li:nth-of-type(2)');
const birthday = new Date('May 16, 1991');
const today = new Date(Date.now());

age.textContent = Math.floor((today - birthday) / (365*24*3600*1000)) + " ans";