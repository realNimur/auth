import {AUTH_LOGIN} from "./action";
import {createStore} from "redux";

const initialState = {
    dataUser: {
        login: 'developer21',
        password: '123456',
    },
    currentUser: {
        auth: false,
        login: null,
    }

};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTH_LOGIN:
            return {
                ...state,
                currentUser: {login: payload.login, auth: true},
            }
        default:
            return state
    }
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;