document.addEventListener('submit', start)

function start(event) {
    let target = event.target
    
    event.preventDefault()

    if (document.querySelector('title').innerText === 'sign') {
        localStorage.setItem('email', target.elements.email.value)
        localStorage.setItem('password', target.elements.password.value)
        document.location.href = './index1.html';
    } else if (document.querySelector('title').innerText === 'login') {
        let email = localStorage.getItem('email'),
            pass = localStorage.getItem('password');
            (email === target.elements.email.value && pass === target.elements.password.value) ? alert('true') : alert('false')
    }
}
