export async function init() {
    const data = {}

    // fetch data
    data.someData = await Promise.resolve(someFunc())
    data.contacts = fetchContacts()

    data.examples = {}
    data.examples.bars = {
        first: 40,
        second: 15,
        third: 90,
    }
    data.examples.text = {
        first: null,
        second: 'default',
        third: 'asdf',
    }
    data.examples.numbers = {
        first: null,
        second: 1,
        third: 255,
    }
    data.examples.checkbox = {
        first: null,
        second: true,
        third: false,
    }
    data.examples.selects = {
        first: null,
        second: 'first option',
        third: 'third option',
    }

    // return object with all data
    return data
}

export function saveChanges(data) {
    // make request to api

    console.log(data)

    return true
}

function someFunc() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
}

function fetchContacts() {
    return {
        email: 'test@email.com',
        phone: '+71234567890'
    }
}

export default {
    init,
    saveChanges,
}
