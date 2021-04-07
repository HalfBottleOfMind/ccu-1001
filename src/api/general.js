export async function init() {
    const data = {}

    // fetch data
    data.someData = await Promise.resolve(someFunc())
    data.contacts = fetchContacts()

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
