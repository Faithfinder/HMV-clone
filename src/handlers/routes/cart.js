export const getCart = async ({ session: { cart } }, res, next) => {
    try {
        if (!cart) cart = {};
        return res.status(200).json(cart);
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
