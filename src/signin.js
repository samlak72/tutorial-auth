import React from 'react';
import SignInForm from "./user/form/SignInForm";

const SignIn = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return(
        <SignInForm onSubmit={handleSubmit}/>
    )
}

export default SignIn;