import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

import { useField } from "formik";

import categories from "src/types/categories";

const useStyles = makeStyles(theme => ({
    control: { margin: theme.spacing(1, 2) }
}));

const CategorySelect = () => {
    const [field, meta] = useField("item.category");
    const classes = useStyles();
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <FormControl
            variant="outlined"
            className={classes.control}
            error={meta.error && meta.touched}
        >
            <InputLabel ref={inputLabel} htmlFor="item-category">
                Category
            </InputLabel>
            <Select
                id="item-category"
                name="item.category"
                label="Category"
                autoComplete="off"
                {...field}
                error={meta.error && meta.touched}
                labelWidth={labelWidth}
            >
                {categories.map(category => (
                    <MenuItem key={category} value={category}>
                        {category}
                    </MenuItem>
                ))}
            </Select>
            {meta.error && meta.touched && (
                <FormHelperText error>{meta.error}</FormHelperText>
            )}
        </FormControl>
    );
};

export default CategorySelect;
