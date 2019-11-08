import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { toggleDrawer } from "./helpers";

const useStyles = makeStyles(theme => ({
    drawerHeading: {
        margin: "1em"
    }
}));

export const CartDrawer = ({ cartContents }) => {
    const classes = useStyles();
    const [drawerOpen] = useSelector(({ ui }) => [ui.cartDrawerOpen]);

    return (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Typography variant="h4" className={classes.drawerHeading}>
                Shopping Cart
            </Typography>
            <Divider light />
        </Drawer>
    );
};
