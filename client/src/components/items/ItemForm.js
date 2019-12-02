import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";

import Item, { createItemValidationSchema } from "src/types/Item";
import CategorySelect from "../common/CategorySelect";

const useStyles = makeStyles(theme => ({
    control: { margin: theme.spacing(1, 2) },
    submit: {
        alignSelf: "flex-start"
    }
}));

const ItemForm = ({ submitAction }) => {
    const classes = useStyles();
    const [isFeatured, setIsFeatured] = useState(false);

    const handleSubmit = (values, actions) => {
        values.item.isFeatured = isFeatured;
        submitAction(values);
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{
                item: new Item()
            }}
            validationSchema={createItemValidationSchema(isFeatured)}
            onSubmit={handleSubmit}
        >
            <Grid container direction="column" component={Form}>
                <Field
                    id="item-title"
                    name="item.title"
                    label="Title"
                    autoComplete="off"
                    variant="outlined"
                    component={TextField}
                    className={classes.control}
                />
                <Field
                    id="item-description"
                    name="item.description"
                    label="Description"
                    multiline
                    variant="outlined"
                    rows={3}
                    rowsMax={15}
                    component={TextField}
                    className={classes.control}
                />
                <Field
                    id="item-image"
                    name="item.image"
                    label="image"
                    autoComplete="off"
                    variant="outlined"
                    component={TextField}
                    className={classes.control}
                />
                <Field
                    id="item-price"
                    type="number"
                    name="item.price"
                    label="Price"
                    autoComplete="off"
                    variant="outlined"
                    component={TextField}
                    className={classes.control}
                />
                <CategorySelect />
                <FormControlLabel
                    className={classes.control}
                    control={
                        <Checkbox
                            value={isFeatured}
                            onClick={() => setIsFeatured(!isFeatured)}
                        ></Checkbox>
                    }
                    label="Feature this item in the carousel"
                />
                <Field
                    id="item-featured-image"
                    name="item.featured.image"
                    label="Image"
                    autoComplete="off"
                    variant="outlined"
                    disabled={!isFeatured}
                    component={TextField}
                    className={classes.control}
                />
                <Field
                    id="item-featured-caption"
                    name="item.featured.caption"
                    label="Caption"
                    autoComplete="off"
                    variant="outlined"
                    disabled={!isFeatured}
                    component={TextField}
                    className={classes.control}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    className={classes.control + " " + classes.submit}
                >
                    Submit
                </Button>
            </Grid>
        </Formik>
    );
};

export default ItemForm;
