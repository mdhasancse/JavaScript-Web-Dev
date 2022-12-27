let btn = document.querySelector('button');
btn.addEventListener('click',InputMsg);

function InputMsg()
{
    let name = prompt("Enter Name of Student"); // it take inpur in a box and will return 
    btn.textContent = 'Roll No. 1: ' + name
}
