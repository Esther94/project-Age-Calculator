let button = document.querySelector('.start');
let pageB = document.querySelector('.Agecal2');
let pageA = document.querySelector('.Agecal1');
let submitBtn = document.querySelector('.sub');
let pageC = document.querySelector('.Agecal3');

let name = document.querySelector('.name');
let age = document.querySelector('.age');

let displayName = document.querySelector('.name1');
let displayAge = document.querySelector('.age1');
let msg = document.querySelector('.msg');

pageB.style.display = "none";
pageC.style.display = "none";

button.addEventListener('click', function(e) {
    e.preventDefault();
    pageB.style.display = "block";
    pageA.style.display = "none"; 
})

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
     pageC.style.display = "block"; 
     pageB.style.display = "none";
     pageA.style.display = "none";
     
     displayAge.value = age.value;
     displayName.value = name.value;
     msg.value = age.value *365;
     if(age.value > 170){
         alert('Hmmm 🙄🥱Are you that old?')
     }
});



