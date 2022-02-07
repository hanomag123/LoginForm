document.addEventListener('submit', start)

function start(event) {
    let target = event.target
    
    event.preventDefault()

    if (document.querySelector('title').innerText === 'sign') {
        localStorage.setItem('name', target.elements.name.value)
        localStorage.setItem('email', target.elements.email.value)
        localStorage.setItem('password', target.elements.password.value)
        document.location.href = './index1.html';
    } else if (document.querySelector('title').innerText === 'login') {
        console.log('hello')
        let email = localStorage.getItem('email'),
            pass = localStorage.getItem('password');
            (email === target.elements.email.value && pass === target.elements.password.value) ? document.location.href = './index3.html' : alert('false')
    }
}

function startLoad() {
    document.forms[0][0].value = localStorage.email
    document.forms[0][1].value = localStorage.password
}

if (document.querySelector('title').innerText === 'Catalog') {
    document.addEventListener('click', newClick)
}
let busket = document.querySelector('.header__busketContainer')

function newClick() {
    let arr = [];
    let add = document.querySelector('.header__add');
    if (event.target.dataset.status === 'button') {
        let div = document.createElement('div')
        div.className = 'catalog__title'
        div.innerText = event.target.parentElement.querySelector('.catalog__title').innerText
        busket.appendChild(div);
        for(let key of busket.children) {
            arr.push(key)
        }
        document.querySelector('.busket').firstElementChild.innerText = 'КОРЗИНА'
        document.querySelector('.busket').firstElementChild.innerText += ' ' + arr.length
    } else if (event.target.dataset.status === 'busket') {
        let busketCon = event.target.parentElement.querySelector('.header__busketContainer')
        busketCon.hidden = !busketCon.hidden;
    } else if (event.target.dataset.status === 'search') {
        event.target.addEventListener('keyup', search) 
    } else if (event.target.dataset.status === 'add') {
        add.hidden = !add.hidden
    } else if (event.target.dataset.status === 'addItem') {
        let regexp = /(https?:\/\/.*\.(?:png|jpg))/i
        let arr = event.target.parentElement.querySelectorAll('input');
        let newArr = [];
        for(let key of arr) {
            if (key.value === '') {
                alert('input correct text')
                return false;
            } else {
                newArr.push(key.value)
                key.value = ''
            }
        }
        if (!newArr[2].match(regexp)) {
            alert('input correct link')
            return false;
        }
        let newElem = document.querySelector('.catalog__item').cloneNode(true)
        newElem.querySelector('.catalog__title').innerText = newArr[0]
        newElem.querySelector('.catalog__discription').innerText = newArr[1]
        newElem.querySelector('img').setAttribute('src', `${newArr[2]}`)
        document.querySelector('.catalog').prepend(newElem)
        add.hidden = !add.hidden
        console.log(arr)
        
    }
}

function search() {
    let newArr = []
    for (let key of document.querySelector('.catalog').children) {
        newArr.push(key)
    }
    let str = event.target.value
    let regexp = new RegExp(str, 'gi')
    newArr.filter((value, index) => value.innerText.match(regexp) ? value.classList.remove('dispNone') : value.classList.add('dispNone'))
}


