import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Facebook from "../auth/Facebook";
import ShoppingCartButton from "./ShoppingCartButton";
import Link from "../common/CombinedLink";

const useStyles = makeStyles(theme => ({
    space: {
        flex: 1
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link variant="h6" to="/" color="inherit" underline="none">
                    Media Store Prototype
                </Link>
                <div className={classes.space} />
                <Facebook />
                <ShoppingCartButton />
            </Toolbar>
        </AppBar>
    );
};
