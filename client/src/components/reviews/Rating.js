import React from "react";
import { useField } from "formik";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/styles";

const ErrorTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.error.main,
        fontWeight: "normal"
    }
}))(Tooltip);

export default ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Box component="fieldset" borderColor="transparent" display="inline">
            <Typography component="legend">{label}</Typography>
            <ErrorTooltip
                title={meta.error || ""}
                arrow={1}
                open={Boolean(meta.touched && meta.error)}
            >
                <Rating
                    {...field}
                    onChange={(_syntheticEvent, newValue) => {
                        const event = {
                            target: {
                                type: "radio",
                                name: field.name,
                                value: newValue
                            }
                        };
                        field.onChange(event);
                    }}
                />
            </ErrorTooltip>
        </Box>
    );
};
