import React from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    const {login} = useSelector(state => state.currentUser);
    return (
        <h1>{login}</h1>
    );
};

export default Profile;