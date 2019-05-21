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
const deleteBurger = _ => {

}

const createBurger = _ => {
    fetch('/burgers', {
        method: 'POST',
        headers: {
            'Content_Type' : 'application/json'
        },
        body: JSON.stringify({
            burger: document.querySelector('#burgerAdd').value
        })
    })
    .then(_ => {
        getBurger()
        document.querySelector('#burger').value = ''
    })
    .catch(e => console.error(e))
}

document.querySelector('#addBurger').addEventListener('click', e => {
    e.preventDefault()
    createBurger()
})

document.addEventListener('click', e =>{
    if (e.target.className === 'deleteBurger') {
        deleteBurger()
    }
})

getBurger()
