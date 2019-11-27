import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import * as yup from "yup";

import Rating from "src/components/reviews/Rating";
import { useCurrentUser } from "src/redux/auth/selectors";
import { createReview } from "src/redux/reviews/actions";

const useStyles = makeStyles(theme => ({
    grow: {
        flex: "1 0 auto"
    },
    submitButton: {
        alignSelf: "flex-start",
        margin: theme.spacing(2, 2, 0, 2)
    },
    fields: {
        margin: theme.spacing(1, 0)
    },
    container: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
}));

const NewReviewForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const validationSchema = yup.object({
        review: yup.object({
            title: yup
                .string()
                .min(5, "Please provide a longer title")
                .max(150, "Please provide a shorter title")
                .required("Please provide a title"),
            content: yup.string().required("Please write your review"),
            rating: yup
                .number()
                .min(1, "Please choose a rating")
                .required("Required")
        })
    });

    const [currentUser] = useCurrentUser();
    const { itemId } = useParams();

    const handleSubmit = (values, actions) => {
        dispatch(createReview(itemId, values));
        actions.setSubmitting(false);
        actions.resetForm();
    };

    return (
        <Paper className={classes.container}>
            <Typography variant="h6">Post your review:</Typography>
            <Formik
                initialValues={{
                    review: {
                        rating: 0,
                        title: "",
                        content: "",
                        author: currentUser.userId
                    }
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Grid container direction="column" component={Form}>
                    <Box display="flex" className={classes.fields}>
                        <Field
                            id="review-title"
                            name="review.title"
                            label="Review title"
                            autoComplete="off"
                            variant="outlined"
                            component={TextField}
                            className={classes.grow}
                        />
                        <Rating name="review.rating" label="Your rating" />
                    </Box>
                    <Field
                        id="review-content"
                        name="review.content"
                        label="Your review"
                        multiline
                        variant="outlined"
                        rows={3}
                        rowsMax={15}
                        component={TextField}
                        className={classes.fields}
                    />
                    <Button
                        type="submit"
                        variant="outlined"
                        className={classes.submitButton}
                    >
                        Submit
                    </Button>
                </Grid>
            </Formik>
        </Paper>
    );
};

export default NewReviewForm;
