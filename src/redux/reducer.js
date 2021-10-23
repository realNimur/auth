import {AUTH_LOGIN} from "./action";
import {createStore} from "redux";

const initialState = {
    dataUser: {
        login: 'developer21',
        password: '123456',
    },
    currentUser: {
        login: null,
    }

};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTH_LOGIN:
            return {
                ...state,
                currentUser: {login: payload.login},
            }
        default:
            return state
    }
}
const store = createStore(reducer);
export default store;