import React from 'react';
import BaseLayout from "./BaseLayout";
import {BrowserRouter as Router} from "react-router-dom";
import Container from '@material-ui/core/Container';

export default function App() {
    return (
        <Router>
            <Container component="main"  maxWidth={"xs"}>
                <BaseLayout/>
            </Container>
        </Router>

    );
}