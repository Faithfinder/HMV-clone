import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";

import Item, { createItemValidationSchema } from "src/types/Item";
import CategorySelect from "src/components/common/CategorySelect";

const useStyles = makeStyles(theme => ({
    control: { margin: theme.spacing(1, 2) },
    submit: {
        alignSelf: "flex-start"
    }
}));

const ItemForm = ({ submitAction, initialItem }) => {
    const classes = useStyles();
    const [isFeatured, setIsFeatured] = useState(initialItem.isFeatured);

    const handleSubmit = (values, actions) => {
        values.isFeatured = isFeatured;
        submitAction(values);
    };

    return (
        <Formik
            initialValues={{ ...initialItem } || new Item()}
            validationSchema={createItemValidationSchema(isFeatured)}
            onSubmit={handleSubmit}
        >
            <Grid container direction="column" component={Form}>
                <Field
                    id="title"
                    name="title"
                    label="Title"
                    autoComplete="off"
                    variant="outlined"
                    component={TextField}
                    className={classes.control}
                />
                <Field
                    id="description"
                    name="description"
                    label="Description"
                    multiline
                    variant="outlined"
                    rows={3}
                    rowsMax={15}
                    component={TextField}
                    className={classes.control}
                />
                <Field
                    id="image"
                    name="image"
                    label="Image"
                    autoComplete="off"
                    variant="outlined"
                    component={TextField}
                    className={classes.control}
                />
                <Field
                    id="price"
                    type="number"
                    name="price"
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
                            id="isFeatured"
                            checked={isFeatured}
                            value={isFeatured}
                            onClick={() => setIsFeatured(!isFeatured)}
                        ></Checkbox>
                    }
                    label="Feature this item in the carousel"
                />
                <Field
                    id="featured-image"
                    name="featured.image"
                    label="Image"
                    autoComplete="off"
                    variant="outlined"
                    disabled={!isFeatured}
                    component={TextField}
                    className={classes.control}
                />
                <Field
                    id="featured-caption"
                    name="featured.caption"
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
