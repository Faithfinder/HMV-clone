import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Facebook from "../Facebook";
import ShoppingCartButton from "./ShoppingCartButton";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Media Store Prototype
                </Typography>
                <Facebook />

                <ShoppingCartButton />
            </Toolbar>
        </AppBar>
    );
};
