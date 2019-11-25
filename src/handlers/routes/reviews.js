import { Review, Item } from "../../models";

export const createReview = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.item_id);
        const review = await Review.create(req.body.review);
        item.reviews.push(review);
        await item.save();

        const populatedReview = await review
            .populate("author", "email")
            .execPopulate();
        console.log(populatedReview);
        return res.status(200).json(populatedReview);
    } catch (err) {
        next(err);
    }
};

export const updateReview = async (req, res, next) => {
    try {
        let review = await Review.findByIdAndUpdate(
            req.params.review_id,
            req.body.review,
            { new: true }
        );

        return res.status(200).json(review);
    } catch (err) {
        next(err);
    }
};

export const deleteReview = async (req, res, next) => {
    try {
        await Review.findByIdAndDelete(req.params.review_id);
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
