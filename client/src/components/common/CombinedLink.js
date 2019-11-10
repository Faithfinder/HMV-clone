import React, { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import UILink from "@material-ui/core/Link";

//https://material-ui.com/guides/composition/#link
const Link = forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
));

export default props => {
    return (
        <UILink component={Link} {...props}>
            {props.children}
        </UILink>
    );
};
