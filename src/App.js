import React from 'react';
import BaseLayout from "./BaseLayout";
import {BrowserRouter as Router} from "react-router-dom";
import Container from '@material-ui/core/Container';

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {Provider} from "react-redux";
const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
});
const store = createStore(rootReducer);

export default function App() {
    return (
        <Router>
            <Provider store={store}>
                <Container component="main"  maxWidth={"xs"}>
                    <BaseLayout/>
                </Container>
            </Provider>
        </Router>
    );
}