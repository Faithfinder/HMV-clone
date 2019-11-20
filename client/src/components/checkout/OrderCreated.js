import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import history from "src/history";
import CenteredCircularProgress from "src/components/common/CenteredCircularProgress";

const useStyles = makeStyles(() => ({
    margin: {
        margin: "0.5em 0"
    }
}));

export default () => {
    const classes = useStyles();
    const [orderNumber, refreshing] = useSelector(({ orders }) => [
        orders.currentOrder.number,
        orders.refreshing
    ]);
    if (refreshing) {
        return <CenteredCircularProgress />;
    }
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="space-between"
        >
            <Typography variant="h5" component="div" className={classes.margin}>
                Your order #{orderNumber} is complete!
            </Typography>
            <Typography
                variant="body1"
                component="div"
                className={classes.margin}
            >
                You should receive your e-mail soon.
            </Typography>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => history.push("/")}
                className={classes.margin}
            >
                Return to main page
            </Button>
        </Grid>
    );
};
