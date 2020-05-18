import React, {useEffect, useState} from 'react';
import SignUpForm from "./user/form/SignUpForm";

const SignUp = () => {

    const handleSubmit = (values) => {
        // submit data

    }

    return (
        <SignUpForm onSubmit={handleSubmit}/>
    );
}

export default SignUp;