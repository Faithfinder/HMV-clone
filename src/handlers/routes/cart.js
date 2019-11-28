import { Item } from "../../models";

export const getCart = async ({ session: { cart } }, res, next) => {
    try {
        if (!cart) cart = {};
        const items = await Item.find({
            _id: { $in: Object.keys(cart) }
        }).select("-items -reviews");
        return res.status(200).json({ cart, items });
    } catch (err) {
        next(err);
    }
};

export const setCart = async (req, res, next) => {
    try {
        req.session.cart = req.body.cart;
        return res.status(200).json(req.session.cart);
    } catch (err) {
        next(err);
    }
};
