(function () {
    'use strict';
    /*function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {});
        }
    }*/

    const app = document.getElementById('app');
    console.log(app);
    const btn = document.createElement('button');
    btn.innerHTML = '<span>test</span>';
    // btn.style.color = 'red';
    btn.style = 'color: red;';

   /* console.log(btn.getAttribute('style'));
    console.log(app.getAttribute('data-project'));*/
    btn.setAttribute('style', 'color: green;');
    console.log(btn);

    const listOne = document.querySelector('.test-list-1 .list-1');
    const listOneAll = document.querySelectorAll('.list-1');
    console.log(listOne);
    console.log(listOneAll);


    //app.appendChild(btn);


    let html = ``;
    for(let i = 1; i <= 10; i++) {
        html += `<li class="item">Item ${i}</li>`
    }
   // listOne.innerHTML = html;

  /*  for(let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.innerText = `Item ${i}`;
        li.className = 'item';
        listOne.appendChild(li);
    }*/

    const clickBtn = document.getElementById('click');

    clickBtn.addEventListener('click', (event) => {
        console.log(event);
        alert('Clicked!');
    })
    const form = document.getElementById('register-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Send form!');
    })
    document.getElementById('google').addEventListener('click', e => {
        e.preventDefault();
       // location.href = 'https://bing.com';
        //window.open('https://bing.com');
        console.log('AAAAAAAAAAA!!!')
    });
    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Test!!!')
    })
    document.getElementById('test').addEventListener('click', e => {
        console.log('Testttttttt!!!')
    })

})();












