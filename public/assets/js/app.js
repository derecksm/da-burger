const { fetch } = window

const renderBurgers = burgers => {
    document.querySelector('#burgerList').innerHTML = ''
    burgers.forEach(({ item_id, burger_name }) => {
        let burgerDiv = document.createElement('div')
        burgerDiv.innerHTML = `
        <h3>${item_id})...${burger_name}</h3>
        <button class="deleteBurger" data-burgerid ="${item_id}">Eat da burger</button>
        <hr>`
        document.querySelector('#burgerList').append(burgerDiv)
    })
}

const getBurger = _ => {
    fetch('./burgers')
        .then(r => r.json())
        .then(burgers => renderBurgers(burgers))
        .catch(e => console.error(e))
}
const deleteBurger = item_id => {
fetch(`/burgers/${item_id}`, {
    method: 'DELETE'
})
.then(_=> getBurger())
.catch(e => console.log(e))
}

const createBurger = _ => {
    fetch('/burgers', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            burger_name: document.querySelector('#burgerAdd').value,
            eaten: false
        })
    })
    .then(_ => {
        getBurger()
        document.querySelector('#burgerAdd').value = ''
    })
    .catch(e => console.error(e))
}

document.querySelector('#addBurger').addEventListener('click', e => {
    e.preventDefault()
    createBurger()
})

document.addEventListener('click', e =>{
    if (e.target.className === 'deleteBurger') {
        deleteBurger(e.target.dataset.burgerid)
    }
})

getBurger()
