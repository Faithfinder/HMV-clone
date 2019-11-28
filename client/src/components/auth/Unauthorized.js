import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        alignSelf: "center",
        width: "50%",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        flex: "1 0 25vh"
    },
    grow1: {
        flex: "2 1 auto"
    },
    grow2: {
        flex: "3 1 auto"
    },
    center: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

const Unauthorized = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <>
            <div className={classes.grow1} />
            <Box className={classes.container}>
                <div className={classes.center}>
                    <Typography variant="h1">403</Typography>
                    <Typography variant="h2">Unauthorized</Typography>
                </div>
                <Typography variant="body1" align="center">
                    Unfortunately you are not authorized to view this page.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={history.goBack}
                >
                    Go back
                </Button>
            </Box>
            <div className={classes.grow2} />
        </>
    );
};

export default Unauthorized;
