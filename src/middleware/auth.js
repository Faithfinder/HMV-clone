export const loginRequired = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.sendStatus(401);
};

export const adminRequired = (req, res, next) => {
    if (req.user.isAdmin) return next();
    res.sendStatus(403);
};
