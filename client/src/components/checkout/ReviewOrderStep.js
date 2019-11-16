import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";

import StepButtons from "src/components/checkout/StepButtons";
import Message from "src/components/common/Message";

const useStyles = makeStyles(() => ({ table: { width: "100%" } }));

export default ({ incrementStep, decrementStep }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const currentOrder = useSelector(({ orders }) => orders.currentOrder);

    const confirmOrder = () => {
        incrementStep();
    };

    const renderRow = ({ id, title, price, amount }) => {
        return (
            <TableRow key={id}>
                <TableCell>{title}</TableCell>
                <TableCell align="right">{price}</TableCell>
                <TableCell align="right">{amount}</TableCell>
                <TableCell align="right">{price * amount}</TableCell>
            </TableRow>
        );
    };

    return (
        <Grid container direction="column" alignItems="center">
            <Typography variant="h5" component="div" className={classes.margin}>
                Confirm order
            </Typography>
            <Paper className={classes.table}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Price for one</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Price for all</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{currentOrder.items.map(renderRow)}</TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell rowSpan={2} colSpan={2} />
                            <TableCell>E-Mail</TableCell>
                            <TableCell align="right">
                                {currentOrder.email}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total</TableCell>
                            <TableCell align="right">
                                {currentOrder.total}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
            <StepButtons
                previousHandler={decrementStep}
                proceedHandler={confirmOrder}
                proceedLabel="Confirm"
            />
            <Message>
                After you confirm your order we will send you an email with
                order details. No actual transactions are happening, this store
                is a demo.
            </Message>
        </Grid>
    );
};
