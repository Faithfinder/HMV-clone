import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import PrivateComponent from "src/components/auth/PrivateComponent";
import { deleteReview } from "src/actions/reviews";
import useConfirmationDialog from "src/components/common/useConfirmationDIalog";

const useStyles = makeStyles(theme => ({
    grow: {
        flex: "1 0 auto"
    },
    button: {
        margin: theme.spacing(1)
    },
    padding: {
        padding: theme.spacing(1)
    }
}));

const ReviewItem = ({ review }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const { itemId } = useParams();
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(deleteReview(itemId, review._id));
    };

    const [openDialog, Dialog] = useConfirmationDialog(
        "Do you want to delete this review?",
        "The review will be deleted permanently",
        deleteHandler
    );

    return (
        <>
            <Grid item component={Paper} elevation={0}>
                <Grid container alignItems="center">
                    <div>
                        <Typography variant="subtitle2">
                            {review.title}
                        </Typography>
                        <Typography variant="subtitle1">
                            {review.author.email}
                        </Typography>
                    </div>
                    <div className={classes.grow} />
                    <Rating value={review.rating} readOnly />
                    <PrivateComponent adminOnly>
                        <Tooltip title="Delete review">
                            <IconButton size="small" onClick={openDialog}>
                                <DeleteForeverIcon />
                            </IconButton>
                        </Tooltip>
                    </PrivateComponent>
                </Grid>
                <Collapse
                    collapsedHeight="90px"
                    in={expanded}
                    className={classes.padding}
                >
                    <Typography variant="body2" align="justify">
                        {review.content}
                    </Typography>
                </Collapse>
                <Button
                    onClick={() => setExpanded(!expanded)}
                    variant="outlined"
                    className={classes.button}
                >
                    {expanded ? "Read less" : "Read more"}
                </Button>
                <Divider variant="middle" />
            </Grid>
            <Dialog />
        </>
    );
};

export default ReviewItem;
