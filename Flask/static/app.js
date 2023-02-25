const roomDisplay = document.querySelector(".room-display");
const item = document.querySelectorAll('.w');
const check = document.getElementById('checkout');

for(let i=0; i<item.length; i++){
    // console.log(item[i].innerHTML)
    item[i].addEventListener('click',function(){
        roomDisplay.innerHTML = item[i].innerHTML;
    })
}

function checkout(){
    let a = document.createElement('a');
    a.href = "http://127.0.0.1:5000/";
    check.addEventListener("click",()=>{
        check.appendChild(a);
    })
}

checkout()