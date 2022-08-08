// Header title
const title = document.getElementById("title");
title.textContent = 'Login Form';
title.style.color = 'red';

// Header Color
const header = document.getElementById("main-header");
header.style.backgroundColor = '#333';
// console.log(header)

// Main content
let content = document.getElementById('content');
content.style.backgroundColor = '#ccc';
content.style.border = '2px solid red';

// main-section
 const color = document.getElementById('name');
 color.style.color = 'green'
 

// // main-section-a
// const sectionTitle = document.getElementsByClassName('section-title');
// sectionTitle[0].style.border = '1px solid red';
// sectionTitle[0].style.paddingLeft = '40px';
// sectionTitle[0].style.backgroundColor = 'white';

// // Input Checkbox
// const slect = document.getElementsByClassName('slect');
// slect[1].style.borderBottom = '3px solid yellow'; 
// Add Time

function timer() {

    const time = new Date()
     document.querySelector('.output').textContent= time.toLocaleTimeString() ;
    
 }
 
 
 setInterval(timer,1000);

 // Add Date
function dates() {

    const date = new Date()
     document.querySelector('#date').textContent= date.toLocaleDateString() ;
    
 }
 
 
 setInterval(dates);

 // Events
 const myForm = document.querySelector('#my-form');  
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const msgs = document.querySelector('.msgs');
// const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) { 
   e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
  msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
   } else {
      
    msgs.classList.add('success');
    msgs.innerHTML = ' Login Success fully, Welcome to my University. ';

    setTimeout(() => msgs.remove(), 5000);  
      }
}

 