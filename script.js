const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    notification();
});


function notification() {
    const noti = document.createElement('div');
    noti.classList.add('notification');
    noti.innerText = "Purchase was successful!"
    
    container.appendChild(noti);


    setTimeout(() => {
        noti.remove();
    },3000);

}