import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Field, reduxForm} from "redux-form";
import asyncValidate from "../api/asyncValidate";
import {validateFields} from "../validate/validate";
import {renderCheckBox, renderTextField} from "./RenderField";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const validate = values => {
    const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'password',
        'confirmPassword',
    ];

    return validateFields(values,requiredFields);
};

const SignUpForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Field
                                name={"firstName"}
                                component={renderTextField}
                                label={"First Name"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                name={"lastName"}
                                component={renderTextField}
                                label={"Last Name"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name={"email"}
                                component={renderTextField}
                                label={"Email"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name={"password"}
                                component={renderTextField}
                                label={"Password"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name={"confirmPassword"}
                                component={renderTextField}
                                label={"Confirm Password"}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name={"allowEmail"}
                                value="allowExtraEmails"
                                label="I want to receive inspiration, marketing promotions and updates via email."
                                component={renderCheckBox}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default reduxForm({
    form: 'SignUpForm',
    validate,
    asyncValidate,
})(SignUpForm);
