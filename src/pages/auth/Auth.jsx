import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import './auth.css';
import {useDispatch, useSelector} from "react-redux";
import {AUTH_LOGIN} from "../../redux/action";

const Auth = () => {
    const dispatch = useDispatch();
    const {login, password} = useSelector(state => state.dataUser);
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });
    const handleChangeLogin = (e) => {
        setFormData({
            ...formData,
            login: e.target.value,
        })
    };
    const handleChangePassword = (e) => {
        setFormData({
            ...formData,
            password: e.target.value,
        })
    }

    return (
        <form className={"auth-form"} onSubmit={
            (e) => {
                e.preventDefault();
                dispatch({type: AUTH_LOGIN, payload: {login: formData.login}});
            }}>
            <Input type={"text"} name={"login"} caption={"Login"} cls={" input_form"} id={"login"}
                   value={formData.login} handleChange={handleChangeLogin}/>
            <Input type={"password"} name={"password"} caption={"Password"} cls={"input_form"} id={"password"}
                   value={formData.password} handleChange={handleChangePassword}/>
            <Button caption={"Login"} type={"submit"} cls={"button_submit"}
                    isDisabled={formData.login === login && formData.password === password ? false : true}/>
        </form>
    );
};

export default Auth;