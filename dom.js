//document.addEventListener('DOMContentLoaded',start);
document.addEventListener('load',(event)=>{
    alert('Page Loaded');
})
function start()
{
    let elem = document.querySelector('body');
    let temp = document.createElement('h1');
    temp.innerText = 'HELLO WORLD';
    elem.appendChild(temp);
}