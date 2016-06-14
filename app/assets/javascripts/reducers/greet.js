import {Record} from "immutable";

var Greeting = Record({name: ""});

export default function greet(state = Greeting(), action) {
    switch (action.type) {
        case 'SET_NAME':
            return state.set('name', action.name)
        default:
            return state
    }
}




