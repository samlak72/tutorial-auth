import React from 'react';
import {Link, Route} from "react-router-dom";

import home from './home';
import signin from './signin';
import signup from './signup';
import profile from './profile';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="https://material-ui.com/">
                Samla Soft
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const BaseLayout = () => (
    <>
        <CssBaseline />
        <header>
            <p>Tutorial Auth</p>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/signin"}>Sign In</Link></li>
                    <li><Link to={"/signup"}>Sign Up</Link></li>
                    <li><Link to={"/profile"}>Profile</Link></li>
                </ul>
            </nav>
        </header>
        <div>
            <Route path={"/"} exact component={home}/>
            <Route path={"/signin"} exact component={signin}/>
            <Route path={"/signup"} exact component={signup}/>
            <Route path={"/profile"} exact component={profile}/>
        </div>
        <Box mt={8}>
            <Copyright />
        </Box>
    </>
);

export default BaseLayout;
