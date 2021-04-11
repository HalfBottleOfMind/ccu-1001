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
    data.examples.editableTable = {
        items: [
            {
                name: 'name 1',
                email: 'email 1',
                phone: 'phone 1',
            },
            {
                email: 'email 2',
                phone: 'phone 2',
                name: 'name 2',
            },
            {
                phone: 'phone 3',
                name: 'name 3',
                email: 'email 3',
            },
        ],
        headers: [
            {
                name: 'Имя',
                value: 'name',
            },
            {
                name: 'Почта',
                value: 'email',
            },
            {
                name: 'Телефон',
                value: 'phone',
            },
        ]
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
