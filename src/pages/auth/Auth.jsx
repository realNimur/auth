import React from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import './auth.css';

const Auth = () => {
    return (
        <form className={"auth-form"}>
            <Input type={"text"} name={"login"} caption={"Login"} cls={" input_form"} id={"login"}/>
            <Input type={"password"} name={"password"} caption={"Password"} cls={" input_form"} id={"password"} />
            <Button caption={"Login"} type={"button"} cls={"button_submit"} isDisabled={true}/>
        </form>
    );
};

export default Auth;